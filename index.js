function scuberGreetingForFeet(feet){
if (feet <= 400){
  return 'This one is on me!';
  }
  else if(feet>=2000){

    if (feet >=2500){
      return 'No can do.';
    }
    return'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(destination){
  return (destination==='NYC'?'Ok, sounds good.':"No go.")
}

function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return "Bye.";
   }
  }