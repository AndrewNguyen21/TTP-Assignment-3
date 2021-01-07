//Added some empty console logs to skip lines to console is easier to read

//1) Select the section with an id of container without using querySelector.
let task1 = document.getElementById("container");
console.log("Element selected with getElementById:");
console.log(task1);
console.log("successfully selected");
console.log("");

//2) Select the section with an id of container using querySelector.
let task2 = document.querySelector("#container");
console.log("Element selected with querySelector:");
console.log(task2);
console.log("successfully selected");
console.log("");

//3) Select all of the list items with a class of "second".
let task3 = document.querySelectorAll(".second");
console.log("Element selected:");
task3.forEach((element) => console.log(element));
console.log("Successfully selected");
console.log("");

//4) Select a list item with a class of third, but only the list item inside of the ol tag.
let task4 = document.querySelector("ol .second");
console.log("Element selected:");
console.log(task4);
console.log("Successfully selected");
console.log("");

//5) Give the section with an id of container the text "Hello!".
let task5 = document.getElementById("container");
console.log("Element selected.");
task5.append("Hello");
console.log("'Hello' has been appended");
console.log("");

//6) Add the class main to the div with a class of footer.
let task6 = document.querySelector(".footer");
console.log("Element selected.");
task6.classList.add("main");
console.log("Class of 'main' has been added");
console.log("");

//7) Remove the class main on the div with a class of footer.
let task7 = document.querySelector(".footer");
console.log("Element selected.");
task6.classList.remove("main");
console.log("Class of 'main' has been removed");
console.log("");

//8) Create a new li element.
let task8 = document.createElement("li");
console.log("Creating list item...");
console.log("List item created (but not added to list)");
console.log("");

//9) Give the li the text "four".
let task9 = document.createTextNode("four");
console.log("Entering text for created list item...");
task8.appendChild(task9);
console.log("Text entered to list item.");
console.log("");

//10) Append the li to the ul element.
let task10 = document.getElementById("container").querySelector("ul");
console.log("Appending item and contents to list...");
task10.appendChild(task8);
console.log("Item appended to list.");
console.log("");

//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
let task12 = document.querySelectorAll("ol li");
console.log("Element selected.");
task12.forEach((element) => (element.style.background = "green"));
console.log("Green background applied to selected elements.");
console.log("");

//13) Remove the div with a class of footer
let task13 = document.querySelector(".footer");
console.log("Element selected.");
task13.remove();
console.log("Element removed.");
