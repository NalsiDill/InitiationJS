function ajouteEvent(objet, typeEvent, nomFonction, typePropagation){
	if(objet.addEventListener){
		objet.addEventListener(typeEvent,nomFonction,typePropagation);
	}else if(objet.attachEvent){
		objet.attachEvent('on'+typeEvent,nomFonction);
	}
}

function changeCouleur(){
	elem = document.getElementById("texte");
	elem.style.color='blue';
}

function clickBouton(){
	alert("coucou");
	var boutonBleu = document.getElementById('bouton');
	ajouteEvent(boutonBleu,'click',changeCouleur,false);
}

window.onload = function(){
	alert('coucou');
	clickBouton();
}