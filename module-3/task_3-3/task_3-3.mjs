"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function formatDate() {
  const date = new Date();
  printOut(date.toLocaleString("no-NB", { 
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
  }));
}
formatDate();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
formatDate();
function gameRelease() {
  const GTA6 = new Date(Date.UTC(2026, 10, 19, 0, 0, 0));
  const today = new Date();
  const daysRemaining = Math.ceil((GTA6 - today) / (1000 * 60 * 60 * 24));
  
  printOut(`There are ${daysRemaining} days remaining until Grand Theft Auto VI release.`);
  printOut(`Launching on ${GTA6.toLocaleDateString("no-NB", { 
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
  })}.`);
}
gameRelease();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateCircleProperties(radius) {
  let diameter = 2 * radius;
  let circumference = Math.PI * diameter;
  let areal = Math.PI * Math.pow(radius, 2);

  printOut("Diameter is " + diameter);
  printOut("Circumference is " + circumference.toFixed(2));
  printOut("Areal is " + areal.toFixed(2));
}
calculateCircleProperties(5);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculaterectangleProperties(width, height) {
  let circumference = 2 * (width + height);
  let areal = width * height;

  printOut("Rectangle width: " + width + ", height: " + height);
  printOut("Circumference is " + circumference.toFixed(2));
  printOut("Areal is " + areal.toFixed(2));
}
calculaterectangleProperties(4, 3);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function conversionDegrees(temperature, type) {
let celsius, fahrenheit, kelvin;
if (type === "Celsius") {
  celsius = temperature;
  fahrenheit = (temperature * 9/5) + 32;
  kelvin = temperature + 273.15;

} else if (type === "Fahrenheit") {
  fahrenheit = temperature;
  celsius = (temperature - 32) * 5/9;
  kelvin = celsius + 273.15;

} else if (type === "Kelvin") {
  kelvin = temperature;
  celsius = temperature - 273.15;
  fahrenheit = (celsius * 9/5) + 32;
}

printOut("Convert " + temperature + " " + type);
printOut("Celsius = " + Math.ceil(celsius));
printOut("Fahrenheit = " + Math.ceil(fahrenheit));
printOut("Kelvin = " + Math.ceil(kelvin));
printOut(newLine);
}
conversionDegrees(47, "Celsius");
conversionDegrees(100, "Fahrenheit");
conversionDegrees(300, "Kelvin");

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calctulatewithoutVAT(price, vat) {
  let priceWithoutVAT = 0;
  vat = "" + vat.toLowerCase() + "";
  if (vat == "normal") {
    vat = 25;
    priceWithoutVAT = (100 * price) / (vat + 100);
    printOut("Price without VAT: " + priceWithoutVAT.toFixed(2));
  } else if (vat == "food") {
    vat = 15;
    priceWithoutVAT = (100 * price) / (vat + 100);
    printOut("Price without VAT: " + priceWithoutVAT.toFixed(2));
  } else if (vat == "hotel") {
    vat = 10;
    priceWithoutVAT = (100 * price) / (vat + 100);
    printOut("Price without VAT: " + priceWithoutVAT.toFixed(2));
  } else if (vat == "transport") {
    vat = 10;
    priceWithoutVAT = (100 * price) / (vat + 100);
    printOut("Price without VAT: " + priceWithoutVAT.toFixed(2));
  } else if (vat == "cinema") {
    vat = 10;
    priceWithoutVAT = (100 * price) / (vat + 100);
    printOut("Price without VAT: " + priceWithoutVAT.toFixed(2));
  } else { 
   printOut("< " + vat + " > is an unknown VAT group!") 
  }

  printOut(newLine);
}
calctulatewithoutVAT(1000, "normal");
calctulatewithoutVAT(500, "food");
calctulatewithoutVAT(200, "HOTEL");
calctulatewithoutVAT(100, "goblins");

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateSpeed(speed, distance, time){
  if (speed === undefined && distance !== undefined && time !== undefined) {
    speed = distance / time;

  } else if (distance === undefined && speed !== undefined && time !== undefined) {
    distance = speed * time;

  } else if (time === undefined && speed !== undefined && distance !== undefined) {
    time = distance / speed;

  } else {
    printOut("Speed = " + Math.ceil(speed) + " km/h");
    printOut("Distance = " + Math.ceil(distance) + " km");
    printOut("Time = " + time + " h");
    return NaN; 
  }
    printOut("Speed = " + Math.ceil(speed) + " km/h");
    printOut("Distance = " + Math.ceil(distance) + "km");
    printOut("Time = " + time.toFixed(2) + " h");
    printOut(newLine);

    return { speed, distance, time };
}
calculateSpeed(undefined, 50, 0.67);
calculateSpeed(60, undefined, 2);
calculateSpeed(70, 105, undefined);
calculateSpeed(undefined, 50, undefined);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function fourparameters(text, max, character, boolean) {
  if (text.length < max && boolean === true) {
    let difference = max - text.length;
    text = text + character.repeat(difference);
    }
    else if (text.length < max && boolean === false) {
      let difference = max - text.length;
      text = character.repeat(difference) + text;
    }
  printOut(text);
}
fourparameters("This is a text", 105, "\u00A0", true);
fourparameters("This is a text", 105, "\u00A0", false);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function expression(lines) {
    let number = 1;

    for (let row = 1; row <= lines; row++) {
        let left = "";
        let right = "";
        let lSum = 0;
        let rSum = 0;

        // Venstre side
        for (let i = 0; i < row + 1; i++) {
            left += number + " ";
            lSum += number;
            number++;
        }

        // Høyre side
        for (let i = 0; i < row; i++) {
            right += number + " ";
            rSum += number;
            number++;
        }

        if (lSum !== rSum) {
            printOut("Failed at line " + row);
            return;
        }

    }
    printOut("Maths fun!");
}

expression(200);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  printOut("Factorial(" + n + ") = " + result);
}
factorial(9);
printOut(newLine);
