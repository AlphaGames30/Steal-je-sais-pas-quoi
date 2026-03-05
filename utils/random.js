// Fonctions utilitaires pour random et probabilités

export function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// Sélectionne un élément d'un tableau avec une probabilité
export function chooseByChance(arr){
    const r = Math.random() * 100
    let total = 0
    for(const el of arr){
        total += el.chance
        if(r <= total) return el
    }
    return arr[arr.length-1] // fallback
}
