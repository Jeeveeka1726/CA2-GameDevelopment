const play = document.getElementById("playButton");
const instruction = document.getElementById("instructionsButton");
const goButton = document.getElementById("goButton");

function game(){
    window.location.href ="./game.html";
}

function Instruction(){
    window.location.href ="./instructions.html";
}

function details(){
    window.location.href ="./details.html";
}

instruction.onclick=()=>{
    Instruction();
    
}
play.onclick=()=>{
    details();
    
}

goButton.onclick=()=>{
    game();
}



