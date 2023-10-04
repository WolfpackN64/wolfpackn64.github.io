const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/D&D-Belgium.png") {
    myImage.setAttribute("src", "images/tiamat.png");
  } else {
    myImage.setAttribute("src", "images/D&D-Belgium.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `First Belgium, then the World!, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `First Belgium, then the World!, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};