import {spawnBrainrot} from "../gameplay/brainrotSpawner.js"

export function setupShop(scene, moneyObj){

    const buyBtn = document.getElementById("buy")
    if(!buyBtn) return

    buyBtn.onclick = () => {

        if(moneyObj.value < 250){
            alert("Pas assez d'argent !")
            return
        }

        moneyObj.value -= 250
        spawnBrainrot(scene)
    }

}
