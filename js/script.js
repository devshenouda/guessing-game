var high = 1000 ; 
var low = 1 ;
var number = low + Math.floor((high - low) / 2) ;
document.getElementById("number").innerHTML = number ; 
function higher(){
    low = number +1 ;
    number = low + Math.floor((high - low) / 2) ;
    document.getElementById("number").innerHTML = number ;
    if(high < low){
    document.getElementById("text-bar").hidden = true ; 
    document.getElementById("correct").innerHTML = "There is some thing wrong you do, please restart";
    document.getElementById("correct").style.color = "red" ; 

    }
}

function lower(){
    high = number -1 ; 
    number = low + Math.floor((high - low) / 2) ; 
    document.getElementById("number").innerHTML = number ;
    if(high<low){
        document.getElementById("text-bar").hidden = true ; 
        document.getElementById("correct").innerHTML = "There is some thing wrong you do, please restart";
        document.getElementById("correct").style.color = "red" ;    
    }
} 

function correct(){
    if(document.getElementById("correct").innerHTML == "There is some thing wrong you do, please restart"){
        document.getElementById("correct").innerHTML = "You can't make this correct!!"
    }
    else{
    document.getElementById("correct").innerHTML = "YEh! I guessed your number!";
    document.getElementById("correct").style.color = "green" ;
    document.getElementById("correct").style.fontSize = "30px" ;
    document.getElementById("text-bar").hidden = true ; 
    }
}

function harder(){
    high = 1000000 ; 
    low = 1 ;
    number = low + Math.floor((high - low) / 2)
    document.getElementById("text-bar").hidden = false ;
    document.getElementById("number").innerHTML = number ; 
    document.getElementById("number").style.color = "red" ; 
    document.getElementById("high-number").innerHTML = "1 Million";
    document.getElementById("correct").innerHTML = ""; // Clear correct message

}

function restart(){
    high = 1000; 
    low = 1;
    number = low + Math.floor((high - low) / 2);
    document.getElementById("text-bar").hidden = false ;
    document.getElementById("number").innerHTML = number; // Add this
    document.getElementById("number").style.color = "yellow"; // Optional: reset color
    document.getElementById("high-number").innerHTML = "1000"; // Optional: reset high-number display
    document.getElementById("correct").innerHTML = ""; // Clear correct message
}
