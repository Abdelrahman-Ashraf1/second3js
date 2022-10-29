import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import stars from "../img/stars.jpg";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(-10, 30, 30);
orbit.update();
const textureLoader = new THREE.TextureLoader();
scene.background = textureLoader.load(stars);

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
  stars,
  stars,
  stars,
  stars,
  stars,
  stars,
  stars,
]);
function animate(time) {
  // Update the mixer on each frame
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
