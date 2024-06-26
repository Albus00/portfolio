import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { leavesFragmentShader, leavesVertexShader } from './shaders/leavesShader';
import { trunkFragmentShader, trunkVertexShader } from './shaders/trunkShader';
import { setupScene } from './sceneSetup';


export default function treeScene(elementId: string) {
  // Create materials
  function createMaterials() {
    const leavesMat = new THREE.ShaderMaterial({
      uniforms: {
        colorA: { value: new THREE.Color(0x00dd00) },
        colorB: { value: new THREE.Color(0x007700) },
        lightPosition: { value: mainLightPosition },
        alphaMap: { value: new THREE.TextureLoader().load("/textures/tree-leaves.png") },
        time: { value: 0.0 }
      },
      vertexShader: leavesVertexShader(),
      fragmentShader: leavesFragmentShader()
    });

    const trunkMat = new THREE.ShaderMaterial({
      uniforms: {
        colorA: { value: new THREE.Color(0xa77e4a) },
        colorB: { value: new THREE.Color(0xc09054) },
        lightPosition: { value: mainLightPosition },
        time: { value: 0.0 }
      },
      vertexShader: trunkVertexShader(),
      fragmentShader: trunkFragmentShader()
    });

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

    return { leavesMat, trunkMat, baseMat };
  }

  // Load the tree model
  function loadModel() {
    const loader = new GLTFLoader();
    loader.load('/models/tree.glb', function (gltf) {
      gltf.scene.rotation.y = Math.PI / 2;
      const content = gltf.scene.children;

      content.forEach((child: THREE.Object3D) => {
        if (child.isObject3D) {
          // Set the materials and shadows for the tree parts
          const mesh = child as THREE.Mesh;
          switch (mesh.name) {
            case 'leaves':
              mesh.material = leavesMat;
              mesh.castShadow = true;
              break;
            case 'trunk':
              mesh.material = trunkMat;
              mesh.castShadow = true;
              break;
            case 'base':
              mesh.material = baseMat;
              mesh.receiveShadow = true;
              break;
            default:
              break;
          }
        }
      });

      scene.add(gltf.scene);
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
    renderer.render(scene, camera);
    leavesMat.uniforms['time'].value = .00025 * (Date.now() - start);
    trunkMat.uniforms['time'].value = .00025 * (Date.now() - start);
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
  const scaleX = 10;
  const scaleY = 0.5;
  window.addEventListener('mousemove', (event) => {
    const x = event.clientX / renderElementCenterX - 1;
    const y = event.clientY / renderElementCenterY - 1;
    leavesMat.uniforms['lightPosition'].value = new THREE.Vector3(mainLightPosition.x - x * scaleX * 2, mainLightPosition.y - y * scaleY * 2, mainLightPosition.z);
    scene.children[0].position.set(mainLightPosition.x - x * scaleX, mainLightPosition.y - y * scaleY, mainLightPosition.z);
  });

  const mainLightPosition = new THREE.Vector3(8, 10, -20);
  const start = Date.now();
  const { scene, camera, renderer } = setupScene(renderElement, elementId, { height: 4, lookAtZ: 3, zoom: 1.7 });
  renderer.setAnimationLoop(animate);
  const { leavesMat, trunkMat, baseMat } = createMaterials();

  loadModel();
  setupLights()
}