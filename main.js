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

createLights(scene)

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
