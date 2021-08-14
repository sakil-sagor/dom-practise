let ul = document.querySelector('ul');
let liIteam = document.querySelectorAll('ul li');
let addIteam = document.querySelector('#add-iteam');


// system 1

/* for (let i of liIteam) {
    i.addEventListener("click", function () {
        ul.removeChild(i);
    })
} */




// system 2  ( good system)

/* 
for (let iteam of liIteam) {
    iteam.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}

 */




// add itam by button click 

addIteam.addEventListener('click', function () {
    let newIteam = document.createElement('li');
    newIteam.classList.add("iteam");
    newIteam.innerText = "new button added";

    ul.appendChild(newIteam);
})


//system 3-  best system which i will use all time 

ul.addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);

})