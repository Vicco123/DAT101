"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
let klokke = 7;
if (klokke == 7){
    printOut("If I wake up at exactly " + klokke  + " o'clock then I can take the bus to school.");
}
else if (klokke == 8){
    printOut("If I wake up at exactly " + klokke + " o'clock, I can take the train to school.");
}
else{
    printOut("I have to take the car to school.")
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let int = 0
if (int > 0){
    printOut("Positive");
}
else if (int == 0){
    printOut("Zero");
}
else{
    printOut("Negative")
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let img = Math.floor(Math.random() * 8) + 1;
printOut("Image size: " + img);
if (img >= 4){
    printOut("Thank you");
}
else{
    printOut("The image is too small");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Image size: " + img);
if (img >= 4 && img < 6){
    printOut("Thank you");
}
else if (img >= 6) {
    printOut("The image is too large");
}
else{
    printOut("The image is too small");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
"Juni", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut(monthName);

if(monthName.includes("r")){
    printOut("You must take vitamin D");
}
else{
    printOut("You do not need to take vitamin D");
}


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if (monthName == "February"){
    printOut(monthName + " has 28 days");
}
else if (monthName == "April" || monthName == "Juni" || 
         monthName == "September" || monthName == "November"){
    printOut(monthName + " has 30 days");
}
else{
    printOut(monthName + " has 31 days");
}
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if (monthName == "April"){
    printOut(monthName + ": We have temporary premises in the building next door");
}
else if (monthName == "Mars" || monthName == "Mai"){
    printOut(monthName + ": The gallery is closed");
}
else{
    printOut(monthName + ": The gallery is open");
}
printOut(newLine);
