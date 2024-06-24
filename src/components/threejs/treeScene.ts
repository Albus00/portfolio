import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function treeScene(elementId: string) {
  // Get the element to render the scene
  const renderElement = document.getElementById(elementId);
  if (!renderElement) {
    console.error(`Element with id ${elementId} not found`);
    return;
  }
  const loader = new GLTFLoader();
  loader.load('/models/tree.gltf', function (gltf) {
    scene.add(gltf.scene);
  }, undefined, function (error) {
    console.error(error);
  });

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, renderElement.offsetWidth / renderElement.offsetHeight, 0.1, 1000);


  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer();

  renderer.setSize(renderElement.offsetWidth, renderElement.offsetHeight);
  renderElement.appendChild(renderer.domElement);

  function animate() {
    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);
}