// YOUR CODE HERE
console.log("Script Running.");

// Function to change the state of lightbulbs 3 and 8 when switch 1 is toggled
const change38 = () => {
    const light3 = document.querySelector("#lightbulb3");
    const light8 = document.querySelector("#lightbulb8");
    light3.classList.toggle("active");
    light8.classList.toggle("active");
};

// Function to change the state of lightbulbs 1 and 7 when switch 2 is toggled
const change17 = () => {
    const light1 = document.querySelector("#lightbulb1");
    const light7 = document.querySelector("#lightbulb7");
    light1.classList.toggle("active");
    light7.classList.toggle("active");
};

// Function to change the state of lightbulbs 4, 6, and 8 when switch 3 is toggled
const change468 = () => {
    const light4 = document.querySelector("#lightbulb4");
    const light6 = document.querySelector("#lightbulb6");
    const light8 = document.querySelector("#lightbulb8");
    light4.classList.toggle("active");
    light6.classList.toggle("active");
    light8.classList.toggle("active");
};

// Function to change the state of lightbulbs 2 and 9 when switch 4 is toggled
const change29 = () => {
    const light2 = document.querySelector("#lightbulb2");
    const light9 = document.querySelector("#lightbulb9");
    light2.classList.toggle("active");
    light9.classList.toggle("active");
};

// Function to change the state of lightbulb 5 when switch 5 is toggled
const change5 = () => {
    const light5 = document.querySelector("#lightbulb5");
    light5.classList.toggle("active");
};

// Function to change the state of lightbulbs 1 and 4 when switch 6 is toggled
const change14 = () => {
    const light1 = document.querySelector("#lightbulb1");
    const light4 = document.querySelector("#lightbulb4");
    light1.classList.toggle("active");
    light4.classList.toggle("active");
};

// Function to change the state of lightbulbs 2 and 3 when switch 7 is toggled
const change23 = () => {
    const light2 = document.querySelector("#lightbulb2");
    const light3 = document.querySelector("#lightbulb3");
    light2.classList.toggle("active");
    light3.classList.toggle("active");
};

// Function to change the state of lightbulbs 5 and 9 when switch 8 is toggled
const change59 = () => {
    const light5 = document.querySelector("#lightbulb5");
    const light9 = document.querySelector("#lightbulb9");
    light5.classList.toggle("active");
    light9.classList.toggle("active");
};

// Function to change the state of lightbulbs 6 and 7 when switch 9 is toggled
const change67 = () => {
    const light6 = document.querySelector("#lightbulb6");
    const light7 = document.querySelector("#lightbulb7");
    light6.classList.toggle("active");
    light7.classList.toggle("active");
};

// Adding event listeners to each switch to call the appropriate function
document.querySelector("#switch1").addEventListener("change", change38);
document.querySelector("#switch2").addEventListener("change", change17);
document.querySelector("#switch3").addEventListener("change", change468);
document.querySelector("#switch4").addEventListener("change", change29);
document.querySelector("#switch5").addEventListener("change", change5);
document.querySelector("#switch6").addEventListener("change", change14);
document.querySelector("#switch7").addEventListener("change", change23);
document.querySelector("#switch8").addEventListener("change", change59);
document.querySelector("#switch9").addEventListener("change", change67);

