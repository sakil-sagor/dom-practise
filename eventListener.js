// method 1

let addEvent = document.querySelector('.add-event h1');

// by main function cll 
addEvent.addEventListener("mouseover", eventFunction);
function eventFunction() {
    addEvent.classList.add('event');
}

// by annimouse function call 

addEvent.addEventListener("mouseout", function () {
    addEvent.classList.remove('event');
})











// method 2
/* document.querySelector('.add-event h1').addEventListener("click", function () { document.querySelector('.add-event h1').classList.add('event') }); */