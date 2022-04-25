// Store the wallet amount to your local storage with key "amount"
function addToWall(){
    var amount= document.getElementById("amount").value 
    var h2= document.getElementById("show").innerText=amount
    localStorage.setItem("amount",JSON.stringify(h2))
}
function bookmovie(){
    window.location.href="movies.html"
}