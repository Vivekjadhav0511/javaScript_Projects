

let password=document.getElementById("password")
let unHideEyeIcon = document.getElementById("unhide")


unHideEyeIcon.onclick = function(){
    if (password.type =="password") {
        password.type = "text"
        unHideEyeIcon.innerHTML="❌"
        
    }else{
     password.type = "password"
     unHideEyeIcon.innerHTML="👁️"
    }
}