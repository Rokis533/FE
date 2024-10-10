function createBox() {
  const divElement = document.createElement("div"); //sukuriam div
  divElement.classList.add("box");

  const inputElem = document.createElement("input"); // sukuriam input
  inputElem.type = "text";
  inputElem.placeholder = "Write your name";
  inputElem.id = "input-name";

  divElement.append(inputElem); // pridedam input į sukurtą div elementą

  let boxElem = document.getElementById("box-1"); // susirandam div elementą iš puslapio

  boxElem.append(divElement); // įdedam suformuotą div į egzistuojantį div
}
//-------------------------------------------------------------------------

function onoffOnload() {
  let boxElem2 = document.getElementById("box-2");
  const light = localStorage.getItem("light");
  if (light == "on") {
    boxElem2.classList.remove("on");
  } else {
    boxElem2.classList.add("on");
  }
}

function onoff() {
  const light = localStorage.getItem("light");
  if (light == "on") {
    localStorage.removeItem("light");
  } else {
    localStorage.setItem("light", "on");
  }

  let boxElem2 = document.getElementById("box-2");
  boxElem2.classList.toggle("on");
}

function createListElements(amount) {
  const list = document.getElementById("my-list");

  for (let index = 0; index < amount; index++) {
    const element = document.createElement("button");
    element.textContent = ` Elementas ${index + 1}`;
    element.addEventListener("click", () => alert(`Mygtukas - ${index + 1}`));
    list.append(element);
  }
}
createListElements(10);

createBox();
onoffOnload();
const btn = document.getElementById("on-off-btn");

btn.addEventListener("click", onoff);

const listElems = document.getElementById("my-list").children;

//console.log(listElems);

listElems[1].addEventListener("click", () => alert(`wawavyva`));
listElems[1].textContent = "wawavyva";
