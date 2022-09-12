window.addEventListener("load", async function () {
    var user
    var id
    var usernm = checkOfLogin()
    var flag=false

    await fetch("http://localhost:3000/Users").then(function (response) { // send request
        return response.json() // convert server data
    }).then(function (data) {
        user = data         // locate server data into our variable to be used later
    })
    for (let key in user) {
        if (user[key].username == usernm) {
            flag = true
            id = user[key].id - 1
        }
    }
    if (flag) {
        var element = document.createElement("div")
        element.innerHTML = "<i class='fa-solid fa-user'></i><span>" + user[id].name + "</span><i class='fa-solid fa-cart-shopping'></i><span>" + user[id].myproducts.length + "</span>"
        element.id = "user"
        document.getElementsByClassName("nav")[0].append(element)
        var btn = document.getElementById("singup")
        var userstat = document.getElementById("user")
        userstat.style.display = "inline-block"
        btn.style.display = "none"
        document.getElementById("user").addEventListener("click", function () {
            location.href = "cart.html"
        })

    }
    else {
        var element = document.createElement("div")
        element.innerHTML = ""
        element.id = "user"
        document.getElementsByClassName("nav")[0].append(element)
        var btn = document.getElementById("singup")
        var userstat = document.getElementById("user")
        btn.style.display = "inline-block"
        userstat.style.display = "none"
    }
    console.log(user[id].myproducts.length);
    if (user[id].myproducts.length > 0) {
        for (var i = 0; i < user[id].myproducts.length; i++) {
            var element = document.createElement("div")  // create dom element("div") and handle it's container element
            element.innerHTML = "<img src=" + user[id].myproducts[i].imgsrc + "><h6>" + user[id].myproducts[i].title + "</h6><p class='price'>" + user[id].myproducts[i].price + "<span>$</span> " + "</p><div class='star'><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i></div><p class='info'>" + user[id].myproducts[i].info + "</p><button class='delet'>Delet</button><button class='buy'>Buy Now</button></div>"
            element.className = "card"
            document.getElementsByClassName("container-card")[0].append(element)
            document.getElementsByClassName("delet")[i].addEventListener("click", function (evt) {
                var nodes = Array.prototype.slice.call(document.getElementsByClassName('container-card')[0].children);
                var productid = (nodes.indexOf(evt.target.parentNode))
                user[id].myproducts.splice(productid, 0)
                console.log(productid);
                console.log((user[id].myproducts.splice(productid, 1)));
                updateData(user[id].name, user[id].username, user[id].email, user[id].passord, user[id].id, user[id].number, user[id].myproducts)


            })
            document.getElementsByClassName("buy")[i].addEventListener("click", function (evt) {
                var nodes = Array.prototype.slice.call(document.getElementsByClassName('container-card')[0].children);
                var productid = (nodes.indexOf(evt.target.parentNode))
                user[id].myproducts.splice(productid, 0)
                alert("Successfull Operation - We Will Send You With Email To Confirm Detailes")
                console.log((user[id].myproducts.splice(productid, 1)));
                updateData(user[id].name, user[id].username, user[id].email, user[id].passord, user[id].id, user[id].number, user[id].myproducts)
            })
        }
    }
    else {
        var element = document.createElement("h1")
        element.innerHTML = "Empty Cart"
        element.className = "emptycart"
        document.getElementsByClassName("container-card")[0].append(element)

    }


    document.getElementById("logOut").addEventListener("click", function () {

        if (!(localStorage.getItem("userName") == null)) {
            location.href = "login.html"
        } else if (!(sessionStorage.getItem("userName") == null)) {
            location.href = "login.html"

        }
        else {
            localStorage.clear()
            sessionStorage.clear()
            location.href = "home.html"

        }

    })

})


function checkOfLogin() {
    if (localStorage.getItem("UserName")) {
        return localStorage.getItem("UserName")
    }
    else if (sessionStorage.getItem("UserName")) {
        return sessionStorage.getItem("UserName")
    }
    else {
        return ""

    }
}






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
