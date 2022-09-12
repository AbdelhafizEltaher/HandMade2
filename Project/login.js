

var regex = /^[^#&].*[a-z-A-Z]{3,}[^#&].*$/
var userName = document.getElementById("uName")
var password = document.getElementById("pass")
var form = document.getElementById("form")
var inputs = document.getElementsByTagName("input")
var user;
var flag=false;
form.addEventListener("submit", async function (e) {

  e.preventDefault()
  await fetch("http://localhost:3000/Users").then(function (response) { // send request
    return response.json() // convert server data
  }).then(function (data) {
    user = data         // locate server data into our variable to be used later
  })

    if (regex.test(userName.value) && (password.value.length > 5)) {
      
  for (let key in user) {
      if (user[key].username == userName.value && user[key].passord == password.value) {
        flag = true
      }
    }
 
  }
  if (flag) {
    if (inputs[2].checked) {
      localStorage.setItem("UserName", inputs[0].value)
      localStorage.setItem("password", inputs[1].value)
      location.href = "home.html"
      console.log(4);

    }
    else {
      sessionStorage.setItem("UserName", inputs[0].value)
      sessionStorage.setItem("password", inputs[1].value)
      location.href = "home.html"
      console.log(5);

    }
  }
  else {
    alert("InCorrect Login")
    console.log(6);

  }
})


