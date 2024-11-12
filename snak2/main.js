const teams=[
	{nome: "juventus", puntifatti: 0, fallisubiti:0 },
	{nome: "napoli", puntifatti: 0, fallisubiti:0},
	{nome: "inter", puntifatti: 0, fallisubiti:0},
	{nome: "milan", puntifatti: 0, fallisubiti:0},

];
console.log(teams);

// Funzione numeri random
const randomNumb = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Ciclo per assegnare numeri random 
for (let i = 0; i < teams.length; i++) {
  teams[i].puntifatti = (randomNumb(0,50));
  teams[i].fallisubiti = (randomNumb(0,20));
}

// Nuovo array
const newArray = [];
for (let i = 0; i < teams.length; i++) {
    newArray.push
    ({ name: teams[i].nome, fouls: teams[i].fallisubiti});
}

// Output
console.log(newArray);