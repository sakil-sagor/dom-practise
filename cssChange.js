
let articleHeading = document.querySelector('.article-area h1');
let articleContent = document.querySelector('.article-area p');

function addStyle() {
    articleHeading.classList.add("heading");
    articleContent.classList.add("content");
}
function removeStyle() {
    articleHeading.classList.remove("heading");
    articleContent.classList.remove("content");
}


