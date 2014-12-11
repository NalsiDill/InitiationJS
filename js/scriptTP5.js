window.onload = function(){
	clickBouton();
}

function clickBouton(){
	// Exemple
	var boutonBleu = document.getElementById('bouton');
	ajouteEvent(boutonBleu,'click',changeCouleur,false);
	// Exercice 1
	var boutonBascule = document.getElementById('bouton1');
	ajouteEvent(boutonBascule,'click',basculeCouleur,false);
	// Exercice 2
		// 1°/
	var boutonListe = document.getElementById('bouton2');
	ajouteEvent(boutonListe,'click',ajoutSaisie,false);
		// 2°/
	var listeSource = document.getElementById('bouton3');
	ajouteEvent(listeSource,'click',extraitDonnees,false);
		// 3°/
	var listeSource = document.getElementById('bouton4a');
	ajouteEvent(listeSource,'click',echangeDonnees,false);
	
	
}

function ajouteEvent(objet, typeEvent, nomFonction, typePropagation){
	if(objet.addEventListener){
		objet.addEventListener(typeEvent,nomFonction,typePropagation);
	}else if(objet.attachEvent){
		objet.attachEvent('on'+typeEvent,nomFonction);
	}
}

function changeCouleur(){
	elem = document.getElementById("texte");
	elem.style.color = 'blue';
}

function basculeCouleur(){
	elem = document.getElementById("texte1");
	if(elem.style.color==='blue'){
		elem.style.color='red'
	}else{
		elem.style.color='blue';
	}
}

function ajoutSaisie(){
	var ajout = new Option(document.getElementById('libelle').value, document.getElementById('valeur').value);
	document.getElementById('choix').options[1] = ajout;
}

function extraitDonnees(){
	var index = document.getElementById('choix2').options.selectedIndex;
	document.getElementById('libelle2').value 
		= document.getElementById('choix2').options[index].text;
	
	document.getElementById('valeur2').value 
		= document.getElementById('choix2').options[index].value;
}

function echangeDonnees(){
	// TODO
//	var listeSource = document.
}