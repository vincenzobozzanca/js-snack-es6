const bici =[
	{nome: "bici1", peso: 30},
	{nome: "bici2", peso:15},
	{nome: "bici3", peso:50},
	{nome: "bici4", peso:29},
	{nome: "bici5", peso:10},
	{nome: "bici6", peso:30},
];

let min= bici[0].peso;
let biciLeggera= bici[0];

for (let i=0; i<bici.length; i++) {
	let leggera = bici[i]; 
	if(leggera.peso < min){
        min = leggera.peso;
        biciLeggera = leggera;
    }
}
console.log(biciLeggera);