import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { setupScene } from './sceneSetup';


export default function treeScene(elementId: string) {
  // Create materials
  function createMaterials() {
    const chassiMat = new THREE.MeshStandardMaterial({ color: 0x00dd00 });

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

    return { chassiMat, baseMat };
  }

  // Load the tree model
  function loadModel() {
    const loader = new GLTFLoader();
    loader.load('/models/laptop.glb', function (gltf) {
      gltf.scene.rotation.y = Math.PI / 2;
      const content = gltf.scene.children;

      content.forEach((child: THREE.Object3D) => {
        if (child.isObject3D) {
          // Set the materials and shadows for the tree parts
          const mesh = child as THREE.Mesh;
          switch (mesh.name) {
            case 'base':
              mesh.material = baseMat;
              mesh.receiveShadow = true;
              break;
            default:
              mesh.material = chassiMat;
              mesh.castShadow = true;
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
    const x = event.clientX / renderElementCenterX - 1;
    const y = event.clientY / renderElementCenterY - 1;
    scene.children[0].position.set(mainLightPosition.x - x * scaleX, mainLightPosition.y - y * scaleY, mainLightPosition.z);
  });

  const mainLightPosition = new THREE.Vector3(-15, 15, 5);
  const { scene, camera, renderer } = setupScene(renderElement, elementId);
  renderer.setAnimationLoop(animate);
  const { chassiMat, baseMat } = createMaterials();

  loadModel();
  setupLights()
}