import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js"
import {randomRarity} from "./raritySystem.js"
import {beltLength} from "../world/conveyor.js"

export let brainrots = []

export function spawnBrainrot(scene){

let rarity = randomRarity()

let geo = new THREE.BoxGeometry(1,1,1)

let mat = new THREE.MeshStandardMaterial({
color:rarity.color
})

let cube = new THREE.Mesh(geo,mat)

cube.position.set(0,0.6,-beltLength/2)

scene.add(cube)

brainrots.push({

mesh:cube,
z:-beltLength/2,
value:rarity.value,
rarity:rarity.name

})

}

export function updateBrainrots(scene,moneyCallback){

for(let b of brainrots){

b.z += 0.05

b.mesh.position.z = b.z

if(b.z > beltLength/2){

moneyCallback(b.value)

b.z = -beltLength/2

}

}

}
