const params = new URLSearchParams(window.location.search);
let id = params.get("recette");
var container=document.getElementById("container");
console.log(id);
function getid(){
    return parseInt(id);
}
function onLoad() {
        
    for(let i=0;i<10;i++){
        if(parseInt(id)===i){
           

            

            // Création de l'image
            const image = document.createElement('img');
            image.setAttribute("id","detailImg");
            image.classList.add('image');
            image.src = `../assets/${i+1}/2.png`;
            image.alt = 'Mon image';
            image.width = 600;
            image.height = 400;
            container.appendChild(image);

            // Création de la div text
            const text = document.createElement('div');
            text.classList.add('text');

            // Création du titre h2
            const title = document.createElement('h2');
            title.innerHTML = '<span class="id_titre">les informations</span>';
            text.appendChild(title);

            // Création des paragraphes de texte
            const paragraph1 = document.createElement('p');
            paragraph1.innerHTML = '<span class="id_titre">categorie: </span>'+recettesDB[i].category;
            text.appendChild(paragraph1);

            const paragraph2 = document.createElement('p');
            paragraph2.innerHTML = '<span class="id_titre">countrie: </span>'+recettesDB[i].country;
            text.appendChild(paragraph2);

            const paragraph3 = document.createElement('p');
            paragraph3.innerHTML = '<span class="id_titre">nom: </span>'+recettesDB[i].name;
            text.appendChild(paragraph3);

            const paragraph4 = document.createElement('p');
            paragraph4.innerHTML = '<span class="id_titre">durée: </span>'+recettesDB[i].duration;
            text.appendChild(paragraph4);



            container.appendChild(text);
            // Ajout de la div container au body
            document.body.appendChild(container);

            cont=document.createElement("div");
            cont.setAttribute("id","cont");
            // Création des éléments de texte en dessous de l'illustration et du texte
            const bottomText1 = document.createElement('h3');
            bottomText1.classList.add('bottom-text');
            bottomText1.innerHTML = "<span class='id_titre'> Ingredients: </span> ";
            cont.appendChild(bottomText1);
            
            
            const bottomText2 = document.createElement('p');
            bottomText2.classList.add('bottom-text');
            
            let ingredientsList = "<ul class='list1'>";
            for (let j = 0; j < recettesDB[i].ingredients.length; j++) {
            ingredientsList += "<li>" + recettesDB[i].ingredients[j] + "</li>";
            }
            ingredientsList += "</ul>";
            
            bottomText2.innerHTML = ingredientsList;

            cont.appendChild(bottomText2);
            
           
            const bottomText3 = document.createElement('h3');
            bottomText3.classList.add('bottom-text');
            bottomText3.innerHTML = "<span class='id_titre'> Instructions: </span> ";
            cont.appendChild(bottomText3);
            
             const bottomText4 = document.createElement('p');
            bottomText4.classList.add('bottom-text');
                        
            let instructionsList = "<ol class='list2'>";
            for (let j = 0; j < recettesDB[i].instructions.length; j++) {
                instructionsList += "<li>" + recettesDB[i].instructions[j] + "</li>";
            }
            instructionsList += "</ol>";
                        
            bottomText4.innerHTML = instructionsList;
            cont.appendChild(bottomText4);

            document.body.appendChild(cont);
            
            //3 images
            ill=document.createElement("div");
            ill.setAttribute("class","illustrations");
            for (let z = 2; z <= 4; z++) {
                
                const illustrationDiv = document.createElement('div');
                illustrationDiv.setAttribute("class","illustration");
                
                const illustrationImg = document.createElement('img');
                illustrationImg.src = `../assets/${i+1}/${z}.png`;
                
                
                
            illustrationDiv.appendChild(illustrationImg);
            ill.appendChild(illustrationDiv);
            
            }
            
            document.body.appendChild(ill);


        }
    }

}
document.addEventListener('load', onLoad())



