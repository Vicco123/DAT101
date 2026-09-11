"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let sum = 2 + 3 * (2 - 4) * 6;
let sumtxt = "2 + 3 * (2 - 4) * 6";

printOut(sumtxt);
printOut("= " + sum);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let millimeter = 0;
let meter = 25;
let centimeter = 34;

millimeter = (meter * 1000 + centimeter * 10);
let millPrInch = millimeter / 25.4;
printOut(millPrInch.toFixed(2) + " inches.");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3day = 3;
const part3hour = 12;
const part3minute = 14;
const part3second = 45;

let part3Answer = (part3day * 24 * 60) + (part3hour * 60) + part3minute + (part3second / 60);
printOut(part3Answer.toFixed(0) + " minutes.");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totaldays = 6322.52 /(24*60);
const wholedays = Math.floor(totaldays);

let leftover = totaldays - wholedays;
const totalhours = leftover * 24;
const wholehour = Math.floor(totalhours); 

leftover = totalhours - wholehour;
const totalminutes = leftover * 60;
const wholeminutes = Math.floor(totalminutes);

leftover = totalminutes - wholeminutes;
const totalseconds = leftover * 60;
const wholeseconds = Math.floor(totalseconds);
printOut(wholedays + " days, " + wholehour + " hours, " + wholeminutes + " minutes, and " + wholeseconds + " seconds.");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let dollaramount = 54;
let NOK = 76/8.6;
let USD = 8.6/76;
let Dollar = dollaramount * USD;
let Kroner = dollaramount * NOK;

let nokamount = 54;
let Dollar2 = nokamount * USD;
let Kroner2 = nokamount * NOK;
printOut(Math.floor(dollaramount) + " dollars is equivalent to " + Math.floor(Kroner) + " kroners.");
printOut(Math.floor(nokamount) + " kroner is equivalent to " + Dollar2.toFixed(2) + " dollars.");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text = "There is much between heaven and earth that we do not understand.";
printOut(text.length);
printOut(text.charAt(19));
printOut(text.substring(35, 43));
printOut(text.indexOf("earth"));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let one = 5 > 3;
let two = 7 >= 7;
let three = "a" > "b";
let four = "1" < "a";
let five = "2500" < "abcd";
let six = "arne" != "thomas";
let seven = 2 == 5;
let eight = "abcd" > "bcd";

printOut(one);
printOut(two);
printOut(three);
printOut(four);
printOut(five);
printOut(six);
printOut(seven);
printOut(eight);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text1 = Number("254");
let text2 = Number("57.23");
let text3 = "25 kroner";

printOut(parseInt(text1));
printOut(parseFloat(text2));
printOut(parseInt(text3));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.random() * 360;
printOut(Math.floor(r) + 1);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let part10days = 131;
let weeks = Math.floor(part10days / 7);
let days = 131 % 7;
printOut(weeks + days + " days. (" + weeks + " days and " + " + " + days + " days)"); 
printOut(newLine);