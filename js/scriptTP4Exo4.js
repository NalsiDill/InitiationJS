function sommeParamEntiers() {
	
	param=prompt("Somme jusqu'à N","");
	somme=0;
	for (i=1; i <= param; i=i+1) {
		somme = somme + i;
	}
	document.getElementById("exo4").innerHTML = 'La somme des premiers naturels jusqu\'à ' + param + ' est égale à ' + somme + '.';
}