// Gestion d'une arme pour repousser les ennemis
export class Weapon {

    constructor(player, scene){
        this.player = player
        this.scene = scene
        this.range = 3
        this.damage = 1 // peut être utilisé pour diminuer valeur brainrot
    }

    attack(brainrots){
        for(let b of brainrots){
            const dx = b.mesh.position.x - this.player.x
            const dz = b.mesh.position.z - this.player.z
            const dist = Math.sqrt(dx*dx + dz*dz)

            if(dist < this.range){
                // repousse le brainrot
                b.z += 1
                b.mesh.position.z = b.z
                // optionnel : réduire sa valeur temporairement
            }
        }
    }

}
