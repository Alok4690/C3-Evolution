// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let arr= JSON.parse(localStorage.getItem("movie"))
let movie= document.getElementById("movie")
let amount= JSON.parse(localStorage.getItem("amount"))
let h2= document.getElementById("show").innerText=amount
console.log(arr)
arr.forEach(function(elem){
   
    let div= document.createElement("div")
    let p = document.createElement("h4")
    p.innerText=elem.Title
    let img= document.createElement("img")
    img.src=elem.Poster
    div.append(img,p)
    movie.append(div)
})

function confirmnow(){
    let user_name= document.getElementById("user_name").value 
    let number_of_seats= document.getElementById("number_of_seats").value
    let cal= number_of_seats *100
    let sol= amount-cal
    if(cal<=Number(amount)){

        alert("Booking Successful!")
        let h2= document.getElementById("show").innerText=sol
    }
    else{
        alert("Insufficient Balance!")
    }
}