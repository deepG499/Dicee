document.querySelector(".roll").addEventListener("click", function(){
    document.querySelector(".reset").click();
let dicePlayer1= Math.round(Math.random()*5)+1; 
//alert("dicePlayer1: " + dicePlayer1);
let dicePlayer2= Math.round(Math.random()*5)+1; 
//alert("dicePlayer2: " + dicePlayer2);
for(let i=0; i < dicePlayer1; i++){
    document.querySelectorAll(".dice1 div")[i].classList.add("dot");
}

for(let i=0; i < dicePlayer2; i++){
    document.querySelectorAll(".dice2 div")[i].classList.add("dot");
}

if(dicePlayer1>dicePlayer2){
    document.querySelector("h1.win").innerHTML= "The Winner is: <em>Player 1</em>";
} else if(dicePlayer1==dicePlayer2){
    document.querySelector("h1.win").innerHTML= "The Winner is: <em>NONE.</em> It's a Tie";
}
else{
    document.querySelector("h1.win").innerHTML= "The Winner is: <em>Player 2</em>";
}

document.querySelector(".dice1").classList.add("rolled");
document.querySelector(".dice2").classList.add("rolled");
});

document.querySelector(".reset").addEventListener("click", function(){

    for(let i=0; i < 6; i++){
        document.querySelectorAll(".dice1 div")[i].classList.remove("dot");
    }
    
    for(let i=0; i < 6; i++){
        document.querySelectorAll(".dice2 div")[i].classList.remove("dot");
    }
    document.querySelector(".dice1").classList.remove("rolled");
    document.querySelector(".dice2").classList.remove("rolled");
    });