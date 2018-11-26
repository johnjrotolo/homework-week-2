'use strict';

// Enter your js code Here
var tempCardType;
var tempCardValue;

var playerCardOneType
var playerCardTwoType
var playerCardThreeType
var dealerCardOneType
var dealerCardTwoType
var dealerCardThreeType

var playerCardOneValue
var playerCardTwoValue
var playerCardThreeValue
var dealerCardOneValue
var dealerCardTwoValue
var dealerCardThreeValue

var playerCardOneDealValue
var playerCardTwoDealValue
var playerCardThreeDealValue
var dealerCardOneDealValue
var dealerCardTwoDealValue
var dealerCardThreeDealValue

var dealValue

var dealButton = document.getElementById("dealButton");

// firstName = "Jon";
// result = true;  //boolean
// console.log("Hello");   // week 2 code
// console.log("My friend is " + firstName);
// console.log(x*x);
// remove the comment identifier one at a time to test out the functionality
// document.body.innerHTML = "Hellllllllo";
// document.getElementById("jon").innerHTML = "I changed this";
// alert(document.getElementById("jon").innerHTML);
// alert(Math.floor(Math.random()*52)+1);  // when I want a number between 1 and 52


// add a listener to the deal button - execute function when 'clicked" event.
dealButton.addEventListener('click', function(e)
{
    dealCards();  // I define dealCards separately below
});


//  -------   Begin function rollDie()   ------------
function dealCards()
{
//////////////////////PLAYER CARD ONE///////////////////////////////////////////////

    // set the innerHTML of playerCardOne to the number generated
    var playerCardOne = document.getElementById('playerCardOne');

    // generate the random number between 1 and 52
    dealValue = Math.floor((Math.random() * 52) + 1);

    getCardInfo();

    playerCardOneType = tempCardType;
    playerCardOneValue = tempCardValue;
    playerCardOneDealValue = dealValue;

    playerCardOne.innerHTML = playerCardOneType;

/////////////////////DEALER CARD ONE////////////////////////////////////////////////

    // set the innerHTML of dealerCardOne to the number generated
    var dealerCardOne = document.getElementById('dealerCardOne');

    // generate the random number between 1 and 52
    dealValue = Math.floor((Math.random() * 52) + 1);

    while (dealValue == playerCardOneDealValue)
    {
      dealValue = Math.floor((Math.random() * 52) + 1);
    }

    getCardInfo();

    dealerCardOneType = tempCardType;
    dealerCardOneValue = tempCardValue;
    dealerCardOneDealValue = dealValue;

    dealerCardOne.innerHTML = dealerCardOneType;

//////////////////////PLAYER CARD TWO///////////////////////////////////////////////

    // set the innerHTML of playerCardTwo to the number generated
    var playerCardTwo = document.getElementById('playerCardTwo');

    // generate the random number between 1 and 52
    dealValue = Math.floor((Math.random() * 52) + 1);

    while (dealValue == dealerCardOneDealValue && playerCardOneDealValue)
    {
      dealValue = Math.floor((Math.random() * 52) + 1);
    }

    getCardInfo();

    playerCardTwoType = tempCardType;
    playerCardTwoValue = tempCardValue;
    playerCardTwoDealValue = dealValue;

    playerCardTwo.innerHTML = playerCardTwoType;

/////////////////////DEALER CARD TWO////////////////////////////////////////////////

    // set the innerHTML of dealerCardTwo to the number generated
    var dealerCardTwo = document.getElementById('dealerCardTwo');

    // generate the random number between 1 and 52
    dealValue = Math.floor((Math.random() * 52) + 1);

    while (dealValue == playerCardTwoDealValue && dealerCardOneDealValue && playerCardOneDealValue)
    {
      dealValue = Math.floor((Math.random() * 52) + 1);
    }

    getCardInfo();

    dealerCardTwoType = tempCardType;
    dealerCardTwoValue = tempCardValue;
    dealerCardTwoDealValue = dealValue;

    dealerCardTwo.innerHTML = dealerCardTwoType;

/////////////////////PLAYER CARD THREE//////////////////////////////////////////////

    // set the innerHTML of playerCardThree to the number generated
    var playerCardThree = document.getElementById('playerCardThree');

    // generate the random number between 1 and 52
    dealValue = Math.floor((Math.random() * 52) + 1);

    while (dealValue == dealerCardTwoDealValue && playerCardTwoDealValue && dealerCardOneDealValue && playerCardOneDealValue)
    {
      dealValue = Math.floor((Math.random() * 52) + 1);
    }

    getCardInfo();

    playerCardThreeType = tempCardType;
    playerCardThreeValue = tempCardValue;
    playerCardThreeDealValue = dealValue;

    playerCardThree.innerHTML = playerCardThreeType;

/////////////////////DEALER CARD THREE//////////////////////////////////////////////

    // set the innerHTML of dealerCardThree to the number generated
    var dealerCardThree = document.getElementById('dealerCardThree');

    // generate the random number between 1 and 52
    dealValue = Math.floor((Math.random() * 52) + 1);

    while (dealValue == playerCardThreeDealValue && dealerCardTwoDealValue && playerCardTwoDealValue && dealerCardOneDealValue && playerCardOneDealValue)
    {
      dealValue = Math.floor((Math.random() * 52) + 1);
    }

    getCardInfo();

    dealerCardThreeType = tempCardType;
    dealerCardThreeValue = tempCardValue;
    dealerCardThreeDealValue = dealValue;

    dealerCardThree.innerHTML = dealerCardThreeType;

}
////////////////////////////////GET CARD INFO FUNCTION//////////////////////////////
// set the type and value of a card
function getCardInfo()
{
  var cardType = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
  var cardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

  // generate the random number between 1 and 52
  // var dealValue = Math.floor((Math.random() * 52) + 1);

  // determine what the card type and value are
  if (dealValue == 1 || dealValue == 14 || dealValue == 27 || dealValue == 40)
  {
      tempCardType = cardType[0];
      tempCardValue = cardValue[0];
  }
  else if (dealValue == 2 || dealValue == 15 || dealValue == 28 || dealValue == 41)
  {
      tempCardType = cardType[1];
      tempCardValue = cardValue[1];
  }
  else if (dealValue == 3 || dealValue == 16 || dealValue == 29 || dealValue == 42)
  {
      tempCardType = cardType[2];
      tempCardValue = cardValue[2];
  }
  else if (dealValue == 4 || dealValue == 17 || dealValue == 30 || dealValue == 43)
  {
      tempCardType = cardType[3];
      tempCardValue = cardValue[3];
  }
  else if (dealValue == 5 || dealValue == 18 || dealValue == 31 || dealValue == 44)
  {
      tempCardType = cardType[4];
      tempCardValue = cardValue[4];
  }
  else if (dealValue == 6 || dealValue == 19 || dealValue == 32 || dealValue == 45)
  {
      tempCardType = cardType[5];
      tempCardValue = cardValue[5];
  }
  else if (dealValue == 7 || dealValue == 20 || dealValue == 33 || dealValue == 46)
  {
      tempCardType = cardType[6];
      tempCardValue = cardValue[6];
  }
  else if (dealValue == 8 || dealValue == 21 || dealValue == 34 || dealValue == 47)
  {
      tempCardType = cardType[7];
      tempCardValue = cardValue[7];
  }
  else if (dealValue == 9 || dealValue == 22 || dealValue == 35 || dealValue == 48)
  {
      tempCardType = cardType[8];
      tempCardValue = cardValue[8];
  }
  else if (dealValue == 10 || dealValue == 23 || dealValue == 36 || dealValue == 49)
  {
      tempCardType = cardType[9];
      tempCardValue = cardValue[9];
  }
  else if (dealValue == 11 || dealValue == 24 || dealValue == 37 || dealValue == 50)
  {
      tempCardType = cardType[10];
      tempCardValue = cardValue[10];
  }
  else if (dealValue == 12 || dealValue == 25 || dealValue == 38 || dealValue == 51)
  {
      tempCardType = cardType[11];
      tempCardValue = cardValue[11];
  }
  else
  {
      tempCardType = cardType[12];
      tempCardValue = cardValue[12];
  }
}

      // Retrieve the input data from the HTML
    //  var betAmount =  document.getElementById("betAmount").value;
    //  var numberGuessed =  document.getElementById("numberGuess").value;
    //  var bankroll = document.getElementById("bankrollValue");
    //  var bankrollNumber = Number( bankroll.innerHTML);  // Convert html text to a number

      // Calculate new bankroll by subtracting the amount bet
    //  bankrollNumber = bankrollNumber - Number(betAmount);

      // Check if the role matches the guess
    //  if (rollValue == numberGuessed)
      //{
        // Guess was correct.  Add 6 times the bet amount to calculate the new bankroll
        //bankroll.innerHTML = bankrollNumber + (6 * Number(betAmount));
        //document.getElementById("lastMessage").innerHTML = "You win!";
      //}
      //else
      //{
        // Guess was incorrect.  Simply update the bankroll on the screen.
      //  bankroll.innerHTML = bankrollNumber;
      //  document.getElementById("lastMessage").innerHTML = "You lose!";
    //  }

      //console.log ("Got through the code!");
