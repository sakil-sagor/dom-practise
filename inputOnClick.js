document.querySelector('#update-button').addEventListener("click", function () {
    let input = document.getElementById('input-text');
    let inputContent = document.querySelector('.input-content');
    inputContent.innerText = input.value;
    input.value = '';
})