const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

btn.addEventListener("click", () =>{
    let btnClass= btn.getAttribute("class");
    if (btnClass === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent= "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    };

});

/* Declaring the array of image filenames */

const imgArr = ["./images/pic1.jpg", "./images/pic2.jpg", "./images/pic3.jpg", "./images/pic4.jpg", "./images/pic5.jpg"];

/* Looping through images */

for (pic of imgArr) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', pic);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", event => {
        clickedAttr = event.target.getAttribute("src");
        displayedImage.setAttribute("src", clickedAttr);
    });
    
}



/* Wiring up the Darken/Lighten button */
