var score = 0;
//var q1;
//var q2;
//var q3;
//var q4;
//var q5;
alert("Are you ready for this quiz?");
var q1 = prompt('How many legs does a three legged dog have?');
if (q1 === "3") {
   score += score +1;
  alert("Noice woirk! You have " + score + " points");
} else {
  alert("What you talkin' 'bout Willis? The answer is 3. You still have " + score + " points");
}

var q2 = prompt("What bees make milk?");
if (q2.toUpperCase() === "BOOBIES") {
   score += 1;
  alert("Noice woirk! You have " + score + " points");
} else {
  alert("What you talkin' 'bout Willis? The answer is Boobies. You still have " + score + " points");
}

var q3 = prompt("If you like peas and you like cheese, you'll love_____?");
if (q3.toUpperCase() === "CHEESY PEAS") {
   score += 1;
  alert("Noice woirk! You have " + score + " points");
} else {
  alert("What you talkin' 'bout Willis? The answer is Cheesy Peas. You still have " + score + " points");
}

var q4 = prompt("What do you call an angry Egyptian taxi driver?");
if (q4.toUpperCase() === "TOOTANDCOMMUTE") {
   score += 1;
  alert("Noice woirk! You have " + score + " points");
} else {
  alert("What you talkin' 'bout Willis? The answer is Tootandcommute. You still have " + score + " points");
}

var q5 = prompt("Did you enjoy the quiz?");
  if (q5.toUpperCase() === "YES" || "Y"){
   score += 1;
  alert("Noice woirk brown nose! You have " + score + " points");
} else {
  alert("What you talkin' 'bout Willis? The answer is Yes! You still have " + score + " points");
}

if (score === 5) {
 document.write("<h2>Wow! You're so clever! " + score + " points gets you a gold star!</h2>");
} else if  (score === 3 || 4) {
  document.write("<h2>You could do better. Still, you get a silver star for " + score + " points. Well done</h2>");
} else if (score ===  1 || 2) {
  document.write("<h2>Are you serious about this? Just a bronze star for " + score + " points.</h2>");
} else if (score === 0) {
  document.write("<h2>Slacker!!! You should have stayed in bed today.</h2>");
}
