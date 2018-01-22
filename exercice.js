document.addEventListener("DOMContentLoaded",function() {

//1. Modifier le texte du titre H1 avec "le meilleur burger"

 var h1 = document.querySelector('h1');
 h1.innerHTML ="Le meilleur burger";
 //var h1= document.getElementsByTagName('h1');
 //var  h1=allH1s[0];
 //h1.innerHTML ="Le meilleur burger";


//2. Modifier le texte du titre H2 avec "..."
var h2 = document.querySelectorAll('h2')[1];
h2.innerHTML  ="Il est <strong>délicieux</strong>, essayez-le!";
//var h2 = document.getElementsByTagName('h2')[1];
//h2.innerHTML  ="Il est <strong>délicieux</strong>, essayez-le!";


//3.Récupérer l'objet "Pain du haut", et modifier sa largeur (en %)
var top = document.getElementById('top');
top.style.width ='115%';
//var top = document.getElementById('top').setAttribute('style', 'width:10%, height:15px');



//4.Récupérer la deuxième boulette, et lui rajouter la classe css "pickle"
var mb = document.getElementsByClassName('meatball')[1];
mb.classList.add('pickle');
//meatball.classNAme+="pickle";
//var cla= meatball.getAttribute('class');
//meatball.setAttribute('class', cla +' pickle');


//5.Récupérer la troisième boulette et augmenter sa largeur à 90px
var mb2 = document.getElementsByClassName('meatball')[2];
mb2.style.width ='90px';

//6.Récupérer la tomate, et modifier sa couleur de fond en orange
var tomato = document.getElementsByClassName('tomato')[0];
tomato.style.background ='orange';
//var tomato = document.querySelector('.burger div.tomato');
//tomato.style.background ='orange';


//7.Pour chaque tranche de fromage, augmenter l'arrondi de la bordure
var tab = document.getElementsByClassName('cheese');
  for(var i=0;i < tab.length; i++ ){
    tab[i].style.borderRadius ='20px';
  }
/*  var i=0;
  while(i<tab.length){
    tab[i].style.borderRadius ='20px';
    i++;
  }*/

//8.Rajouter une nouvelle tranche de fromage entre les deux steaks
      var newElement = document.createElement("div");
      newElement.classList.add('cheese');
      var burger=document.getElementsByClassName('burger')[0];
      var patty=document.getElementsByClassName('patty')[1];
      newElement=burger.insertBefore(newElement,patty);

//9.Rajouter un attribut id ayant pour valeur 'bottom' au pain du bas
document.querySelector('.bun-bottom').setAttribute('id', 'bottom');
//document.querySelector('.bun-bottom').id="bottom";


//10.Prendre le lien 'documentation officielle' et:
    //s'ouvre dans un nouvel onglet
    // edit pour https://www.google.fr
  var a =document.querySelector('a');
  a.href='https://www.google.fr';
  a.setAttribute('target', '_blank');
// Dupliquer l'assiette avec une fonction faite pour ça, et mettre la nouvelle assiette tout en bas (en dessous de la 1ere)
 var plate=document.getElementsByClassName('burger')[0];
 var newplate=plate.cloneNode(true);
burger.appendChild(newPlate);


});
