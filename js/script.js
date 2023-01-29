//Sélectionner plusieurs éléments (li) VVV 
var liste = document.querySelectorAll("li") //Sélection des li

//et faire une boucle pour les animer VVV
liste.forEach((li) => { //Boucle
    var text = li.innerHTML //texte
    var maj = text.toUpperCase() //en MAJ
    li.innerHTML = maj //Assigne le texte en MAJ
    //Insérer, remplacer ou supprimer le contenu d’un élément 
    //(remplacer par le même contenu mais en MAJ) VVV 
})

//Modifier le style CSS d’un élément VVV
//MAIN BACKGROUD COLOR
//Sélectionner un élément VVV
var mainColor = document.getElementById("mainBackgroundColor")

function backgroundColor(){
    mainColor.style.backgroundColor = "blue"
}

//Event
mainColor.addEventListener("changeCoulorBackground", backgroundColor)
//Appel de la fonction
backgroundColor()


//Réagir à un évènement & lire un evenement
const susTitle = document.getElementById("Sus") //Titre header 'suspect' car il a une color différente du reste du texte
susTitle.addEventListener("click",(event) => {
    if(event.target.classList.value === 'titre') //Réagir à un évènement
        var audio = new Audio('./mp3/Sound.mp3'); //Vaiable audio
        audio.play(); //Lecture de l'audio & lire un evenement
        //Ajouter ou supprimer des classes sur un élément
        susTitle.classList.toggle("Imposteur")
})

