function bonjour() {
	document.getElementById("exo1").innerHTML = 'Bonjour!<br/>Comment allez-vous aujourd\'hui?';
}

function somme100Entiers() {
	somme=0;
	for (i=1; i <= 100; i=i+1) {
		somme = somme + i;
	}
	document.getElementById("exo2").innerHTML = 'La somme des premiers naturels jusqu\'à 100 est égale à ' + somme;
}

function opup(){
	reponse=prompt("Ecrivez votre prénom","");
	alert("bonjour " + reponse);
}

function sommeParamEntiers() {
	
	param=prompt("Somme jusqu'à N","");
	somme=0;
	for (i=1; i <= param; i=i+1) {
		somme = somme + i;
	}
	document.getElementById("exo4").innerHTML = 'La somme des premiers naturels jusqu\'à ' + param + ' est égale à ' + somme + '.';
}

function sommeNEntiers() {

	N = document.getElementById("N").value; somme = 0;
		for (i = 1; i <= N; i = i + 1) {
			somme = somme + i;
		}
		document.getElementById("resultat").value = somme;
	}