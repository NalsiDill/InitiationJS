function somme100Entiers() {
	somme=0;
	for (i=1; i <= 100; i=i+1) {
		somme = somme + i;
	}
	document.getElementById("exo2").innerHTML = 'La somme des premiers naturels jusqu\'à 100 est égale à ' + somme;
}