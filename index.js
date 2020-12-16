//For Button Click
var numOfBut = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfBut; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() 
{
    var buttoninnerHTML = this.innerHTML;
    makeSound(buttoninnerHTML);
    buttonAnimation(buttoninnerHTML);
}

//For Key Press

document.addEventListener("keydown", keySound);

function keySound(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
}


function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("tom-4.mp3");
            audio.play();
            break;
        default:
            alert("Wrong Key Pressed!")
            break;
    }


}
function buttonAnimation(event)
{
var activeButton=document.querySelector("."+event);
activeButton.classList.add("pressed");

setTimeout(function()
{
    activeButton.classList.remove("pressed");

},100);
}
