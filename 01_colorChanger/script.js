

let h1=document.querySelector('h1')
let color = document.querySelectorAll(".color")
let body = document.querySelector("body")

color.forEach((color)=>{
    color.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);
     if(e.target.id=='black') {
        body.style.backgroundColor="black"
        h1.style.color="white"
     }else if(e.target.id=='white'){
        body.style.backgroundColor="grey"
        h1.style.color="black"
     }else if(e.target.id=='blue'){
        body.style.backgroundColor="blue"
     }else if (e.target.id=='yellow')
        body.style.backgroundColor="yellow"
    })
})



