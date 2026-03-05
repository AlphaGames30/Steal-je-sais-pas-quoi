import {cameraFollow} from "./cameraFollow.js"

export function createPlayer(scene, camera){

    const player = {
        x:0,
        y:0.5,
        z:10,
        speed:0.3,
        mesh:null
    }

    // Création du modèle joueur (cube simple)
    const geometry = new THREE.BoxGeometry(1,1,1)
    const material = new THREE.MeshStandardMaterial({color:0x00ffcc})
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(player.x, player.y, player.z)
    scene.add(mesh)
    player.mesh = mesh

    // Gestion touches clavier
    const keys = {}
    document.addEventListener("keydown", e => keys[e.key.toLowerCase()] = true)
    document.addEventListener("keyup", e => keys[e.key.toLowerCase()] = false)

    player.update = () => {
        // déplacements
        if(keys["z"] || keys["w"]) player.z -= player.speed
        if(keys["s"]) player.z += player.speed
        if(keys["q"] || keys["a"]) player.x -= player.speed
        if(keys["d"]) player.x += player.speed

        // mise à jour position mesh
        player.mesh.position.set(player.x, player.y, player.z)

        // mise à jour caméra
        cameraFollow(camera, player)
    }

    return player
}
