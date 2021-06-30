//Using arithmetic operators
var subtotal = (13 + 1) + 5; //Subtotal is 70//
var shiping = 0.5 + (13 + 1); //Shipping is 7//

var total = subtotal + shiping; //Total is 77//

var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shiping;

var elTotal = document.getElementById('total');
elTotal.textContent = total

// Using string operators//
var firstName = 'Ivy';
var lastName = 'Stone';
var fullName = firstName + lastName;

//mixing numbers with string//
var cost1 = '7';
var cost2 = '9';
var total = cost1 + cost2;

//Another example//
var number = 12;
var street = 'Ivy Road';
var add = number + street;

//Using string operators//
var greeting = 'Howdy';
var name1 = 'Molly';

var welcomeMessage = greeting + name1 + '!';

var el = document.getElementById('gretting');
el.textContent = welcomeMessage;