## 1. Difference Between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById finds a single element by its unique ID. It is fast and but limited to IDs.

getElementsByClassName returns a collection of all elements with the specified class. Updates automatically if the DOM changes.

querySelector returns the first element matching any CSS selector (ID, class, tag, or attribute).

querySelectorAll returns all elements matching a CSS selector as a static NodeList (does not automatically update if the DOM changes).

Example:

const myId = document.getElementById("myId");
const myClass = document.getElementsByClassName("myClass");
const firstMatch = document.querySelector(".myClass");
const allMatches = document.querySelectorAll(".myClass");

## 2. Creating and Inserting a New Element

To dynamically add elements to the DOM, start by creating the element.

const newDiv = document.createElement("div");

Next, add content and attributes to the element.

newDiv.innerText = "Hello World";
newDiv.classList.add("card");

Finally, insert the element into the DOM.

const container = document.getElementById("allcards");
container.appendChild(newDiv); 

## 3. Event Bubbling

Event bubbling is the process where an event starts at the target element and propagates upward through its ancestors.

Example: Clicking a button inside a <div>:

Button’s click event fires first

Parent <div>’s click event fires next

The <body> and document events fire afterward

This allows multiple elements to react to a single event in a hierarchical way.

## 4. Event Delegation

Event delegation is a technique where an event listener is attached to a parent element instead of each child element.

Use event.target or event.target.closest() to identify the actual child that triggered the event.

Extremely useful for dynamic content or when managing many elements.

Example:

const container = document.getElementById("allcards");

container.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete")) {
    const card = event.target.closest(".card");
    card.remove();
  }
});

This approach avoids adding individual listeners to every card.

## 5. preventDefault() vs stopPropagation()

preventDefault() stops the browser’s default behavior for an element.
Example: Prevent a link from navigating or a form from submitting.

stopPropagation() stops the event from bubbling up to parent elements.
Example: Prevent a parent click handler from executing when a child element is clicked.

Example:

document.querySelector("a").addEventListener("click", function(e) {
  e.preventDefault(); // Prevents the link from navigating
});

document.querySelector(".child").addEventListener("click", function(e) {
  e.stopPropagation(); // Prevents the event from reaching parent elements
});
