// Side nav Bar

var sidenav = document.querySelector(".side-navbar")

function shownavbar() {
  sidenav.classList.add("active");
}

function closenavbar() {
  sidenav.classList.remove("active");
}

// Product Search collection items
var productContainer = document.getElementById("product");
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll(".product-box");

search.addEventListener("keyup", function (event) {
  var enteredValue = event.target.value.toUpperCase();

  for (var i = 0; i < productlist.length; i++) {
    var productName = productlist[i].querySelector("p").textContent.toUpperCase();

    if (productName.indexOf(enteredValue) < 0) {
      productlist[i].style.display = "none";
    } else {
      productlist[i].style.display = "block";
    }
  }
});








