for (var i= 0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        //console.log(buttonInnerHTML)
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        //Detecting click
    })
}

//Detecting keyword press
document.addEventListener("keydown", function(e){
    //console.log(e.key)
    makeSound(e.key)
    buttonAnimation(e.key);
})



function makeSound(key){
    switch (key){
        case "w":
            new Audio('sounds/tom-1.mp3').play()
            break;
        case "a":
            new Audio('sounds/tom-2.mp3').play()
            break;
        case "s":
            new Audio('sounds/tom-3.mp3').play()
            break;
        case "d":
            new Audio('sounds/tom-4.mp3').play()
            break;
        case "j":
            new Audio('sounds/snare.mp3').play()
            break;
        case "k":
            new Audio('sounds/crash.mp3').play()
            break;
        case "l":
            new Audio('sounds/kick-bass.mp3').play()
            break;
        default :
            console.log(buttonInnerHTML)
    }
}

function buttonAnimation(currentKey) {
    var activeButton= document.querySelector("." + currentKey);
    activeButton.classList.add('pressed')

    setTimeout(function(){
        activeButton.classList.remove('pressed')
    },200)
    
}