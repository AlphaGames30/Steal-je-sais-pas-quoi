export function cameraFollow(camera, player){

    const offset = {x:0, y:6, z:12}

    camera.position.x = player.x + offset.x
    camera.position.y = player.y + offset.y
    camera.position.z = player.z + offset.z

    camera.lookAt(player.x, player.y, player.z)

}
