let indice;
indice=getid();
console.log(indice);
let somme=0;
let moy=0;

for(let j=0;j<recettesDB[indice].comments.length;j++){
    somme=somme+recettesDB[indice].comments[j].rating;
    
}
moy=(somme) /((recettesDB[indice].comments.length));
moy = moy.toFixed(2);
document.querySelector('.note').innerHTML = 'Note actuelle : ' + moy;
document.getElementById('nbrecommen').innerHTML = recettesDB[indice].comments.length+' commentaires';
console.log(moy);

const stars = document.querySelectorAll('.star');
let check = false;
stars.forEach(star => {
    star.addEventListener('mouseover', selectStars);
    star.addEventListener('mouseleave', unselectStars);
    star.addEventListener('click', activeSelect);
})

function selectStars(e) {
    const data = e.target;
    const etoiles = priviousSiblings(data);
    if (!check) {
        etoiles.forEach(etoile => {
            etoile.classList.add('hover');
        })
    }

}

function unselectStars(e) {
    const data = e.target;
    const etoiles = priviousSiblings(data);
    if (!check) {
        etoiles.forEach(etoile => {
            etoile.classList.remove('hover');
        })
    }
}

function activeSelect(e) {
    if (!check) {
        let i;
        i=getid();
        console.log(i);
        let somme=0;
        let moy=0;
        check = true;
        for(let j=0;j<recettesDB[i].comments.length;j++){
            somme=somme+recettesDB[i].comments[j].rating;
            
            
            
        }
        console.log(e.target.dataset.note);
        somme=parseInt(e.target.dataset.note)+somme;
        console.log(somme);
           moy=(somme) /((recettesDB[i].comments.length)+1);
           moy = moy.toFixed(2);
        document.querySelector('.note').innerHTML = 'Note actuelle : ' + moy;
    }
}

function priviousSiblings(data) {
    let values = [data];
    while (data = data.previousSibling) {
        if (data.nodeName === 'I') {
            values.push(data);
        }
    }
    return values;
}