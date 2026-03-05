import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js"

export function createWalls(scene){

function wall(x,z,w,h,d){

let geo = new THREE.BoxGeometry(w,h,d)

let mat = new THREE.MeshStandardMaterial({
color:0x888888
})

let mesh = new THREE.Mesh(geo,mat)

mesh.position.set(x,h/2,z)

scene.add(mesh)

}

wall(0,-40,80,5,1)
wall(0,40,80,5,1)
wall(-40,0,1,5,80)
wall(40,0,1,5,80)

}
