import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { fragmentShader, vertexShader } from './leavesShader';


export default function treeScene(elementId: string) {
  // Set up the scene
  function setupScene(): { scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer } {
    // Set up the camera
    function setupCamera(): THREE.PerspectiveCamera {
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      const zoom = 1;
      camera.position.set(10 / zoom, 4, 6 / zoom);
      camera.lookAt(0, 3, 0);
      return camera;
    }

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer();

    // Get the width and height of the element to render the scene
    if (!renderElement) {
      console.error(`Element with id ${elementId} not found`);
      return { scene: scene, camera: new THREE.PerspectiveCamera(), renderer: renderer };
    }
    const { offsetWidth: width, offsetHeight: height } = renderElement;

    // Set up the camera and renderer
    const camera = setupCamera();
    renderer.setSize(width, height);
    renderer.setClearColor(0xffffff, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    renderer.setAnimationLoop(animate);
    renderElement.appendChild(renderer.domElement);

    return { scene, camera, renderer };
  }

  // Create materials
  function createMaterials() {
    // const leavesTexture = new THREE.TextureLoader().load("/textures/tree-leaves.png");
    // const leavesMat = new THREE.MeshBasicMaterial({
    //   color: 0x44ee47, reflectivity: 0.5, transparent: true,
    //   alphaTest: 0.5, alphaMap: leavesTexture
    // });
    // return leavesMat;

    const leavesMat = new THREE.ShaderMaterial({
      uniforms: {
        colorA: { value: new THREE.Color(0x00ff00) },
        colorB: { value: new THREE.Color(0x007700) },
        lightPosition: { value: mainLightPosition },
        alphaMap: { value: new THREE.TextureLoader().load("/textures/tree-leaves.png") },
        time: { value: 0.0 }
      },
      vertexShader: vertexShader(),
      fragmentShader: fragmentShader()
    });

    return leavesMat;
  }

  // Load the tree model
  function loadModel() {
    const loader = new GLTFLoader();
    loader.load('/models/tree.glb', function (gltf) {
      gltf.scene.rotation.y = Math.PI / 3;
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
              mesh.castShadow = true;
              break;
            case 'base':
              mesh.receiveShadow = true;
              break;
            case 'Plane':
              mesh.material = leavesMat;
              break
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

    const point = new THREE.PointLight(0xffffff, 1, 100);
    point.position.set(0, 4, 0);
    scene.add(point);

    // const helper = new THREE.CameraHelper(directionalLight.shadow.camera);
    // scene.add(helper)
  }

  // Resize the scene when the window is resized
  function onWindowResize() {
    if (!renderElement)
      return;

    camera.aspect = renderElement.offsetWidth / renderElement.offsetHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(renderElement.offsetWidth, renderElement.offsetHeight);
  }

  function animate() {
    renderer.render(scene, camera);
    leavesMat.uniforms['time'].value = .00025 * (Date.now() - start);
  }

  window.addEventListener('resize', onWindowResize, false);

  // Get the element to render the scene
  const renderElement = document.getElementById(elementId);
  if (!renderElement) {
    console.error(`Element with id ${elementId} not found`);
    return;
  }

  const mainLightPosition = new THREE.Vector3(5, 5, 5);
  const start = Date.now();
  const { scene, camera, renderer } = setupScene();
  const leavesMat = createMaterials();
  loadModel();
  setupLights()
}