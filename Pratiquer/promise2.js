const promise1 = new Promise((resolve, reject) => {
	const aleatoire = Math.trunc(Math.random()*10) + 1;
	if(aleatoire <= 5) {
		resolve(aleatoire)
	} else {
		reject("Entre 6 & 10 !")
	}
});

// on donne un code à executer en fonction du statut de la promesse 
// .then() si fulfilled (resolve)
// .catch() si rejected (reject)

promise1
.then((txt) => { // txt == le string renvoyé par resolve
	let number = 2;
    console.log(txt);
})
.catch((txt) => {
	console.log(txt);
})