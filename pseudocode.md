# Mind Reader Pseudocode
## Functionality
**Main Goal**: Have a single-page application with buttons that can reset state at any time and show certain content, as well as a button that navigates through other slides showing other content. At the end there should be a number with symbols next to it that randomize every time state changes. The symbol that is selected will be shown on the last slide. Essentially need 6 different states.

### Things to Keep in Mind
- When user presses RESET it should go back to slide 1
- When user presses NEXT, it should go to the next slide in lineup up until slide 5
- On page 5, REVEAL should go to slide 6
- RESET should be available on all slides but slide 1
- Last slide has randomized elements
- Each slide has different text

## Objects
1. Page
    - Contains instructions, buttons or answer in case of slide 6
2. Button
    - When pressed should change state
    - RESET button on slides 2-6
    - NEXT button on slides 2-4
    - GO button on slide 1
    - REVEAL button on slide 5
3. Answer
    - Should change each time state changes
    - Only on slide 5 and slide 6
    - Symbol shown on slide 6 should match the one assigned to 0
    - BONUS: Could scroll through more than the 4 numbers
 

## Define Objects and Functions
Button
- goButton ---> takes user to state 2, hides state 1
- nextButton() ---> takes user from state 2 to state 3, state 3 to state 4 and state 4 to state 5
- resetButton ---> when clicked should take user to state 1
- revealButton ---> takes user from state 5 to state 6

Page
- text ---> Holds string for header, changes depending on state
- subText ---> Holds string for subtext under button, changes depending on state

Answer
- symbols ---> array of symbols
- randomInt ---> random integer between 0 and symbols length to be assigned to answer
- answer ---> symbol assigned to symbols[randInt]

### States
State 1: 
- text ---> Text should say "I can read your mind"
- goButton ---> GO button should be displayed

State 2:
- text ---> Text should say "Pick a number from 01 - 99"
- nextButton ---> NEXT button should be displayed
- subText ---> subText should say "when you have your number click next"
- resetButton ---> RESET button should be displayed

State 3:
- text ---> Text should say "Add both digits together to get a new number"
- nextButton ---> NEXT button should be displayed
- subText ---> subText should say "Ex: 14 is 1 + 4 = 5\n click next to proceed"
- resetButton ---> RESET button should be displayed

State 4:
- text ---> Text should say "Subtract your new number from the original number"
- nextButton ---> NEXT button should be displayed
- subText ---> subText should say "Ex: 14 - 5 = 9\n click next to proceed"
- resetButton ---> RESET button should be displayed

State 5:
- symbols ---> show list of numbers 0-3, each assigned to a random symbol from symbols array, 0 should be assigned to answer
- revealButton ---> REVEAL button should be displayed
- subText ---> subText should say "Ex: Find your new number\n Note the symbol beside the number"
- resetButton ---> RESET button should be displayed

State 6:
- answer ---> shows symbol assigned to answer
- subText ---> subText should say "Your symbol is: \n" answer

## Overview
```
START

INIT goButton()
FUNCTION state1()
    Pass In: nothing
    change text, hide NEXT button, allow user to click GO
    Pass Out: text, goButton()
CALL: state1()

INIT reset()

FUNCTION state2()
    Pass In: goButton('click')
    change text, unhide NEXT button, add subText change text on GO to RESET
    Pass Out: text, goButton('NEXT'), subText, reset()

FUNCTION state3()

FUNCTION state4()

INIT symbols[]
INIT randomInt
INIT answer
FUNCTION state5(answer)
    Pass In: answer, goButton('click')
    change text to include symbols array index and answer at 0, change NEXT to REVEAL, new subText, reset()
    Pass Out: answer, text, goButton('REVEAL'), subText, reset()

FUNCTION state6(answer)
    Pass In: answer, goButton('click')
    DISPLAY answer, hide nextButton, change subText, reset()
    Pass Out: answer, subtext, reset()

END
```