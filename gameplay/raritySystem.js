export const rarities = [

{name:"common",chance:65,value:5,color:0x888888},
{name:"rare",chance:17,value:15,color:0x0066ff},
{name:"epic",chance:11,value:40,color:0xaa00ff},
{name:"legendary",chance:3,value:120,color:0xffcc00},
{name:"mythic",chance:2.9,value:350,color:0xff0000},
{name:"god",chance:0.099,value:1000,color:0xffffff},
{name:"secret",chance:0.001,value:5000,color:0x000000}

]

export function randomRarity(){

let r = Math.random()*100
let total = 0

for(let rarity of rarities){

total += rarity.chance

if(r <= total)
return rarity

}

}
