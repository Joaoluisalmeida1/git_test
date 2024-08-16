// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


// add a paragraph with red text that says "Hey I'm red!"

const redParagraph = document.createElement("p");
redParagraph.style.color = "red";
redParagraph.textContent = "Hey I'm red!";
container.appendChild(redParagraph);

// add a h3 with blue text that says I'm a blue h3!

const blueHeading = document.createElement("h3");
blueHeading.style.color = "blue";
blueHeading.textContent = "I'm a blue h3!"
container.appendChild(blueHeading);

// add a div with black border, pink background color, with a h1
// saying I'm in a div, a p saying ME TOO!

const styledDiv = document.createElement("div");
styledDiv.style.border = "1px solid black";
styledDiv.style.backgroundColor = "pink";
const divHeading = document.createElement("h1");
divHeading.textContent = "I'm in a div";
const divParagraph = document.createElement("p");
divParagraph.textContent = "ME TOO!";

styledDiv.appendChild(divHeading);
styledDiv.appendChild(divParagraph);
container.appendChild(styledDiv);

function alertFunction() {
    alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });
  