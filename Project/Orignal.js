
window.addEventListener("load", async function () {

    var productsType = "Candles";

    var imgsrc = "images/3"

    var product;

    var arr = []

    await fetch("http://localhost:3000/" + productsType).then(function (response) { // request to server

        return response.json()  // convert server data
    }).then(function (data) {

        product = data  // locate server data into our variable to be use in creating elements
    })
    for (var i = 0; i < product.length; i++) {
        var element = document.createElement("div")  // create dom element("div") and handle it's container element
        element.innerHTML = "<img src=" + imgsrc + "><h6>" + product[i].title + "</h6><p class='price'>" + product[i].price + "<span>$</span> " + "</p><div class='star'><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i></div><p class='info'>" + product[i].info + "</p><button class='addTocard'>Add To Card</button></div>"
        element.className = "card"
        document.getElementsByClassName("container-card")[0].append(element)
        document.getElementsByClassName("addTocard")[i].addEventListener("click", function (evt) {
            console.log(arr);
            var nodes = Array.prototype.slice.call(document.getElementsByClassName('container-card')[0].children);
            console.log(nodes.indexOf(evt.target.parentNode) + 1)
            user[3].myproducts.push(evt.target.parentNode)
            updateData(user[3].name, user[3].username, user[3].email, user[3].passord, user[3].id, user[3].number, user[3].myproducts)
        })
    }



    // ------------------------------------------------------------------------------------------------------------



    await fetch("http://localhost:3000/Users").then(function (response) { // send request
        return response.json() // convert server data
    }).then(function (data) {
        user = data         // locate server data into our variable to be used later
    })
    // here we create our header element that refer to user name and number of elements on cart
    var element = document.createElement("div")
    element.innerHTML = "<i class='fa-solid fa-user'></i><span>" + user[3].name + "</span><i class='fa-solid fa-cart-shopping'></i><span>" + user[3].myproducts.length + "</span>"
    element.id = "user"
    document.getElementsByClassName("nav")[0].append(element)

    // step of verfing user login
    var btn = document.getElementById("singup")
    var userstat = document.getElementById("user")
    var num = 2
    if (num == 1) {
        btn.style.display = "inline-block"
        userstat.style.display = "none"
    }
    else {
        userstat.style.display = "inline-block"
        btn.style.display = "none"
    }
    console.log(user);
    //----------------------------------------------------------------------------------------------------------
})
// insert new user 
async function postData(nm, usernm, email, pass, id, numbr, myprod) {
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



async function updateData(name, username, email, passord, id, number, myproducts) {
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