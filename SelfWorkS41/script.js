let btnChangeColor=document.querySelector('#btnChangeColor');
let btnBold=document.querySelector('#btnBold');
let btnNone=document.querySelector('#btnNone')
let p=document.querySelectorAll('.paragrafo');
// function coloreRandom1(){
//     let numeroRandom=Math.floor(Math.random()*(255-1)+1);
//     return numeroRandom;
// }

btnChangeColor.addEventListener('click', ()=>{
    let nr=Math.floor(Math.random()*(4-1)+1);
    if(nr==1){
        p.style.color="red";
    }else if(nr==2){
        p.style.color="blue";
    }else if(nr==3){
        p.style.color="green";
    }
})
btnBold.addEventListener('click', ()=>{
    p.style.fontWeight="bold";
})
btnNone.addEventListener('click', ()=>{
    p.style.display="none";
})

