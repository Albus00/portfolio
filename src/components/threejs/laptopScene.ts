import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { setupScene } from './sceneSetup';
import { screenFragmentShader, screenVertexShader } from './shaders/screenShader';


export default function treeScene(elementId: string) {
  // Create materials
  function createMaterials() {
    function plasticMat(mat: THREE.MeshStandardMaterial) {
      mat.metalness = 0.0;
      mat.roughness = 0.8;
      return mat;
    }

    const tex = new THREE.TextureLoader().load("/textures/skurkeriet.png");

    const screenMat = new THREE.ShaderMaterial({
      // load the texture
      uniforms: {
        textureMap: { value: tex },
        scrollY: { value: 0 }
      },
      vertexShader: screenVertexShader(),
      fragmentShader: screenFragmentShader()
    });

    const bodyChassiMat = new THREE.MeshStandardMaterial({ color: 0x2e3139 });
    bodyChassiMat.emissive = new THREE.Color(0x2e3139);
    bodyChassiMat.emissiveIntensity = 0.2;

    const keyboardMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
    plasticMat(keyboardMat)

    const escMat = new THREE.MeshStandardMaterial({ color: 0xf2d83e });
    plasticMat(escMat)
    escMat.emissive = new THREE.Color(0xf2d83e);
    escMat.emissiveIntensity = 0.8;

    const baseMat = new THREE.MeshStandardMaterial({ color: 0x7d7d7d });
    baseMat.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace("void main() {", `
        varying vec2 vUv;
        void main() {
          vUv = uv;
      `);
      shader.fragmentShader = shader.fragmentShader.replace("void main() {", `
        varying vec2 vUv;
        void main() {
      `);
      shader.fragmentShader = shader.fragmentShader.replace(
        `#include <dithering_fragment>`,
        `#include <dithering_fragment>

          float d = distance(vUv, vec2(0.5));
          gl_FragColor.a = (1.0 - d);
        `,
      )
    }

    baseMat.transparent = true;

    return { screenMat, bodyChassiMat, baseMat, keyboardMat, escMat };
  }

  // Load the tree model
  function loadModel() {
    const loader = new GLTFLoader();
    loader.load('/models/laptop.glb', function (gltf) {
      const content = gltf.scene.children;

      content.forEach((child: THREE.Object3D) => {
        if (child.isObject3D) {
          // Set the materials and shadows for the tree parts
          const mesh = child as THREE.Mesh;
          switch (mesh.name) {
            case 'keyboard':
              mesh.material = keyboardMat;
              break;
            case 'esc':
              mesh.material = escMat;
              break;
            case 'screen':
              mesh.material = screenMat;
              break;
            case 'base':
              mesh.material = baseMat;
              mesh.receiveShadow = true;
              break;
            default:
              mesh.material = bodyChassiMat;
              break;
          }
        }
      });

      // Add everything except the base to a group, so that we can animate the laptop
      const laptop = new THREE.Group();
      laptop.add(...content.filter((child: THREE.Object3D) => child.name !== 'base'));
      laptop.rotation.y = Math.PI / 2;

      const base = content.find((child: THREE.Object3D) => child.name === 'base')!;

      // Add the laptop and the base to the scene
      scene.add(laptop);
      scene.add(base);
    }, undefined, function (error) {
      console.error(error);
    });
  }

  // Set up the lights
  function setupLights() {
    //Create a DirectionalLight and turn on shadows for the light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(mainLightPosition.x, mainLightPosition.y, mainLightPosition.z); //default; light shining from top
    directionalLight.castShadow = true; // default false
    scene.add(directionalLight);
  }

  function animate() {
    // rotate the laptop
    const bobbingAmount = 0.001;
    const bobbingSpeed = 0.001;

    // If the scene is not loaded yet
    if (scene.children.length < 2)
      return;

    scene.children[1].position.y += Math.sin(Date.now() * bobbingSpeed) * bobbingAmount;

    renderer.render(scene, camera);
    screenMat.uniforms['scrollY'].value = scrollY / window.innerHeight;
  }

  // Get the element to render the scene
  const renderElement = document.getElementById(elementId);
  if (!renderElement) {
    console.error(`Element with id ${elementId} not found`);
    return;
  }
  const renderElementPosition = renderElement.getBoundingClientRect();
  const renderElementCenterX = renderElementPosition.left + renderElementPosition.width / 2;
  const renderElementCenterY = renderElementPosition.top + renderElementPosition.height / 2;

  // Get mouse position
  const scaleX = 2;
  const scaleY = 0.5;
  window.addEventListener('mousemove', (event) => {
    // If the scene is not loaded yet
    // If the scene is not loaded yet
    if (scene.children.length < 2)
      return;

    const x = event.clientX / renderElementCenterX - 1;
    const y = event.clientY / renderElementCenterY - 1;
    scene.children[0].position.set(mainLightPosition.x - x * scaleX, mainLightPosition.y - y * scaleY, mainLightPosition.z);

    // rotate the laptop
    scene.children[1].rotation.x = -y * 0.005;
    scene.children[1].rotation.y = x * 0.01 + Math.PI / 2;
    scene.children[1].rotation.z = -y * 0.005;
  });

  // Get mouse scroll
  let scrollY = 0;
  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
  });

  const mainLightPosition = new THREE.Vector3(-5, 5, 5);
  const { scene, camera, renderer } = setupScene(renderElement, elementId, { height: 2, lookAtZ: 0.5, zoom: 3.3 });
  renderer.setAnimationLoop(animate);
  const { screenMat, bodyChassiMat, baseMat, keyboardMat, escMat } = createMaterials();


  loadModel();
  setupLights();
}