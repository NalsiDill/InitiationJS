function sommeNEntiers() {

	N = document.getElementById("N").value; somme = 0;
		for (i = 1; i <= N; i = i + 1) {
			somme = somme + i;
		}
		document.getElementById("resultat").value = somme;
	}