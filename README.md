# Styling Rock, Paper, Scissors

A React practice project from Codecademy's Full-Stack Engineer path. The game already worked when I got it, but it had no styling. The point was to style it three different ways and see how each one feels.

**Live site:** https://ktforge.github.io/styling-rock-paper-scissors/

## What it does

You pick rock, paper, or scissors by clicking one of the three buttons.
The computer picks one at random.
Both picks show up with their emojis, then the result: You win!, You lose!, or Tie!
Play again clears everything so you can go another round.

## How it's styled

The title uses an inline style right on the h1.
The choice rows, emojis, choice text, and result message use style objects I defined above the component and reused.
The page container, button row, results column, and buttons use classes from Game.module.css.

## How to run it

1. Install Node.js if you don't have it.
2. In this folder, run npm install.
3. Run npm run dev and open the link it prints.

## What I learned

Inline styles need double braces, one pair to switch into JavaScript and one for the object. When I passed a style object variable it was just single braces, since the variable already is the object.

Style names have to be camelCase, so margin-top becomes marginTop. Numbers like 48 get px added automatically.

CSS modules use className, not style. The class names get renamed behind the scenes (something like _container_kfqz4_1), so a .button class in another file can't clash with this one.

At one point the whole page went white. I had typed sytles.choices instead of styles.choices, and since sytles doesn't exist React crashed. Fixing the spelling brought it back.

The white choice text was invisible at first because the page background was still white. It showed up once I put the container class on the outer div and got the black background.

Built by DeVante Bush
