import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
console.log(OrbitControls);
/**
 * Cursor
 */
const cursor = {
  x: 0,
  y: 0,
};
window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = -(event.clientY / sizes.height - 0.5);
});

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 }),
);
scene.add(mesh);

// Camera
const camera = new THREE.PerspectiveCamera(
  100,
  sizes.width / sizes.height,
  0.1,
  100,
);
// const aspectRatio = sizes.width / sizes.height;
// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio,
//   1,
//   -1,
//   0.1,
//   100,
// );
camera.position.z = 3;
camera.lookAt(mesh.position);
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
const controls = new OrbitControls(camera, canvas);

controls.enableDamping = true
// Animate
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // camera.position.x = Math.sin(cursor.x * 2 * Math.PI) * 2//10 * cursor.x;
  // camera.position.z = Math.cos(cursor.x * 2 * Math.PI) * 2//10 * cursor.x;
  // camera.position.y = cursor.y * 3
  // mesh.rotateY()

  camera.lookAt(mesh.position);
  // Update objects
  // mesh.rotation.y = elapsedTime;

  // Render
  renderer.render(scene, camera);
  controls.update()
  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
