import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js"

export const beltLength = 36
export const beltWidth = 6

export function createConveyor(scene){

let geo = new THREE.BoxGeometry(beltWidth,0.2,beltLength)

let mat = new THREE.MeshStandardMaterial({
color:0xaa0000
})

let belt = new THREE.Mesh(geo,mat)

belt.position.y = 0.1

scene.add(belt)

}
