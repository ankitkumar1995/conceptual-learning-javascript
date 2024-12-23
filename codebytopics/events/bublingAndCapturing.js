/**
 * Event bublng and capturing
 */
var divParent = document.querySelector("#div-parent");
var buttonClick = document.querySelector("#button-click");

var secondDivParent = document.querySelector("#second-div-parent");
var secondButtonClick = document.querySelector("#second-button-click");
var contact = document.querySelector("#contact");
var stopPropagationParent = document.querySelector(
  "#stop-propagation-div-parent"
);
var stopPropagationButtonClick = document.querySelector(
  "#stop-propagation-button-click"
);
var immediateDivParent = document.querySelector("#immediate-div-parent");
var immediateButtonClick = document.querySelector("#immediate-button-click");
divParent.addEventListener("click", () => {
  console.log("div parent click default bubbling");
});
buttonClick.addEventListener("click", () => {
  console.log("button click default bubbling");
});
secondDivParent.addEventListener(
  "click",
  () => {
    console.log("second div parent click capturing");
  },
  true
);
secondButtonClick.addEventListener(
  "click",
  () => {
    console.log("second button click capturing");
  },
  true
);
stopPropagationParent.addEventListener("click", () => {
  console.log("stop propagation div parent");
});
stopPropagationButtonClick.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("stop propagation button click");
});
immediateDivParent.addEventListener("click", () => {
  console.log("div parent click immediate stoppropagation");
});

immediateButtonClick.addEventListener("click", (event) => {
  console.log("button click immiate event click");
});
immediateButtonClick.addEventListener("click", (event) => {
  event.stopImmediatePropagation();
  console.log("button click immediate stoppropagation");
});
contact.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("contact me prevent default");
});
