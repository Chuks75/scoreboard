//let saveEl = document.getElementById("save-el")
//let count = 0
//let countEl = document.getElementById("count-el")
//function increment(){
    
    //count = count +1
//    count += 1  
//    countEl.innerText = count  
//}

//function save(){
//    let countDash = count + "-"
    // saveEl.innerText = saveEl.innerText + " " +countDash
  //  saveEl.textContent = saveEl.textContent + " " +countDash
    //countEl.textContent = 0
    //count = 0



    //elem.innerText = count;
//}

let homeCount = 0
let guestCount = 0
let homeScore = document.getElementById("home-points1")
let guestScore = document.getElementById("home-points2")

function clearScore(){
    homeCount = 0
    guestCount = 0
    homeScore.innerText=homeCount
    guestScore.innerText=guestCount
}
function incrementHomeByOne(){
    homeCount = homeCount+1
    homeScore.innerText = homeCount
    
}

function colorWinner(){

}

function incrementHomeByTwo(){
    homeCount = homeCount+2
    homeScore.innerText = homeCount
}

function incrementHomeByThree(){
    homeCount = homeCount+3
    homeScore.innerText = homeCount
}

function incrementGuestByOne(){
    guestCount = guestCount + 1
    guestScore.innerText = guestCount
}

function incrementGuestByTwo(){
    guestCount = guestCount + 2
    guestScore.innerText = guestCount
}

function incrementGuestByThree(){
    guestCount = guestCount + 3
    guestScore.innerText = guestCount
}