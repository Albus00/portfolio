import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function treeScene(elementId: string) {
  // Get the element to render the scene
  const renderElement = document.getElementById(elementId);
  if (!renderElement) {
    console.error(`Element with id ${elementId} not found`);
    return;
  }

  const scene = new THREE.Scene();

  const leavesTexture = new THREE.TextureLoader().load("/textures/tree-leaves.png");
  const leavesMat = new THREE.MeshBasicMaterial({
    color: 0x22bb44, side: THREE.DoubleSide,
    alphaTest: 0.5, alphaMap: leavesTexture
  });

  const loader = new GLTFLoader();
  loader.load('/models/tree.glb', function (gltf) {
    gltf.scene.rotation.y = Math.PI / 6;
    const content = gltf.scene.children;

    let leavesMesh: THREE.Mesh = new THREE.Mesh();
    content.forEach((element: THREE.Object3D) => {
      if (element.isObject3D && element.name === 'leaves') {
        leavesMesh = element as THREE.Mesh;
      }
    });

    if (leavesMesh.name === 'leaves') {
      leavesMesh.material = leavesMat;
    }

    gltf.scene.castShadow = true;
    gltf.scene.receiveShadow = true;

    scene.add(gltf.scene);
  }, undefined, function (error) {
    console.error(error);
  });

  const camera = new THREE.PerspectiveCamera(75, renderElement.offsetWidth / renderElement.offsetHeight, 0.1, 1000);
  camera.position.set(3, 4, 6);
  camera.lookAt(0, 3, 0);


  //Create a DirectionalLight and turn on shadows for the light
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 1, 0); //default; light shining from top
  light.castShadow = true; // default false
  scene.add(light);

  //Set up shadow properties for the light
  light.shadow.mapSize.width = 512; // default
  light.shadow.mapSize.height = 512; // default
  light.shadow.camera.near = 0.5; // default
  light.shadow.camera.far = 500; // default

  const planeGeometry = new THREE.PlaneGeometry(20, 1, 32, 32);
  const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true;
  scene.add(plane);

  const helper = new THREE.CameraHelper(light.shadow.camera);
  scene.add(helper);

  const renderer = new THREE.WebGLRenderer();
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

  renderer.setSize(renderElement.offsetWidth, renderElement.offsetHeight);
  renderElement.appendChild(renderer.domElement);

  function animate() {
    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);
}