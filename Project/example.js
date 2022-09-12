
window.addEventListener("load", async function () {

    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    var productsType = data.product;
    var product;

    
    var username = checkOfLogin()
    var id;
    var user;
    var flag=false;
    








  // ------------------------------------------------------------------------------------------------------------
 
 
 
 
 
 
 
 
 
 
 
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




















    await fetch("http://localhost:3000/" + productsType).then(function (response) { // request to server

        return response.json()  // convert server data
    }).then(function (data) {

        product = data  // locate server data into our variable to be use in creating elements
    })
    for (var i = 0; i < product.length; i++) {
        var element = document.createElement("div")  // create dom element("div") and handle it's container element
        element.innerHTML = "<img src=" + product[i].imgsrc + "><h6>" + product[i].title + "</h6><p class='price'>" + product[i].price + "<span>$</span> " + "</p><div class='star'><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i></div><p class='info'>" + product[i].info + "</p><button class='addTocard'>Add To Card</button></div>"
        element.className = "card"
        document.getElementsByClassName("container-card")[0].append(element)
        document.getElementsByClassName("addTocard")[i].addEventListener("click", function (evt) {
            if(isFinite(id)){
                var nodes = Array.prototype.slice.call(document.getElementsByClassName('container-card')[0].children);
                var productid = (nodes.indexOf(evt.target.parentNode))
                user[id].myproducts.push(product[productid])
                updateData(user[id].name, user[id].username, user[id].email, user[id].passord, user[id].id, user[id].number, user[id].myproducts)
                console.log((id));
            }
            else{
                alert("You Have To Login To Add to Card")
                location.href="login.html"
            }


        })
    }

  













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


    //----------------------------------------------------------------------------------------------------------
})




























async function updateData(name, username, email, passord, id, number, myproducts) {
    var user
    await fetch("http://localhost:3000/Users").then(function (response) { // send request
        return response.json() // convert server data
    }).then(function (data) {
        user = data         // locate server data into our variable to be used later
    })
    await fetch('http://localhost:3000/Users/' + id, {  // requset to server
        method: 'PATCH',                     // we used post to insert data
        body: JSON.stringify({
            name: name,
            username: username,
            email: email,
            passord: passord,
            id: id,
            number: number,
            myproducts: myproducts
        }),
        headers: {
            'Content-Type': 'application/json'
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

    }}
