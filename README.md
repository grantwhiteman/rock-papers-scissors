# RPS Challenge
To clone the project:
```
git clone git@github.com:grantwhiteman/rock-papers-scissors-challenge.git
```
Install dependences:
```
npm install
```
To start the project:
```
npm start
```
To run the Jasmine tests:
```
npm test
```
To run the Cypress tests:
```
npx cypress open
```

## Learnings
The project was to make a rock paper scissors game using express and ejs in node JS. I wrote an initial jasmine and cypress test to drive the project. I then made the source file to pass the jasmine test and added more jasmine tests. Then I added the index.js, views and routers and passed the first jasmine test and added more tests.

The longest blocker I had was trying to work out why the view '/play' wasnt being found, the view should have just been 'play'

The experience in modularising routers was very useful, and I was able to do this without any problem. I loaded the index with a get request, then posted the name to the second page where I stored the name in app.locals which was useful for reloading the same page at the end of the game with just a get request. I used the redirect method to modularise this router further.

The final page had a post request which came from my first time using a drop down menu, this made the most sense as it was the easiest way to send the data across. I would have liked separate buttons for each weapon, but I was unsure how to do this.

I think the code is quite well optimised, my function could be cleaner but it does the job well and would be easy to change and shouldn't be too hard for someone else to understand, even though it isn't as immediate obvious as saying 
```
if (weapon === 'rock' && computerWeapon === 'paper') ...
```

Instructions
-------

* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or trainee, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by 9:30am Monday morning

Task
----

The DFA team ( **DFAT** ) have asked you to provide a game for them. The daily grind is pretty tough and they need time to have a little fun.

As usual please start by

* Forking this repo
* TEST driving development of your app

Your task is to provide a _Rock, Paper, Scissors_ game for them so they can play on the web with the following user stories:

### Acceptance Criteria
```
As a DFAT member
So that I can see my name
I would like to register my name before playing an online game

As a DFAT member
So that I can enjoy myself away from the daily grind
I would like to be able to play rock/paper/scissors
```

Hints on functionality

- the DFAT member should be able to enter their name before the game
- the DFAT member will be presented the choices (rock, paper and scissors)
- the DFAT member can choose one option
- the game will choose a random option
- a winner will be declared

## Basic Rules

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock

In code review we'll be hoping to see:

* All tests passing
* High test coverage
* The code is elegant: every class has a clear responsibility, methods are short etc.

### Extended Acceptance Criteria

#### Multiplayer

Change the game so that two DFAT members can play against each other ( _yes there are two of them_ ).

#### Rock, Paper, Scissors, Spock, Lizard

Use the _special_ rules ( _you can find them here http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock_ )
