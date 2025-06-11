import * as THREE from "three";

const canvas = document.querySelector('canvas.webgl')

// scene
const scene = new THREE.Scene();

// object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "#ff0000" });
const mesh = new THREE.Mesh(geometry, material);

const edges = new THREE.EdgesGeometry(geometry); // get edges from geometry
const lineMaterial = new THREE.LineBasicMaterial({ color: "#0f00ff" }); // white border
const lineSegments = new THREE.LineSegments(edges, lineMaterial);

scene.add(lineSegments);
scene.add(mesh)

// sizes
const sizes = {
  width: 800,
  height: 600
}

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 2
camera.position.y = 2
camera.position.x = 2
camera.lookAt(0,0,0)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)
