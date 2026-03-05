export function movePlayer(player, keys, moveVector){

    // PC (clavier)
    if(keys["z"] || keys["w"]) player.z -= player.speed
    if(keys["s"]) player.z += player.speed
    if(keys["q"] || keys["a"]) player.x -= player.speed
    if(keys["d"]) player.x += player.speed

    // Mobile (glisser sur l'écran)
    player.x += moveVector.x * player.speed
    player.z += moveVector.z * player.speed

    // Mettre à jour la position du mesh
    player.mesh.position.set(player.x, player.y, player.z)
}
