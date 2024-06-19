
const form = document.querySelector("form")
const fullName = document.getElementById('fullName')
const emailAddress = document.getElementById('emailAddress')
const phoneNumber = document.getElementById('phoneNumber')
const Subject = document.getElementById('Subject')
const yourMessage = document.getElementById('yourMessage')

function sendEmail() {

   


    // var templateParams = {
    //       Name :- fullName.value,
    //       Number:- phoneNumber.value,
    //       Subjects :- Subject.value,
    //       Message :- yourMessage.value
    //   };

    emailjs.send('service_6h0gvxa', 'template_1j77ddx', {
        message: yourMessage.value,
        subject: Subject.value,
        replayto: "vivekjadhao555@gmail.com",
        From: emailAddress.value,
    }).then(
        message => {
            if (message.text == "OK") {
                Swal.fire({
                    title: " Success !",
                    text: "Message Sent Successfully ",
                    icon: "success"
                });
            }
        }
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
        !yourMessage.classList.contains('error')) {

        sendEmail()

        console.log("ok");


        form.reset()
        return false

    }
})
