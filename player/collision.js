export function checkCollision(player, obstacles){

    obstacles.forEach(obs => {
        const dx = player.x - obs.position.x
        const dz = player.z - obs.position.z

        const distX = Math.abs(dx)
        const distZ = Math.abs(dz)

        const combinedHalfWidth = 1 + obs.scale.x/2
        const combinedHalfDepth = 1 + obs.scale.z/2

        if(distX < combinedHalfWidth && distZ < combinedHalfDepth){
            // simple repousse
            if(dx > 0) player.x += 0.1
            else player.x -= 0.1

            if(dz > 0) player.z += 0.1
            else player.z -= 0.1
        }
    })

    player.mesh.position.set(player.x, player.y, player.z)
}
