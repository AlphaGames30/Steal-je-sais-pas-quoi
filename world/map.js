import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js"

export function createMap(scene){

let geo = new THREE.PlaneGeometry(80,80)

let mat = new THREE.MeshStandardMaterial({
color:0x444444
})

let ground = new THREE.Mesh(geo,mat)

ground.rotation.x = -Math.PI/2

scene.add(ground)

}
