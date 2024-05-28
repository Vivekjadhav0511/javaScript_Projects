

let startBtn=document.querySelector("#start")
let stopBtn=document.querySelector("#stop")
let color

let GenrateRandomColor = function(){
    let hexVal = '0123456789ABCDEF'
     color = "#"
    
    for (let i = 0; i < 6; i++) {
          color += hexVal[Math.floor(Math.random()*16)]  
    }
    return color
}

console.log(GenrateRandomColor());

let IntervalId

 startBtn.addEventListener("click",()=>{
    IntervalId = setInterval(()=>{
    document.body.style.backgroundColor=GenrateRandomColor()
    console.log(color);
   },1000)
})

stopBtn.addEventListener("click",function(){
    clearInterval(IntervalId)
})