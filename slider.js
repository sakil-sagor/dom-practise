let imgArray = ["images/sakil.jpg", "images/kuttu.jpg", "images/3.jpg"]

let imgTag = document.querySelector('.slider img');

let count = 0;



function next() {

    // system 1
    /*     count++;
        if (count == imgArray.length) {
            count = 0;
            imgTag.src = imgArray[count];
        } else {
    
    
            imgTag.src = imgArray[count];
        } */


    // system 2

    count++;
    if (count == imgArray.length) {
        count = 0;
    }
    imgTag.src = imgArray[count];

}
function previous() {

    // system 1
    count--;
    if (count < 0) {
        count = imgArray.length - 1;
        imgTag.src = imgArray[count];

    } else {
        imgTag.src = imgArray[count];
    }

    // system 2
    /* 
      count--;
        if (count < 0) {
              count = imgArray.length - 1;
          }
          imgTag.src = imgArray[count];
       */



}