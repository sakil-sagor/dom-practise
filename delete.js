let deleteText = document.getElementById('delete-text');
let deleteInput = document.getElementById('delete-input');
let deleteButton = document.getElementById('delete-button');
let deleteArea = document.getElementById('delete-area');
let successMsg = document.getElementById('success-msg');

// click event handler 
deleteButton.addEventListener('click', function () {
    deleteText.style.display = "none";
    deleteInput.value = '';
    successMsg.style.display = "block";
    deleteArea.style.display = "none";

});

// focus event handler
deleteInput.addEventListener('focus', function () {
    this.style.background = " red";
});


// blur event handler
deleteInput.addEventListener('blur', function () {
    this.style.background = " white";
});

// keyup event handler
deleteInput.addEventListener('keyup', function (event) {
    if (event.target.value == "delete") {
        deleteButton.removeAttribute('disabled');
    } else {
        deleteButton.setAttribute('disabled', true);
    }
});
