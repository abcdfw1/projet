let id_id;
id_id=getid();
console.log(id_id);


div=document.getElementById("commentaire-client");
for(let i=0;i<recettesDB.length;i++){
    if(parseInt(id_id)===i){
        
        for(let j=0;j<recettesDB[i].comments.length;j++){
            const client = document.createElement('div');
            client.classList.add('client_comm');
            const text = document.createElement('div');
            text.classList.add('user');
            const text1 = document.createElement('div');
            text1.classList.add('user');

            
            const img=document.createElement('img');
            img.setAttribute("id","img_profil");
            img.src = '../assets/image pweb/profile.PNG';
            text1.appendChild(img);

            const title = document.createElement('h2');
            title.innerHTML = '<span class="id_titre">'+recettesDB[i].comments[j].user+'</span>';
            text.appendChild(title);

            // Création des paragraphes de texte
            const paragraph1 = document.createElement('p');
            paragraph1.innerHTML = 'rating: <span class="id_titre">'+recettesDB[i].comments[j].rating+'</span>';
            text.appendChild(paragraph1);

            const paragraph2 = document.createElement('p');
            paragraph2.innerHTML = recettesDB[i].comments[j].content;
            console.log(recettesDB[i].comments[j].content)
            text.appendChild(paragraph2);

            client.appendChild(text1);
            client.appendChild(text);
            div.appendChild(client);
        }
        document.body.appendChild(div);
    }
}