

inputBox = document.querySelector('#input-box')
listContainer = document.querySelector('#list-container')


function AddTask(){
    if (inputBox.value === "") {
        alert("You Must Add Some Task")
    }else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "❌"
        li.appendChild(span)
    }
    inputBox.value = ""
    saveTodo()
}

listContainer.addEventListener('click',function(e){
    if (e.target.tagName ==="LI") {
        e.target.classList.toggle("checked")
        saveTodo()
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveTodo()

    }
},false)


// Save Todos to LocalStorage

function saveTodo(){
    localStorage.setItem("data", listContainer.innerHTML)
}


function ShowTodo(){
    listContainer.innerHTML = localStorage.getItem("data")
}

ShowTodo()