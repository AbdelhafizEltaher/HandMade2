
window.addEventListener("load", async function () {
  var user;
  var id;
  var username = checkOfLogin()
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
      id = user[key].id - 1
    }
  }
  if (flag) {
    console.log(flag, id, username, user);
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
    element.innerHTML = "<i class='fa-solid fa-user'></i><span>" + "</span><i class='fa-solid fa-cart-shopping'></i><span>" + "</span>"
    element.id = "user"
    document.getElementsByClassName("nav")[0].append(element)
    var btn = document.getElementById("singup")
    var userstat = document.getElementById("user")
    btn.style.display = "inline-block"
    userstat.style.display = "none"
  }



  var timer;
  var i = 0;
  document.images[0].src = "https://i.ibb.co/s9zJT5w/Animated-Shape-2.png";
  document.body.addEventListener("click", function () {
    var imgArr = ["https://i.ibb.co/cvVFC4R/Mass-Circles.png", "https://i.ibb.co/CtRCGyv/Icon-Grid.png", "https://i.ibb.co/0M1vycj/Colored-Shapes.png", "https://i.ibb.co/fDjpqyL/Animated-Shape.png", "https://i.ibb.co/6rPX3cq/Animated-Shape-1.png"]
    timer = setInterval(function () {
      if (i == imgArr.length - 1) {
        i = 0;
      }
      else {
        i++;
      }
      document.images[0].src = imgArr[i];
    }, 5000);
  })
  // ///////////////////////////////////////////switch case for product////////////////////
  var productButton = document.querySelectorAll(".product-botton")
  productButton[0].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[0].innerHTML);
    document.location.href = url;

  })

  productButton[1].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[1].innerHTML);
    document.location.href = url;
  })
  productButton[2].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[2].innerHTML);
    document.location.href = url;
  })
  productButton[3].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[3].innerHTML);
    document.location.href = url;
  })
  productButton[4].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[4].innerHTML);
    document.location.href = url;
  })
  productButton[5].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[5].innerHTML);
    document.location.href = url;
  })
  document.getElementsByClassName("tex")[0].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[0].innerHTML);
    document.location.href = url;
  })

  document.getElementsByClassName("tex")[1].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[1].innerHTML);
    document.location.href = url;

  })
  document.getElementsByClassName("tex")[2].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[2].innerHTML);
    document.location.href = url;

  })
  document.getElementsByClassName("tex")[3].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[3].innerHTML);
    document.location.href = url;

  })
  document.getElementsByClassName("tex")[4].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[4].innerHTML);
    document.location.href = url;

  })
  document.getElementsByClassName("tex")[5].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[5].innerHTML);
    document.location.href = url;

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

  document.getElementById("singup").addEventListener("click", function () {
    location.href = "register.html"
  })


  var card = document.getElementsByClassName("card")
  card[0].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[2].innerHTML);
    document.location.href = url;
  })
  card[1].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[2].innerHTML);
    document.location.href = url;
  })
  card[2].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[2].innerHTML);
    document.location.href = url;
  })
  card[3].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[2].innerHTML);
    document.location.href = url;
  })
  card[4].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[1].innerHTML);
    document.location.href = url;
  })
  card[5].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[1].innerHTML);
    document.location.href = url;
  })
  card[6].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[1].innerHTML);
    document.location.href = url;
  })
  card[7].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[1].innerHTML);
    document.location.href = url;
  })

  card[8].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[5].innerHTML);
    document.location.href = url;
  })
  card[9].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[5].innerHTML);
    document.location.href = url;
  })
  card[10].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[5].innerHTML);
    document.location.href = url;
  })
  card[11].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[5].innerHTML);
    document.location.href = url;
  })

  card[12].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[0].innerHTML);
    document.location.href = url;
  })
  card[13].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[0].innerHTML);
    document.location.href = url;
  })
  card[14].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[0].innerHTML);
    document.location.href = url;
  })
  card[15].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[0].innerHTML);
    document.location.href = url;
  })

  card[16].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[4].innerHTML);
    document.location.href = url;
  })
  card[17].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[4].innerHTML);
    document.location.href = url;
  })
  card[18].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[4].innerHTML);
    document.location.href = url;
  })
  card[19].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[4].innerHTML);
    document.location.href = url;
  })
  card[20].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[3].innerHTML);
    document.location.href = url;
  })
  card[21].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[3].innerHTML);
    document.location.href = url;
  })
  card[22].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[3].innerHTML);
    document.location.href = url;
  })
  card[23].addEventListener("click", function () {
    var url = "product.html?product=" + encodeURIComponent(productButton[3].innerHTML);
    document.location.href = url;
  })
})

function checkOfLogin() {
  if (localStorage.getItem("UserName")) {
    return localStorage.getItem("UserName")
  } else if (sessionStorage.getItem("UserName")) {
    return sessionStorage.getItem("UserName")
  }
  else {
    return ""

  }

}