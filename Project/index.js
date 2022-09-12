
window.addEventListener("load",function(){

// important variables to be used later

var productsType = "Candles";        // type of product that we will create elements from it
var user = "User";                       // Users That own a profiles in our website
var imgsrc = "images/3"
var product; 
var arr=[]                          // e use it to create element by element in dom
// function getproducts we use json server to create cards for products using fetch methode

async function getproducts() {

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
            var nodes = Array.prototype.slice.call(document.getElementsByClassName('container-card')[0].children);
            console.log(nodes.indexOf(evt.target.parentNode) + 1);  
            arr.push(evt.target.parentNode)
            console.log(arr); 
            updateData(3)
        })
    }

}
// calling function to be executed
getproducts()

// ----------------------------------------------------------------------------------------------------------
// function getUser used to get users data from server 
async function getUser() {
    await fetch("http://localhost:3000/Users").then(function (response) { // send request
        return response.json() // convert server data
    }).then(function (data) {
        user = data         // locate server data into our variable to be used later
    })
    // here we create our header element that refer to user name and number of elements on cart
    var element = document.createElement("div")
    element.innerHTML = "<i class='fa-solid fa-user'></i><span>" + user[2].name + "</span><i class='fa-solid fa-cart-shopping'></i><span>" + user[2].myproducts + "</span>"
    element.id = "user"
    document.getElementsByClassName("nav")[0].append(element)
    // then here we call this function to see if user have account or no
    isLogin()
}
getUser()
// ----------------------------------------------------------------------------------------------------------
//  we use this function to insert new user to json server
function postData() {
    fetch('http://localhost:3000/Users', {  // requset to server
        method: 'POST',                     // we used post to insert data
        body: JSON.stringify({
            "name": "",
            "username": "",
            "email": "",
            "passord": "",
            "id": "",
            "number": "",
            "myproducts": []
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

async function updateData(id) {

    await fetch("http://localhost:3000/Users").then(function (response) { // send request
        return response.json() // convert server data
    }).then(function (data) {
        user = data         // locate server data into our variable to be used later
    })
    await fetch('http://localhost:3000/Users/' + id, {  // requset to server
        method: 'PUT',                     // we used post to insert data
        body: JSON.stringify({
            name: user[2].name,
            username: user[2].username,
            email: user[2].email,
            passord: user[2].passord,
            id: user[2].id,
            number: user[2].number,
            myproducts:arr.length
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
function isLogin() {
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
}
var arr=[]
function muProducts(node){

arr.push(node)
console.log(arr);
return (arr)

}
})