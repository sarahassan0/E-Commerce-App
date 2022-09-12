var btn = document.querySelector(".btn3")
var emailEle = document.getElementById('loginEmail')
var passEle = document.getElementById('loginPassword')




emailEle.addEventListener("keyup", function () {
    var validationMsg = document.querySelector('#emailSpan')
    rejEmail = /^[a-zA-z0-9]{3,}@(gmail|.yahoo|.outlook).com$/;
    var test = rejEmail.test(emailEle.value)
    if (test == true) {
        validationMsg.innerHTML = ""
        btn.disabled = false
    } else {
        validationMsg.innerHTML = "Your email is invalid"
        btn.disabled = true

    }
})

passEle.addEventListener("keyup", function () {
    var validationMsg = document.querySelector('#passSpan')
    rejPhone = /^[a-zA-z0-9]{8,}$/;
    var test = rejPhone.test(passEle.value)
    if (test == true) {
        validationMsg.innerHTML = ""
        btn.disabled = false

    } else {
        validationMsg.innerHTML = "Your password is invalid"
        btn.disabled = true
    }
})

document.forms[0].addEventListener("submit", function (e) {




    var emailCheck = localStorage.getItem("email");

    var emailPasword = localStorage.getItem("password");

    if (emailCheck != emailEle.value || emailPasword != passEle.value) {


        alert("You don't have account! ,please sign up")
        btn.disabled = true;
        e.preventDefault();

    }



    passEle.value = ""
})

