var headline = document.querySelector(".headline");
var form = document.querySelector(".style-form");
var description = document.querySelector("#description");
var styleImg = document.querySelector("#style-img");
var styleContainer = document.querySelector(".style");

function result() {
    var name = document.querySelector("#name").value;
    console.log(name);
    console.log(form);
    form.style.display = 'none';
    headline.innerText = "Hi, " + name + ". This is the style for you today";
    console.log(headline);
    description.innerHTML = "White shirt and casual pants";
    styleImg.src = "./assets/style-1.jpg";
    styleContainer.style.visibility = "visible";
}

