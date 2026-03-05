export function movePlayer(player, keys){

    const speed = player.speed

    if(keys["z"] || keys["w"]) player.z -= speed
    if(keys["s"]) player.z += speed
    if(keys["q"] || keys["a"]) player.x -= speed
    if(keys["d"]) player.x += speed

    player.mesh.position.set(player.x, player.y, player.z)

}
