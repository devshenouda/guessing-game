var high = 1000 ; 
var low = 1 ;
var number = low + Math.floor((high - low) / 2) ;
document.getElementById("number").innerHTML = number ; 
function higher(){
    low = number +1 ;
    number = low + Math.floor((high - low) / 2)
    document.getElementById("number").innerHTML = number ;
}

function lower(){
    high = number -1 ; 
    number = low + Math.floor((high - low) / 2)
    document.getElementById("number").innerHTML = number ;
} 

function correct(){
    document.getElementById("text-bar").innerHTML = "YEh! I guessed your number!";
    document.getElementById("text-bar").style.color = "green" ;
    document.getElementById("text-bar").style.fontSize = "30px" ;
}

function harder(){
    high = 1000000 ; 
    low = 1 ;
    number = low + Math.floor((high - low) / 2)
    document.getElementById("number").innerHTML = number ; 
    document.getElementById("number").style.color = "red" ; 
    document.getElementById("high-number").innerHTML = "1 Million";

}

function restart(){
    high = 1000 ;
    low = 1 ;
    number = low + Math.floor((high - low) / 2) ;
    document.getElementById("number").innerHTML = number ; 
    document.getElementById("number").style.removeProperty("color");
    document.getElementById("high-number").innerHTML = "1000";
 

}