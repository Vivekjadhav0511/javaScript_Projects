let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let result = document.querySelector("#result")
    // console.log(height,weight);

    if (height == "" || height < 0 || isNaN(height)) {
        result.innerHTML="Please Enter a Valid Height ❌"
    }else if (weight == "" || weight < 0 || isNaN(weight)) {
        result.innerHTML="Please Enter a Valid Weight ❌"
    }else{
      let bmiResult= (weight / ((height* height)/10000)).toFixed(2)
    //   result.innerHTML = bmiResult
    if (bmiResult <= 18.6) {
            result.innerHTML = `<span> BMI :- ${bmiResult}  [ UnderWeight ]</span>`
    }else if(bmiResult >= 18.6 && bmiResult <= 24.9){
            result.innerHTML = `<span> BMI :- ${bmiResult} [ Normal Range ]</span>`
    }else{
          result.innerHTML=`BMI :- ${bmiResult} [ Over Weight ]`
    }
    }

    
})