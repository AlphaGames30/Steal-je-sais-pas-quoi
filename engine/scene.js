import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js"

export function createScene(){

let scene = new THREE.Scene()

scene.background = new THREE.Color(0x87ceeb)

return scene

}
