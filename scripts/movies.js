// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let movies_div= document.getElementById("movies")
   let arr=JSON.parse(localStorage.getItem("movie"))||[]
    
    let id;
   
    async function searchMovies(){
        try{
            const query= document.getElementById("search").value 
            const res= await fetch(`https://omdbapi.com/?apikey=4ec09abb&s=${query}`)

            const data= await res.json();
            let movies= data.Search
            console.log(movies)
            return movies
           
        } catch(err){
            console.log("err :",err)
        }
    }

    function appendMovies(data){
        movies_div.innerHTML=null
        data.forEach(function(elem){
            let div= document.createElement("div")
            let p = document.createElement("p")
            p.innerText=elem.Title
            let img= document.createElement("img")
            img.src=elem.Poster
            let book= document.createElement("button")
            book.innerText="Book Now"
            book.setAttribute("class","book_now")
            book.addEventListener("click",function(){
                bookNow(elem)
            })
            div.append(img,p,book)
            movies_div.append(div)
        })
    }

    async function main(){
        let data=await searchMovies()
        if(data===undefined){
            return false
        }
        appendMovies(data)
    }
    function debounce(func,delay){
        if(id){
            clearTimeout(id)
        }
        id=setTimeout(function(){
            func();
        },delay)
    }

    function bookNow(elem){
           arr.innerHTML=null
           arr.push(elem)
           console.log(arr)
           localStorage.setItem("movie",JSON.stringify(arr))
           window.location.href="checkout.html"
    }
    
    
    let amount= JSON.parse(localStorage.getItem("amount"))
    let h2= document.getElementById("show").innerText=amount
      
       
       
      
       
    
   