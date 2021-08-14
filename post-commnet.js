let postButton = document.querySelector('#post-button');
let comment = document.querySelector('#comment-box');
let allComment = document.querySelector(".all-comment");

postButton.addEventListener('click', function () {
    let newComment = document.createElement('p');

    newComment.innerText = comment.value;

    allComment.appendChild(newComment);
    comment.value = '';

})
console.log(comment);