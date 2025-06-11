import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const group = new THREE.Group()
scene.add(group)



const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "#ff0000" });
const boxMesh = new THREE.Mesh(geometry, material);
boxMesh.position.set(1, 2, -1.5);
boxMesh.scale.set(2, 0.5, 0.5)
boxMesh.rotation.y = 1
boxMesh.rotation.z = Math.PI * 0.5
group.add(boxMesh);

const circMesh = new THREE.Mesh(
  new THREE.SphereGeometry(1),
  new THREE.MeshBasicMaterial({color: "#00f0ff"})
)
circMesh.position.set(1, 1, 1)
group.add(circMesh)
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(2, 4, -2);
camera.lookAt(circMesh.position)
group.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
