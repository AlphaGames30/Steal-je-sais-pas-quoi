import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js"

export function createBases(scene){

let positions = [

[-25,-20],
[-10,-20],
[10,-20],
[25,-20],

[-25,20],
[-10,20],
[10,20],
[25,20]

]

for(let p of positions){

let geo = new THREE.BoxGeometry(6,2,6)

let mat = new THREE.MeshStandardMaterial({
color:0x2222ff
})

let base = new THREE.Mesh(geo,mat)

base.position.set(p[0],1,p[1])

scene.add(base)

}

}
