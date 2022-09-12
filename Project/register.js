var regexUName = /^[^#&].*[a-z-A-Z]{3,}[^#&].*$/
var regexFull = /^[^#&].*[a-z-A-Z]{3,}[^#&].*$/
var rgexEmail = /^[a-z]{3,}(@)(yahoo|gmail)(.com)$/
var regexPhone = /^(01)(0|1|2|5)[0-9]{8}$/
var userName = document.getElementById("userName")
var fullName = document.getElementById("fullName")
var mail = document.getElementById("mail")
var phone = document.getElementById("phone")
var pass = document.getElementById("pass")
var confirmPass = document.getElementById("confirm")
var storedUserName
var storedFullName
var storedEmail
var storedPhone
var storedPassword
var storedConfirmPass
var user;
document.forms[0].addEventListener("submit", async function (e) {
    e.preventDefault()
    if (regexUName.test(userName.value) && regexFull.test(fullName.value) && rgexEmail.test(mail.value) && regexPhone.test(phone.value) && (pass.value.length) > 5 && (confirmPass.value) === (pass.value)) {

        await fetch("http://localhost:3000/Users").then(function (response) { // send request
            return response.json() // convert server data
        }).then(function (data) {

            user = data         // locate server data into our variable to be used later
        })




        if (user.length == 0) {
            alert("Successfull Registeration")
            postData(fullName.value, userName.value, mail.value, pass.value, phone.value, user.length + 1, [])
            location.href = "login.html"
        }
        else {
            for (let key in user) {
                if (user[key].username == userName.value || user[key].email == mail.value) {
                    alert("you haver already An Account so Login")
                    location.href = "login.html"

                }
                else if (user[key].username != userName.value && user[key].email != mail.value) {
                    postData(fullName.value, userName.value, mail.value, pass.value, phone.value, user.length + 1, [])
                    location.href = "login.html"
                }
                else {
                    alert(4)
                }
            }
        }
    }
    else {
        alert("Uncorrect Inputs Please Try Again")
    }
})


async function postData(nm, usernm, email, pass, numbr, id, myprod) {
    fetch('http://localhost:3000/Users', {  // requset to server
        method: 'POST',                     // we used post to insert data
        body: JSON.stringify({
            "name": nm,
            "username": usernm,
            "email": email,
            "passord": pass,
            "id": id,
            "number": numbr,
            "myproducts": myprod
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
        }).catch(error => console.error('Error:', error));


}
