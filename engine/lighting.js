import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js"

export function createLights(scene){

let light = new THREE.DirectionalLight(0xffffff,1)

light.position.set(10,20,10)

scene.add(light)

let ambient = new THREE.AmbientLight(0x555555)

scene.add(ambient)

}
