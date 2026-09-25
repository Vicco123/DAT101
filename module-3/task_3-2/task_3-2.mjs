"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let up = "";
let down = "";

  for (let i = 1, j = 10;  i <= 10; i++, j--) {
    up += i + " ";
    down += j + " ";
}

printOut(up);
printOut(down);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = 100;
while (number !== 45) {
  number = Math.floor(Math.random() * 60) + 1;
}
printOut("The number is " + number);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number2 = 0;
let count = 0;
let startTime = Date.now();
while (number2 !== 456789) {
  number2 = Math.floor(Math.random() * 1000000) + 1;
  count++;
}
printOut("The number is " + number2);
printOut("Time taken: " + (Date.now() - startTime) + " milliseconds");
printOut("Number of guesses: " + count);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/ 
let br = " ";
count = 0;

for (let tall = 2; tall <= 200; tall++) {
    let divi = 2;
    let count2 = 0;

    while (divi < tall) {
        count2 += tall % divi === 0;
        divi ++;
    }

    if (count2 === 0) {
        br += tall + " ";
        count++;
        
      if (count % 25 === 0) {
          br += "<br>";
        }
    } 
}
printOut(br); 

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <= 7; row++) {
    let line = "";

    for (let col = 1; col <= 9; col++) {
        line += "K" + col + "R" + row + " ";
    }

    printOut(line);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let antallA = 0;
let antallB = 0;
let antallC = 0;
let antallD = 0;
let antallE = 0;
let antallF = 0;

for (let student = 1; student <= 5; student++) {
  let poeng = Math.floor(Math.random() * 236) + 1;
  let prosent = (poeng / 236) * 100;

  let grade = "";

  if (prosent >= 89) {
    grade = "A";
    antallA++;
  } else if (prosent >= 77) {
    grade = "B";
    antallB++;
  } else if (prosent >= 65) {
    grade = "C";
    antallC++;
  } else if (prosent >= 53) {
    grade = "D";
    antallD++;
  } else if (prosent >= 41) {
    grade = "E";
    antallE++;
  } else {
    grade = "F";
    antallF++;
  }

  printOut("Student " + student + " scored " + poeng + " points. Which is  " + prosent.toFixed(0) + "%, and gives the grade " + grade + ".");
}
  printOut(newLine);
  printOut("Sorted grades A - F:")

let teller = 0;
do {
  if (antallA > 0) printOut("A");
  teller++;
} while (teller < antallA);

teller = 0;
do {
  if (antallB > 0) printOut("B");
  teller++;
} while (teller < antallB);

teller = 0;
do {
  if (antallC > 0) printOut("C");
  teller++;
} while (teller < antallC);

teller = 0;
do {
  if (antallD > 0) printOut("D");
  teller++;
} while (teller < antallD);

teller = 0;
do {
  if (antallE > 0) printOut("E");
  teller++;
} while (teller < antallE);

teller = 0;
do {
  if (antallF > 0) printOut("F");
  teller++;
} while (teller < antallF);


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let throws = 0;

let straightFound = false;
let pairsFound = false;
let towerFound = false;
let yahtzeeFound = false;

let straightThrows = 0;
let pairsThrows = 0;
let towerThrows = 0;
let yahtzeeThrows = 0;

while (!straightFound || !pairsFound || !towerFound || !yahtzeeFound) {

    throws++;

    let t1 = Math.floor(Math.random() * 6) + 1;
    let t2 = Math.floor(Math.random() * 6) + 1;
    let t3 = Math.floor(Math.random() * 6) + 1;
    let t4 = Math.floor(Math.random() * 6) + 1;
    let t5 = Math.floor(Math.random() * 6) + 1;
    let t6 = Math.floor(Math.random() * 6) + 1;

    let a1 = 0, a2 = 0, a3 = 0, a4 = 0, a5 = 0, a6 = 0;

    if (t1 === 1) a1++;
    if (t2 === 1) a1++;
    if (t3 === 1) a1++;
    if (t4 === 1) a1++;
    if (t5 === 1) a1++;
    if (t6 === 1) a1++;

    if (t1 === 2) a2++;
    if (t2 === 2) a2++;
    if (t3 === 2) a2++;
    if (t4 === 2) a2++;
    if (t5 === 2) a2++;
    if (t6 === 2) a2++;

    if (t1 === 3) a3++;
    if (t2 === 3) a3++;
    if (t3 === 3) a3++;
    if (t4 === 3) a3++;
    if (t5 === 3) a3++;
    if (t6 === 3) a3++;

    if (t1 === 4) a4++;
    if (t2 === 4) a4++;
    if (t3 === 4) a4++;
    if (t4 === 4) a4++;
    if (t5 === 4) a4++;
    if (t6 === 4) a4++;

    if (t1 === 5) a5++;
    if (t2 === 5) a5++;
    if (t3 === 5) a5++;
    if (t4 === 5) a5++;
    if (t5 === 5) a5++;
    if (t6 === 5) a5++;

    if (t1 === 6) a6++;
    if (t2 === 6) a6++;
    if (t3 === 6) a6++;
    if (t4 === 6) a6++;
    if (t5 === 6) a6++;
    if (t6 === 6) a6++;

    // FULL STRAIGHT
    if (!straightFound &&
        a1 === 1 && a2 === 1 && a3 === 1 &&
        a4 === 1 && a5 === 1 && a6 === 1) {

        straightFound = true;
        straightThrows = throws;

        printOut(`${t1},${t2},${t3},${t4},${t5},${t6}`);
        printOut("Full straight");
        printOut("Found on throw " + throws + "!<br>");
    }

    // YAHTZEE
    if (!yahtzeeFound &&
        (a1 === 6 || a2 === 6 || a3 === 6 ||
         a4 === 6 || a5 === 6 || a6 === 6)) {

        yahtzeeFound = true;
        yahtzeeThrows = throws;

        printOut(`${t1},${t2},${t3},${t4},${t5},${t6}`);
        printOut("Yahtzee");
        printOut("Found on throw " + throws + "!<br>");
    }

    // 3 PAIRS
    let pairs = 0;

    if (a1 === 2) pairs++;
    if (a2 === 2) pairs++;
    if (a3 === 2) pairs++;
    if (a4 === 2) pairs++;
    if (a5 === 2) pairs++;
    if (a6 === 2) pairs++;

    if (!pairsFound && pairs === 3) {

        pairsFound = true;
        pairsThrows = throws;

        printOut(`${t1},${t2},${t3},${t4},${t5},${t6}`);
        printOut("3 pairs");
        printOut("Found on throw " + throws + "!<br>");
    }

    // TOWER (4 OF A KIND + 2 OF A KIND)
    let fourLike = false;
    let twoLike = false;

    if (a1 === 4 || a2 === 4 || a3 === 4 ||
        a4 === 4 || a5 === 4 || a6 === 4) {
        fourLike = true;
    }

    if (a1 === 2 || a2 === 2 || a3 === 2 ||
        a4 === 2 || a5 === 2 || a6 === 2) {
        twoLike = true;
    }

    if (!towerFound && fourLike && twoLike) {

        towerFound = true;
        towerThrows = throws;

        printOut(`${t1},${t2},${t3},${t4},${t5},${t6}`);
        printOut("Tower");
        printOut("Found on throw " + throws + "!<br>");
    }
}
