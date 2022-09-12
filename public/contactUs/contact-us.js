
var btn = document.querySelector("button")
var nameEle = document.getElementById('name')
var emailEle = document.getElementById('email')
var phoneEle = document.getElementById('phone')
var msgEle = document.getElementById('message')



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

phoneEle.addEventListener("keyup", function () {
    var validationMsg = document.querySelector('#phoneSpan')
    rejPhone = /^01(0|1|2|5)[0-9]{8}(\s)?$/;
    var test = rejPhone.test(phoneEle.value)
    if (test == true) {
        validationMsg.innerHTML = ""
        btn.disabled = false

    } else {
        validationMsg.innerHTML = "Your phone is invalid"
        btn.disabled = true
    }
})

document.forms[0].addEventListener("submit", function (e) {

    var emailCheck = localStorage.getItem("email");
    if (emailCheck != emailEle.value) {

        alert("You don't have account!, please sign up")
        btn.disabled = true;
        e.preventDefault();

    }

    emailEle.value = ""
    phoneEle.value = ""

})
