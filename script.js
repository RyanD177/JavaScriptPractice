
const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=Rz7zsBnjblDGXKyBezcTRjdCbNJXoYnjsX6Rt3km'


async function getPictureOfDay() {
const response = await fetch (API_URL);
console.log(response);
const responseData = await response.json();
console.log(responseData)


const {url,title,explanation,date} = responseData;
const pictureElement = document.createElement("div");
pictureElement.classList.add("Picture-of-Day");
pictureElement.innerHTML = `
<h1> ${title} </h1>
<img src=${url} alt="">
<summary> ${explanation} </summary>
<footer> ${date} </footer>`


document.body.appendChild(pictureElement);
}
getPictureOfDay();