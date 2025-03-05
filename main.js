let div1 = document.createElement("div");
div1.classList.add("container");
document.body.append(div1);

let header = document.createElement("header");
let logo = document.createElement("p");
logo.textContent = "Logo";
header.append(logo);
div1.append(header);

let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
li1.textContent = "Home";
li2.textContent = "About";
li3.textContent = "Contact";
ul.append(li1, li2, li3);
header.append(ul);

let nav = document.querySelector(".nav");
header.append(nav);
let img = document.createElement("img");
document.body.append(img);
img.src = "./Rectangle 24.png";
img.alt = "placeholder image";
let main = document.createElement("main");
let div = document.createElement("div");
div.classList.add("main");
let h1 = document.createElement("h1");
let p = document.createElement("p");
let button = document.createElement("button");
let buttonDiv = document.createElement("div");
buttonDiv.classList.add("buttonDiv");
h1.textContent = "Work that we produce for our clients";
p.textContent =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.";
button.textContent = "Get more details";
div.append(h1, p, button);
main.append(div);
div1.append(main);
buttonDiv.append(button);
div.append(buttonDiv);
main.append(img)

let darkMode = document.querySelector(".b2");
let lightMode = document.querySelector(".b1");

darkMode.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  div.style.backgroundColor = "black";
  buttonDiv.style.color = "white";
  document.querySelector(".b1").style.color = "white";
  document.querySelector(".b1").style.backgroundColor = "#C4B5A5";
  document.querySelector(".b2").style.color = "white";
  document.querySelector(".b2").style.backgroundColor = "#fb982f";
});
lightMode.addEventListener("click", () => {
  document.body.style.backgroundColor = "#c4b5a5";
  document.body.style.color = "black";
  div.style.backgroundColor = "#c4b5a5";
  buttonDiv.style.color = "black";
  document.querySelector(".b1").style.color = "black";
  document.querySelector(".b1").style.backgroundColor = "#fb982f";
  document.querySelector(".b2").style.color = "white";
  document.querySelector(".b2").style.backgroundColor = "black";
});
