//By Fossati Silvio

alert('script test');

var nom = prompt("Salutation jeune aventurier/ère. Quelle est votre nom?");

alert("Bienvenue "+ nom +" voici les régles\nJeu : l'ennemie à 10 PV, vous avez 2 chance de l'attaquer pour le rendre à 0 PV");

var ennemie = 10	//vie ennemie OK

var attPv

function att (){		//Attaque OK

	attPv = prompt("Montant de l'attaque? 1-5");
	
	if (attPv > 0 && attPv < 6){
		alert("Votre attaque est de " + attPv + " PV.");
		
	} else {
		alert("Montant incorrect.");
		att()	//restart la func
	}
}



var classe = prompt("Faites votre choix 'Epee' ou 'Arc'.")		//choix de classe OK

switch (classe){		
	
	case "Epee": 
	alert("Votre choix est l'Epee, classe : Chevalier!");
	break;
	
	case "Arc":
	alert("Votre choix est l'arc, classe : Archer!");
	break;
	
	default:
	var faux = true
	alert("Vous n'avez rien choissie.")
}

if (faux){
	alert("Pressez OK, f5 et recommencer.");
	
}else {		//gameplay OK

while (ennemie > 0){	//loop OK



	if (ennemie > 0){	
	att();
	alert("L'ennemie à encore " + (ennemie - attPv) + " PV.");
	var pvEnn = ennemie - attPv
	att()
	alert("L'ennemie à encore " + (pvEnn - attPv) + " PV.");
	var finPv = pvEnn - attPv

	if (finPv === 0){	//fin OK
		alert("Ennemie vaincu!!!");
	break;
	} else {
		alert("Vous avez perdu");
		alert(finPv);
		break;
	}
	
} 

}
}
//By Fossati Silvio