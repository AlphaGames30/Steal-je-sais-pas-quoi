// Gestion de l'argent du joueur
export function updateEconomy(brainrots, moneyObj){

    for(let b of brainrots){

        // Avance le brainrot sur le tapis
        b.z += 0.05
        b.mesh.position.z = b.z

        // Quand il arrive au bout, le joueur gagne de l'argent
        if(b.z > 18){ // fin tapis
            moneyObj.value += b.value
            b.z = -18 // reset au début
        }

    }

}
