// set variable for Go button
const goBtn = document.getElementById("go");
function go() {
    // When GO button clicked, state2 function is applied
    goBtn.addEventListener('click', state2);
};

// First slide includes text for instructions and a button that says GO
function state1() {
    document.getElementById('instructions').innerHTML = "I can read your mind";
    document.getElementById('go').innerHTML = "GO";
    // Hide NEXT button so it can appear on later slides
    document.getElementById("next").style.display = "none";
    document.getElementById('subText').innerHTML = "";
    go();
    next.removeEventListener('click', state3);
    next.removeEventListener('click', state4);
    next.removeEventListener('click', state5);
    next.removeEventListener('click', state6);
};

// Call state1 to make sure it's the first thing user sees
state1();

// declare a reset function to turn GO button into RESET and make it go back to state1
// HELP: Not working fully, will reset back to state1 but pressing GO again doesn't do anything
function reset() {
    goBtn.removeEventListener('click', state2);
    goBtn.addEventListener('click', state1);
};

// Second slide includes new text for instructions, a NEXT button, subText, and a RESET button
function state2() {
    document.getElementById('instructions').innerHTML = "Pick a number from 01 - 99";
    // NEXT button is now unhidden
    document.getElementById("next").style.display = "block";
    // Make sure text in button says NEXT;
    document.getElementById('next').innerHTML = "NEXT";
    // Clicking NEXT button will apply state3 function
    next.addEventListener('click', state3);
    // Filled empty <p> tag with text
    document.getElementById('subText').innerHTML = "when you have your number click next";
    // Changed button text from GO to RESET
    document.getElementById('go').innerHTML = "RESET";
    // Call reset function
    reset();
};

// Third slide includes new text for instructions, a NEXT button, subText, and a RESET button
function state3() {
    document.getElementById('instructions').innerHTML = "Add both digits together to get a new number";
    document.getElementById("next").style.display = "block";    // HELP: Not sure if this needs to be added to each function after it was already unhidden?
    // Clicking NEXT button will apply state4 function
    next.addEventListener('click', state4);
    document.getElementById('subText').innerHTML = "Ex: 14 is 1 + 4 = 5 \n click next to proceed";      // HELP: \n newline not working for some reason?
    document.getElementById('go').innerHTML = "RESET";
    reset();
};

// Fourth slide includes new text for instructions, a NEXT button, subText, and a RESET button
function state4() {
    document.getElementById('instructions').innerHTML = "Subtract your new number from the original number";
    document.getElementById("next").style.display = "block";
    // Clicking NEXT button will apply state5 function
    next.addEventListener('click', state5);
    document.getElementById('subText').innerHTML = "Ex: 14 - 5 = 9 \n click next to proceed";
    document.getElementById('go').innerHTML = "RESET";
    reset();
}

// set variable to hold some symbols
const symbols = ["&", "%", "$", "P"];
// set variable to hold random number selected from 0 to array length; 4
randomInt = Math.floor(Math.random()*symbols.length);
// use randomInt variable to remove from symbols array so we can set it to a variable for answer
let answer = symbols.splice(randomInt, 1);

// Fifth slide includes randomized text for instructions, a REVEAL button, subText and a RESET button
function state5() {
    // Use template literal to insert answer at 0: position and assign 1, 2 and 3 a random array index number
    document.getElementById('instructions').innerHTML = `0:     ${answer}\n 1:      ${symbols[0]}\n 2:      ${symbols[1]}\n 3:      ${symbols[2]}`;
    document.getElementById("next").style.display = "block";
    // Change text on next button from NEXT to REVEAL
    document.getElementById('next').innerHTML = "REVEAL"
    // Clicking REVEAL button will apply state6 function
    next.addEventListener('click', state6);
    document.getElementById('subText').innerHTML = "Find your new number \n Note the symbol beside the number";
    document.getElementById('go').innerHTML = "RESET";
    reset();
};

// Sixth slide includes answer from 5th slide, subText and a RESET button
function state6() {
    // Change text to just show answer
    document.getElementById('instructions').innerHTML = answer;
    // Hide the next button
    document.getElementById("next").style.display = "none";
    // Use template literal to show answer
    document.getElementById('subText').innerHTML = `Your symbol is: ${answer}`;
    document.getElementById('go').innerHTML = "RESET";
    reset();
};
