let myButton = document.querySelectorAll('#my-button');
for (let i = 0; i < myButton.length; i++) {
    let element = myButton[i];
    element.addEventListener("click", function () {
        let button = this.innerHTML;
        document.querySelector('.multi-event h2').innerHTML = button + " is clicked."
    });
}


