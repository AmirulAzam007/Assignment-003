1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById: Returns a single element with the specified ID. It’s very fast and straightforward, but only works for IDs.

getElementsByClassName: Returns a live collection of all elements with a specific class. Live means it automatically updates if the DOM changes.

querySelector: Returns the first element that matches any CSS selector (ID, class, tag, etc.).

querySelectorAll: Returns all elements that match a CSS selector as a static NodeList (doesn’t change if the DOM changes).

Example:

const myId = document.getElementById("myId");
const myClass = document.getElementsByClassName("myClass");
const firstQuery = document.querySelector(".myClass");
const allQuery = document.querySelectorAll(".myClass");
2. Creating and Inserting a New Element

To add new elements dynamically:

Create the element:

const newDiv = document.createElement("div");

Add content or attributes:

newDiv.innerText = "Hello World";
newDiv.classList.add("card");

Insert it into the DOM:

const container = document.getElementById("allcards");
container.appendChild(newDiv); // adds at the end
3. Event Bubbling

Event bubbling is when an event starts on the element you clicked and then bubbles up through its parent elements.

For example, if you click a button inside a div:

The button’s click event fires first

Then the div’s click event fires

Then the body’s click event fires

It’s like the event travels from the innermost element outwards.

4. Event Delegation

Event delegation is a technique where you attach an event listener to a parent element instead of every child element.

When a child is clicked, you check event.target to see which element triggered the event.

Very useful for dynamic content or when you have many elements — saves memory and simplifies code.

Example:

const container = document.getElementById("allcards");

container.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete")) {
    const card = event.target.closest(".card");
    card.remove();
  }
});
5. preventDefault() vs stopPropagation()

preventDefault(): Stops the browser’s default action.

Example: Preventing a form from submitting or a link from navigating.

stopPropagation(): Stops the event from bubbling up to parent elements.

Example: Preventing a parent click handler from running when a child is clicked.

Example:

document.querySelector("a").addEventListener("click", function(e) {
  e.preventDefault(); // link won’t navigate
});

document.querySelector(".child").addEventListener("click", function(e) {
  e.stopPropagation(); // click won’t bubble to parent
});
