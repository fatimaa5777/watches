var allwatches = document.querySelectorAll(".btn")
var title = document.querySelectorAll('.card-title')
var content = document.querySelector("#content")
var show = document.querySelector('.show-price')
var btn = document.querySelector("#addToCart")
var total = document.querySelector('#total')
var totalPrice = 0

allwatches.forEach(function(item) {
    item.onclick = function() {

        totalPrice +=  parseInt(item.getAttribute("price"))
        content.innerHTML += item.textContent + " ";

        if (content.innerHTML != "") {
            // btn.style.display = "block"
            // total.style.display = 'block'
            // show-price.style.display="block"
        }
    }
})
btn.onclick = function() {
    total.innerHTML = totalPrice +"$"
}