var btn = document.querySelector("button")
var nameEle = document.getElementById('name')
var emailEle = document.getElementById('email')
var passEle = document.getElementById('pass')
var cPassEle = document.getElementById('cPass')



nameEle.addEventListener("keyup", function () {
    var validationMsg = document.querySelector('#nameSpan')
    var rejName = /^([a-zA-Z]{2,}(\s)){1,}[a-zA-Z]{2,}(\s)?$/
    var test = rejName.test(nameEle.value)
    if (test == true) {
        validationMsg.innerHTML = ""
        btn.disabled = false
    } else {
        validationMsg.innerHTML = "Your name is invalid"
        btn.disabled = true
    }
})


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
cPassEle.addEventListener("keyup", function () {
    var validationMsg = document.querySelector('#cPassSpan')
    rejPhone = /^[a-zA-z0-9]{8,}$/;
    var test = rejPhone.test(cPassEle.value)
    if (test == true && cPassEle.value == passEle.value) {
        validationMsg.innerHTML = ""
        btn.disabled = false

    } else {
        validationMsg.innerHTML = "Please enter the same valied password"
        btn.disabled = true
    }
})

document.forms[0].addEventListener("submit", function () {

    localStorage.setItem("email", emailEle.value);
    localStorage.setItem("password", passEle.value)

    emailEle.value = ""
    phoneEle.value = ""
    msgEle.value = ""
    nameEle.value = ""

})
