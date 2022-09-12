window.addEventListener("load", async function () {
    var product;
    var username = checkOfLogin()
    var id;
    var user;
    var flag = false;



  
 
    await fetch("http://localhost:3000/Users").then(function (response) { // send request
    return response.json() // convert server data
  }).then(function (data) {
    user = data         // locate server data into our variable to be used later
  })
  for (let key in user) {
    if (user[key].username == username) {
        flag = true
        id = user[key].id-1
    }
  }
  if (flag) {
    console.log(flag,id,username,user);
    var element = document.createElement("div")
    element.innerHTML = "<i class='fa-solid fa-user'></i><span>" + user[id].name + "</span><i class='fa-solid fa-cart-shopping'></i><span>" + user[id].myproducts.length + "</span>"
    element.id = "user"
    document.getElementsByClassName("nav")[0].append(element)
    var btn = document.getElementById("singup")
    var userstat = document.getElementById("user")
    userstat.style.display = "inline-block"
    btn.style.display = "none"
  document.getElementById("user").addEventListener("click",function(){
  location.href="cart.html"
    })
  
  }
  else {
      var element = document.createElement("div")
      element.innerHTML =""
      element.id = "user"
      document.getElementsByClassName("nav")[0].append(element)
      var btn = document.getElementById("singup")
      var userstat = document.getElementById("user")
      btn.style.display = "inline-block"
      userstat.style.display = "none"
  
      document.getElementById("singup").addEventListener("click",function(){
          location.href="register.html"
            })
  }




    this.document.getElementById("newproducr").addEventListener("click", async function () {
        var productname = document.getElementsByTagName("input")[3].value
        var productinfo = document.getElementsByTagName("input")[4].value
        var productprice = document.getElementsByTagName("input")[5].value
        var productelements = document.getElementsByTagName("input")[6].value
        var productimage = document.getElementsByTagName("input")[7].value
        var producttype = document.getElementsByTagName("select")[0].value

        await fetch("http://localhost:3000/" + producttype).then(function (response) { // send request
            return response.json() // convert server data
        }).then(function (data) {

            product = data         // locate server data into our variable to be used later
        })
        postData(productname, productprice, productelements, productinfo, productimage, (product.length + 1), producttype)
        alert("successfull operation")
    })



    document.getElementById("logOut").addEventListener("click", function () {
        console.log(localStorage.getItem("UserName"));
        if (localStorage.getItem("UserName")) {
            localStorage.clear()
            location.href = "login.html"
            console.log(1);
        } else if (sessionStorage.getItem("UserName")) {
            sessionStorage.clear()
            location.href = "login.html"
            console.log(2);
        }
        else {
            alert("You Have no Alerady Profile")
            checkOfLogin()
            location.href = "register.html"
            console.log(3);


        }

    })


})
async function postData(pname, price, elem, info, url, id, producttype) {
    fetch('http://localhost:3000/' + producttype, {  // requset to server
        method: 'POST',                     // we used post to insert data
        body: JSON.stringify({
            "title": pname,
            "price": price,
            "id": id,
            "info": info,
            "rem-elem": elem,
            "imgsrc": url
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


function checkOfLogin() {
    if (localStorage.getItem("UserName")) {
        console.log("lock");
        return localStorage.getItem("UserName")
    }
    else if (sessionStorage.getItem("UserName")) {
        console.log("seee");
        return sessionStorage.getItem("UserName")
    }
    else {
        return ""

    }
}