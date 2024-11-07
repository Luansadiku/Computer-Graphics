
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.z = 20;
controls.update();
controls.enableDamping = true;
controls.dampingFactor = 0.25;


const grassGeometry = new THREE.PlaneGeometry(30, 30);
const grassMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const grass = new THREE.Mesh(grassGeometry, grassMaterial);
grass.rotation.x = -Math.PI / 2;
scene.add(grass);


const roadGeometry = new THREE.PlaneGeometry(4, 30);
const roadMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
const road = new THREE.Mesh(roadGeometry, roadMaterial);
road.rotation.x = -Math.PI / 2;
scene.add(road);

const crossRoadGeometry = new THREE.PlaneGeometry(30, 4);
const crossRoad = new THREE.Mesh(crossRoadGeometry, roadMaterial);
crossRoad.rotation.x = -Math.PI / 2;
scene.add(crossRoad);


const building1 = new THREE.Mesh(new THREE.BoxGeometry(9, 6, 3), new THREE.MeshBasicMaterial({ color: 0xFFFFF }));
building1.position.set(-8, 3, -7);
scene.add(building1);

const building2 = new THREE.Mesh(new THREE.BoxGeometry(9, 6, 3), new THREE.MeshBasicMaterial({ color: 0xFFD580 }));
building2.position.set(8, 3, -7);
scene.add(building2);

const building3 = new THREE.Mesh(new THREE.BoxGeometry(8, 6, 6), new THREE.MeshBasicMaterial({ color: 0x0000ff }));
building3.position.set(7, 3, 7);
scene.add(building3);


const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), new THREE.MeshBasicMaterial({ color: 0x808080 }));
sphere.position.set(0, 0.5, -15); 
scene.add(sphere);


function animateSphere() {
  const timeline = gsap.timeline({ repeat: -1, ease: "power1.inOut" });
  
  
  timeline
    .to(sphere.position, { z: -15, duration: 2 })   
    .to(sphere.position, { z: 0, duration: 2 })     
    .to(sphere.position, { x: 15, duration: 2 })    
    .to(sphere.position, { x: 0, duration: 2 })     
    .to(sphere.position, { z: 15, duration: 2 })    
    .to(sphere.position, { z: 0, duration: 2 })     
    .to(sphere.position, { x: -15, duration: 2 })   
    .to(sphere.position, { x: 0, duration: 2 })    
    .to(sphere.position, { z: -15, duration: 2});
}

animateSphere();


function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();

animate();


window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
