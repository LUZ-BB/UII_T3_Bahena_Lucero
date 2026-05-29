let indice=0;
let imagenes = ["img/1.png","img/2.png","img/3.png","img/4.png","img/5.png"];

document.getElementById("siguiente").addEventListener("click",()=> {
    if (indice < 5){
        indice++;
    }

    document.getElementById("img").setAttribute("src",imagenes[indice]);

})

document.getElementById("anterior").addEventListener("click",()=> {
    if (indice >0){
        indice--;
    }

    document.getElementById("img").setAttribute("src",imagenes[indice]);
})