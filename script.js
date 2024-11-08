// YOUR CODE HERE
console.log("Script Running.");
// Base Lightbulb-Switch Functionality

// Switch 1 toggles lightbulb 3 and 8
const switch1 = document.querySelector("#switch1");
const change38 = () => {
    const light3 = document.querySelector("#lightbulb3");
    const light8 = document.querySelector("#lightbulb8");
    light3.classList.toggle("active");
    light8.classList.toggle("active");
};
switch1.addEventListener('change', change38);

// Switch 2 toggles lightbulb 1 and 7
const switch2 = document.querySelector("#switch2");
const change17 = () => {
    const light1 = document.querySelector("#lightbulb1");
    const light7 = document.querySelector("#lightbulb7");
    light1.classList.toggle("active");
    light7.classList.toggle("active");
};
switch2.addEventListener('change', change17);

// Switch 3 toggles lightbulb 4, 6, and 8
const switch3 = document.querySelector("#switch3");
const change468 = () => {
    const light4 = document.querySelector("#lightbulb4");
    const light6 = document.querySelector("#lightbulb6");
    const light8 = document.querySelector("#lightbulb8");
    light4.classList.toggle("active");
    light6.classList.toggle("active");
    light8.classList.toggle("active");
};
switch3.addEventListener('change', change468);

// Switch 4 toggles lightbulb 2 and 9
const switch4 = document.querySelector("#switch4");
const change29 = () => {
    const light2 = document.querySelector("#lightbulb2");
    const light9 = document.querySelector("#lightbulb9");
    light2.classList.toggle("active");
    light9.classList.toggle("active");
};
switch4.addEventListener('change', change29);

// Switch 5 toggles lightbulb 5 and 7 (Mild extension: changed from 5 and 9)
const switch5 = document.querySelector("#switch5");
const change57 = () => {
    const light5 = document.querySelector("#lightbulb5");
    const light7 = document.querySelector("#lightbulb7");
    light5.classList.toggle("active");
    light7.classList.toggle("active");
};
switch5.addEventListener('change', change57);

// Switch 6 toggles lightbulb 1 and 4
const switch6 = document.querySelector("#switch6");
const change14 = () => {
    const light1 = document.querySelector("#lightbulb1");
    const light4 = document.querySelector("#lightbulb4");
    light1.classList.toggle("active");
    light4.classList.toggle("active");
};
switch6.addEventListener('change', change14);

// Switch 7 toggles lightbulb 2 and 3
const switch7 = document.querySelector("#switch7");
const change23 = () => {
    const light2 = document.querySelector("#lightbulb2");
    const light3 = document.querySelector("#lightbulb3");
    light2.classList.toggle("active");
    light3.classList.toggle("active");
};
switch7.addEventListener('change', change23);

// Switch 8 toggles lightbulb 5 and 9
const switch8 = document.querySelector("#switch8");
const change59 = () => {
    const light5 = document.querySelector("#lightbulb5");
    const light9 = document.querySelector("#lightbulb9");
    light5.classList.toggle("active");
    light9.classList.toggle("active");
};
switch8.addEventListener('change', change59);

// Switch 9 toggles lightbulb 6 and 7
const switch9 = document.querySelector("#switch9");
const change67 = () => {
    const light6 = document.querySelector("#lightbulb6");
    const light7 = document.querySelector("#lightbulb7");
    light6.classList.toggle("active");
    light7.classList.toggle("active");
};
switch9.addEventListener('change', change67);

// Master Switch to toggle all lights
const masterSwitch = document.querySelector("#masterSwitch");
const toggleAllLights = () => {
    const allLights = document.querySelectorAll(".lightbulb");
    allLights.forEach(light => {
        light.classList.toggle("active");
    });
};
masterSwitch.addEventListener('change', toggleAllLights);

// Restart Button to reset all lights and switches
const restartButton = document.querySelector("#restartButton");
const restartGame = () => {
    const allLights = document.querySelectorAll(".lightbulb");
    const allSwitches = document.querySelectorAll(".switch");
    
    // Turn off all lights
    allLights.forEach(light => {
        light.classList.remove("active");
    });

    // Reset all switches to off
    allSwitches.forEach(switchElement => {
        switchElement.checked = false;
    });
    
    // Set background to purple
    document.querySelector("#wrapper").style.backgroundColor = "rgb(255, 0, 255)";
};
restartButton.addEventListener('click', restartGame);

// Randomize Button to restart the game and turn on 3 random lights
const randomizeButton = document.querySelector("#randomizeButton");
const randomizeGame = () => {
    const allLights = document.querySelectorAll(".lightbulb");
    const lightsToTurnOn = [];
    
    // Pick 3 random lights
    while (lightsToTurnOn.length < 3) {
        const randomIndex = Math.floor(Math.random() * allLights.length);
        if (!lightsToTurnOn.includes(allLights[randomIndex])) {
            lightsToTurnOn.push(allLights[randomIndex]);
        }
    }

    // Turn on the 3 random lights
    lightsToTurnOn.forEach(light => {
        light.classList.add("active");
    });

    // Set background to purple
    document.querySelector("#wrapper").style.backgroundColor = "rgb(255, 0, 255)";
};
randomizeButton.addEventListener('click', randomizeGame);

// Update background color based on the number of active lights
const updateBackgroundColor = () => {
    let r = 255, g = 0, b = 255;
    const allLights = document.querySelectorAll(".lightbulb");
    let activeCount = 0;

    allLights.forEach(light => {
        if (light.classList.contains("active")) {
            activeCount++;
        }
    });

    // Update the color depending on the progress
    r -= activeCount * 28;
    g += activeCount * 28;
    b -= activeCount * 28;

    // Apply color change
    document.querySelector("#wrapper").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};

// Call `updateBackgroundColor` every time a light's state changes
const allLights = document.querySelectorAll(".lightbulb");
allLights.forEach(light => {
    light.addEventListener("classChange", updateBackgroundColor);
});
