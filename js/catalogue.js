
// Créer un conteneur div
var container = document.createElement("div");
container.setAttribute("class", "illustrations");
var gg=document.getElementById("gg");
let somme;
let moy;
function setrectte(){

// Boucle pour créer les 10 illustrations
for (var i = 1; i <= 10; i++) {
  somme=0;
  moy=0;

  // Créer un lien
  var recID1=recettesDB[i-1].link;

  var link = document.createElement("a");
  link.setAttribute("class", "illustrations_a");
  link.setAttribute("href", recID1);

  // Créer un élément div
  var div = document.createElement("div");
  div.setAttribute("class", "illustration recipe");
  

  // Créer une image
  var img = document.createElement("img");
  img.setAttribute("src", `../assets/${i}/2.png`);
  img.setAttribute("alt", "Illustration " + i);

  // Créer un titre h3
  var h3 = document.createElement("h3");
  h3.setAttribute("class","name");
  h3.innerHTML = recettesDB[i-1].name;

  // Créer un paragraphe
  var p = document.createElement("p");
  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  var p3 = document.createElement("p");
  
 p.innerHTML="<p > <span class='detaile ' >Categorie :</span>"+"<span class='cate'> "+recettesDB[i-1].category +"</span> </p> ";
 p1.innerHTML="<p> <span class='detaile' >Origine :</span>"+recettesDB[i-1].country +"</p>";
 
 p2.innerHTML = "<p> <span class='detaile' >Duree :</span>"+recettesDB[i-1].duration +"</p>";;
  
 for(let j=0;j<recettesDB[i-1].comments.length;j++){
  somme=somme+recettesDB[i-1].comments[j].rating;



 }
 moy=somme/recettesDB[i-1].comments.length;
 moy = moy.toFixed(2);

 p3.innerHTML="<p> <span class='detaile' >Note globale: </span>"+moy +"</p>"




  // Ajouter l'image, le titre et le paragraphe à l'élément div
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
 

  // Ajouter l'élément div au lien
  link.appendChild(div);

  // Ajouter le lien à la page
  container.appendChild(link);
}

// Ajouter le conteneur à la page
// document.body.appendChild(container);
gg.appendChild(container);
}
setrectte()


var gg=document.getElementById("gg")
function effacer(){

  let somme;
  let moy;
  for(var i = 1; i < 10; i++){

    if(recettesDB[i-1].category==="Déjeuner"){
      somme=0;
      moy=0;

  // Créer un lien
  var link = document.createElement("a");
  link.setAttribute("class", "illustrations_a");
  link.setAttribute("href", "#");

  // Créer un élément div
  var div = document.createElement("div");
  div.setAttribute("class", "illustration recipe");
  

  // Créer une image
  var img = document.createElement("img");
  img.setAttribute("src", `../assets/${i}/2.png`);
  img.setAttribute("alt", "Illustration " + i+1);

  // Créer un titre h3
  var h3 = document.createElement("h3");
  h3.setAttribute("class","name");
  h3.innerHTML = recettesDB[i-1].name;

  // Créer un paragraphe
  var p = document.createElement("p");
  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  var p3 = document.createElement("p");
  
 p.innerHTML="<p > <span class='detaile ' >Categorie :</span>"+"<span class='cate'> "+recettesDB[i-1].category +"</span> </p> ";
 p1.innerHTML="<p> <span class='detaile' >Origine :</span>"+recettesDB[i-1].country +"</p>";
 
 p2.innerHTML = "<p> <span class='detaile' >Duree :</span>"+recettesDB[i-1].duration +"</p>";;
  
 for(let j=0;j<recettesDB[i-1].comments.length;j++){
  somme=somme+recettesDB[i-1].comments[j].rating;



 }
 moy=somme/recettesDB[i-1].comments.length;
 moy = moy.toFixed(2);

 p3.innerHTML="<p> <span class='detaile' >Note globale: </span>"+moy +"</p>"




  // Ajouter l'image, le titre et le paragraphe à l'élément div
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
 

  // Ajouter l'élément div au lien
  link.appendChild(div);

  // Ajouter le lien à la page
  container.appendChild(link);
}


  }
  gg.appendChild(container);
}

  
  


var category=document.querySelectorAll('.filter-options button')
console.log(category);
category.forEach(btn=>{
  btn.addEventListener('click',()=>{
    category.forEach(colors=>{
      colors.classList.remove('color')
    })
    btn.classList.add('color')
    console.log(btn);
  container.innerHTML=''
  let somme;
  let moy;
  if(btn.id==='all'){
    setrectte()
  }else{
  for(var i = 1; i < 11  ; i++){
    if (recettesDB[i-1].category===btn.id){
      somme=0;
      moy=0;
      var recID=recettesDB[i-1].link;

  // Créer un lien

  var link = document.createElement("a");
  link.setAttribute("class", "illustrations_a");
  link.setAttribute("href", recID);
  console.log(recID)

  // Créer un élément div
  var div = document.createElement("div");
  div.setAttribute("class", "illustration recipe");
  

  // Créer une image
  var img = document.createElement("img");
  img.setAttribute("src", `../assets/${i}/2.png`);
  img.setAttribute("alt", "Illustration " + i+1);

  // Créer un titre h3
  var h3 = document.createElement("h3");
  h3.setAttribute("class","name");
  h3.innerHTML = recettesDB[i-1].name;

  // Créer un paragraphe
  var p = document.createElement("p");
  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  var p3 = document.createElement("p");
  
 p.innerHTML="<p > <span class='detaile ' >Categorie :</span>"+"<span class='cate'> "+recettesDB[i-1].category +"</span> </p> ";
 p1.innerHTML="<p> <span class='detaile' >Origine :</span>"+recettesDB[i-1].country +"</p>";
 
 p2.innerHTML = "<p> <span class='detaile' >Duree :</span>"+recettesDB[i-1].duration +"</p>";;
  
 for(let j=0;j<recettesDB[i-1].comments.length;j++){
  somme=somme+recettesDB[i-1].comments[j].rating;

 }
 moy=somme/recettesDB[i-1].comments.length;
 moy = moy.toFixed(2);

 p3.innerHTML="<p> <span class='detaile' >Note globale: </span>"+moy +"</p>"

  // Ajouter l'image, le titre et le paragraphe à l'élément div
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);

  // Ajouter l'élément div au lien
  link.appendChild(div);

  // Ajouter le lien à la page
  container.appendChild(link);  
}
  }
}
gg.appendChild(container);

  })

}

)

for (let i = 0; i < recettesDB.length; i++) {
  let recipe = document.getElementsByClassName("illustrations_a")[i];
  recipe.addEventListener("click", function () {
    window.location.href = "detail.html?recette=" + i;
  });
}