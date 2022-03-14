function scuberGreetingForFeet(distance) {
  let result
  if (distance <= 400) {
  result = 'This one is on me!';
  
} else if (distance >= 2000) {
  result = 'I will gladly take your thirty bucks.';

} else if (distance > 2500) {
  result = 'No can do.';
}
  return result 
}
scuberGreetingForFeet

function ternaryCheckCity(destination) {
  let NYC = destination?  (result = 'Ok, sounds good.') : (result = 'No go.');
return result
}
ternaryCheckCity

function switchOnCharmFromTip(tipAmount) {
 let tipAmount;
 switch (switchOnCharmFromTip) {
   case 'if the tip is generous':
     tipAmount = 'Thank you so much.';
    break;
   case 'if the tip is not as generous':
    tipAmount = 'Thank you.';
    break;
   case 'if anything else':
     tipAmount = 'Bye.';
 }
}