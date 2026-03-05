// Vol de brainrot des autres joueurs ou des bases ennemies
export function trySteal(player, brainrots){

    for(let b of brainrots){

        // distance entre joueur et brainrot
        const dx = b.mesh.position.x - player.x
        const dz = b.mesh.position.z - player.z
        const dist = Math.sqrt(dx*dx + dz*dz)

        if(dist < 2){ // si assez proche
            // le brainrot change de couleur pour indiquer qu'il a été volé
            b.mesh.material.color.set(0x00ff00)
            // possibilité de l'ajouter à l'inventaire du joueur ici
        }

    }

}
