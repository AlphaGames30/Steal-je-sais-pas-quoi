import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js"

export function createCamera(){

let camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

camera.position.set(0,10,15)

return camera

}
