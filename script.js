let guessBTn = document.getElementById("guess_btn")
let input = document.querySelector(".input")
let result = document.querySelector(".result")
let span1 = document.querySelector(".span1")
let span2 = document.querySelector(".span2")


let random = Math.round(Math.random()*99)
console.log(random);
guessBTn.addEventListener("click",(event)=>{
    event.preventDefault()
    if(input.value == random){
        result.innerHTML = "You guessed "+ input.value+" that is too correct"
        
    }
    else if (input.value > random){
        result.innerHTML = "You guessed "+ input.value+" that is too high"
        span2.innerHTML = input.value
        
    }
    else{
        result.innerHTML = "You guessed "+ input.value+" that is too low"
        span1.innerHTML = input.value
    }
})