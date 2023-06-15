/*pour les photos d'être différentes */
  const toutDiv = document.createElement("div");
  toutDiv.className = "tout";
  let id3 = Math.floor(Math.random() * 9);
  let id1 = Math.floor(Math.random() * 9);
  let id2 = Math.floor(Math.random() * 9);
  
  while(id3==id1 || id3==id2 ||id1==id2){
       id3 = Math.floor(Math.random() * 9);
       id1 = Math.floor(Math.random() * 9);
       id2 = Math.floor(Math.random() * 9);

  }
let somme=0;
const sectionDiv1 = document.createElement("div");
sectionDiv1.className = "section_3_div1";
const img1 = document.createElement("img");
img1.src='../assets/'+(id3+1)+'/2.png';
img1.alt = "Example Illustration";
sectionDiv1.appendChild(img1);
const p1 = document.createElement("p");
const p11 = document.createElement("p");
const p111 = document.createElement("p");
p1.className = "section_3_p";
p11.className = "section_3_p";
p111.className = "section_3_p";
p1.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
 let g;
for( let i =0;i<10;i++){
  
  const element = recettesDB[i].id;
  



  if((element == id3+1)){
    
    p1.innerHTML=
    "<p> <span id='cat' >Nom :</span>"+recettesDB[i].name +"</p>"
    p11.innerHTML=
    "<p> <span id='cat' >Category </span>"+recettesDB[i].category +"</p>"

    for(let j=0;j<recettesDB[i].comments.length;j++){
      somme=somme+recettesDB[i].comments[j].rating;



    }
    let moy=somme/recettesDB[i].comments.length;
    moy = moy.toFixed(2);

    p111.innerHTML=
    "<p> <span id='cat' >moyenne </span>"+moy +"</p>"



  }
}

sectionDiv1.appendChild(p1);
sectionDiv1.appendChild(p11);
sectionDiv1.appendChild(p111);
toutDiv.appendChild(sectionDiv1);

const sectionDiv2 = document.createElement("div");
sectionDiv2.className = "section_3_div1";
const img2 = document.createElement("img");
img2.src='../assets/'+(id1+1)+'/2.png';
img2.alt = "Example Illustration";
sectionDiv2.appendChild(img2);
const p2 = document.createElement("p");
const p22 = document.createElement("p");
const p222 = document.createElement("p");
p2.className = "section_3_p";
p22.className = "section_3_p";
p222.className = "section_3_p";


for( let i =0;i<10;i++){
  
  const element = recettesDB[i].id;
  



  if((element == id1+1)){
    
    p2.innerHTML=
    "<p> <span id='cat' >Nom :</span>"+recettesDB[i].name +"</p>"
    p22.innerHTML=
    "<p> <span id='cat' >category </span>"+recettesDB[i].category +"</p>"
    somme=0;

    for(let j=0;j<recettesDB[i].comments.length;j++){
      somme=somme+recettesDB[i].comments[j].rating;

    }
    let moy=somme/recettesDB[i].comments.length;
    moy = moy.toFixed(2);

    p222.innerHTML=
    "<p> <span id='cat' >moyenne </span>"+moy +"</p>"




  }
}


sectionDiv2.appendChild(p2);
sectionDiv2.appendChild(p22);
sectionDiv2.appendChild(p222);
toutDiv.appendChild(sectionDiv2);

const sectionDiv3 = document.createElement("div");
sectionDiv3.className = "section_3_div1";
const img3 = document.createElement("img");
img3.src='../assets/'+(id2+1)+'/2.png';
 
img3.alt = "Example Illustration";
sectionDiv3.appendChild(img3);
const p3 = document.createElement("p");
const p33 = document.createElement("p");
const p333 = document.createElement("p");
p3.className = "section_3_p";
p33.className = "section_3_p";
p333.className = "section_3_p";
for( let i =0;i<10;i++){
  
  const element = recettesDB[i].id;
  
  if((element == id2+1)){
    
    p3.innerHTML=
    "<p> <span id='cat' >Nom :</span>"+recettesDB[i].name +"</p>"
    p33.innerHTML=
      "<p> <span id='cat' >category </span>"+recettesDB[i].category +"</p>"
      somme=0;

      for(let j=0;j<recettesDB[i].comments.length;j++){
        somme=somme+recettesDB[i].comments[j].rating;

      }
      let moy=somme/recettesDB[i].comments.length;
      moy = moy.toFixed(2);

      p333.innerHTML=
      "<p> <span id='cat' >moyenne </span>"+moy +"</p>"

  }
}
sectionDiv3.appendChild(p3);
sectionDiv3.appendChild(p33);
sectionDiv3.appendChild(p333);
toutDiv.appendChild(sectionDiv3);

document.body.appendChild(toutDiv);

