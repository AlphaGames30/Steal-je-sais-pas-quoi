import {createScene} from "./engine/scene.js"
import {createCamera} from "./engine/camera.js"
import {createRenderer} from "./engine/renderer.js"
import {createLights} from "./engine/lighting.js"

import {createMap} from "./world/map.js"
import {createBases} from "./world/bases.js"
import {createConveyor} from "./world/conveyor.js"

import {spawnBrainrot} from "./gameplay/brainrotSpawner.js"
import {updateEconomy} from "./gameplay/economy.js"

import {createPlayer} from "./player/playerController.js"

let scene = createScene()
let camera = createCamera()
let renderer = createRenderer()

let moveVector = {x:0, z:0}
let startX, startY

// Quand on touche l'écran
document.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX
    startY = e.touches[0].clientY
})

// Quand on bouge le doigt
document.addEventListener("touchmove", e => {
    const dx = e.touches[0].clientX - startX
    const dz = e.touches[0].clientY - startY

    // Ajuster la sensibilité
    moveVector.x = dx / 50
    moveVector.z = dz / 50
})

// Quand on relâche
document.addEventListener("touchend", e => {
    moveVector.x = 0
    moveVector.z = 0
})

createLights(scene)

import {createPlayer} from "./player/playerController.js"

let player = createPlayer(scene, camera)

function animate(){
    requestAnimationFrame(animate)

    // mise à jour du joueur
    player.update()

    // brainrots
    updateBrainrots(scene, val => moneyObj.value += val)

    // vol
    trySteal(player, brainrots)

    // HUD
    updateHUD(moneyObj.value)

    renderer.render(scene, camera)
}

createMap(scene)
createBases(scene)
createConveyor(scene)

let player = createPlayer(scene,camera)

function gameLoop(){

requestAnimationFrame(gameLoop)

player.update()

updateEconomy()

renderer.render(scene,camera)

}

gameLoop()
