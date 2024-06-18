
const form = document.querySelector("form")
const fullName = document.getElementById('fullName')
const emailAddress = document.getElementById('emailAddress')
const phoneNumber = document.getElementById('phoneNumber')
const Subject = document.getElementById('Subject')
const yourMessage = document.getElementById('yourMessage')

function sendEmail() {

    const bodyMessage = `
    Full Name :- ${fullName.value} <br> 
    Email :- ${emailAddress.value} <br>
    Phone Number:- ${phoneNumber.value} <br>
    Message :- ${yourMessage.value}
    `

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "projecttestingdevui@gmail.com",
        Password : "7C70112E88A74C835C70234B9651EC99F8A3",
        To : 'projecttestingdevui@gmail.com',
        From : "projecttestingdevui@gmail.com",
        Subject : Subject.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
    
}

function checkInput() {
    const items = document.querySelectorAll('.Input-border')
    for (const item of items) {
        // console.log(item);
        if (item.value == "") {
            item.classList.add('error')
            item.parentElement.classList.add('error')
        }

        if (items[1].value != "") {
            checkEmail()
        }

        items[1].addEventListener('keyup', () => {
            checkEmail()
        })

        item.addEventListener('keyup', () => {
            if (item.value != "") {
                item.classList.remove('error')
                item.parentElement.classList.remove('error')
            } else {
                item.classList.add('error')
                item.parentElement.classList.add('error')
            }
             
        })


    }

}


function checkEmail() {
    const emailRegex = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/

    const emailError = document.querySelector('.erroe_text.emailError')

    if (!emailAddress.value.match(emailRegex)) {
        emailAddress.classList.add('error')
        emailAddress.parentElement.classList.add('error')

        if (emailAddress.value != "") {
            emailError.innerHTML = "Please Enter A Valid Email Id"
        } else {
            emailError.innerHTML = " Email Address Can't Be Blank "
        }
    }
    else {
        emailAddress.classList.remove('error')
        emailAddress.parentElement.classList.remove('error')
    }
}


form.addEventListener('submit', function (e) {
    e.preventDefault()
    checkInput()
    if (!fullName.classList.contains('error') && 
    !emailAddress.classList.contains('error') && 
    !phoneNumber.classList.contains('error') && 
    !Subject.classList.contains('error') && 
    !yourMessage.classList.contains('error')  ) {

        sendEmail()

        console.log("ok");


        form.reset()
        return false
        
    }
})
