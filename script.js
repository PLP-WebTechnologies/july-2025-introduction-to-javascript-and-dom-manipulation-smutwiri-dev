
// Variable and conditional 
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  let age = document.getElementById("ageInput").value; // get user input
  let result = "";

  if (age >= 18) {
    result = "You are eligible to vote!";
  } else if (age > 0) {
    result = "You are not eligible to vote yet.";
  } else {
    result = "Please enter a valid age.";
  }

  document.getElementById("ageResult").textContent = result;
});

// ------------------------------
// Functions
// ------------------------------

// Function to calculate sum of two numbers
function calculateSum(a, b) {
  return a + b;
}

document.getElementById("sumBtn").addEventListener("click", function () {
  let total = calculateSum(5, 10);
  document.getElementById("sumResult").textContent = "The sum is: " + total;
});

// Function to toggle message visibility
function toggleMessage() {
  let message = document.getElementById("toggleMessage");
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
}

document.getElementById("toggleBtn").addEventListener("click", toggleMessage);

// ------------------------------
//  Loops
// ------------------------------

// Example with for loop
document.getElementById("listBtn").addEventListener("click", function () {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear list first
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    list.appendChild(li);
  }
});

// Example with while loop
document.getElementById("countdownBtn").addEventListener("click", function () {
  let countdown = 5;
  let result = "";
  while (countdown > 0) {
    result += countdown + " ";
    countdown--;
  }
  document.getElementById("countdownResult").textContent = result;
});

// ------------------------------
//  DOM Manipulation
// ------------------------------

// Change background color on button click
document.getElementById("changeColorBtn").addEventListener("click", function () {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

// Add new list item dynamically
document.getElementById("addItemBtn").addEventListener("click", function () {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(newItem);
});
