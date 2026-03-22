// Greeting based on time (runs automatically)
let hour = new Date().getHours();
let message = "";

if (hour < 12) {
    message = "Good Morning!";
} else if (hour < 18) {
    message = "Good Afternoon!";
} else {
    message = "Good Evening!";
}

alert(message);


// Button color change
let colors = ["green", "red"];
let index = 0;

document.getElementById("colorBtn").addEventListener("click", function () {
    index = (index + 1) % colors.length;
    this.style.backgroundColor = colors[index];
});


// Form submit function
function submitForm() {
    let name = document.getElementById("nameInput").value;
    if (name === "") {
        alert("Please enter your name!");
    } else {
        alert("Hello, " + name + "!");
    }
}


// Calculator function
function addNumbers() {
    let a = 10;
    let b = 20;
    let result = a + b;
    alert("Result: " + result);
}