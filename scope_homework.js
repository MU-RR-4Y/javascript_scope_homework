// Episode 1

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// murderer is Miss Scarlett


// Episode 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// murder is 'Professor Plum' as the changemurder function will not work due to the initial declaration being a const - 'const murderer = 'Professor Plum';'


//Episode 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);


// //firstVerdict = Mrs Peacock - murderer variable within the declareMurderer function replaces professor plum with Mrs Peacock
//secondVerdict = Professor Plum - the initial murders declaration is still valid as the 'let murderer = 'Mrs. Peacock';' declation changing the variable occurs within the function and is out of scope


//Episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);


// suspectThree within console.log(suspects) is 'Colonel Mustard' as the declaration within the decalreAllSuspects function reassigns "Colonel Mustard" to the suspectThree variable
// suspectThree as decalred via console.log(`Suspect three is ${suspectThree}.`); is Mrs Peacock as the change to 'colonel Mustard only occurs within the function and the function is ot refeerenced at all here


//Episode 5

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

// weapon is the revolver - scenario is a const but the vlaue for the weapon key may be changed. changeWeapon function reassigns the weapon as revolver


//Epiode 6

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


// murder is Mrs White - initial declaration is a 'let' variable so can be updated. the changeMurder function immediately reassigns murderer as 'Mr.Green' however the plottwist
// function updating the murder is called within the changeMurder function and this updates the name to Mrs White.

//Episode 7

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


// murder is Mr.Green because both the plotTwist and unexpectedOutcome functions fail to run because murderer has already been declared as Professor Plum and then updated to Mr'Green
// we cannot then declare the same variable via 'let murderer = 'Colonel Mustard';' This causes the rest of the plotTwist function to not execute, which means that unexpectedOutcome does not execute

// //Episode 8

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);

  // weapon is the candlestick - while the objects are declared as const the values may be updated. plotTwist function updates murderer to 'Colonel Mustard' as 'Dining Room' is the scenario.room
  // the weapon is then updated via unexpectedOutcome as Colonel Mustard was made the murder via the prior block in the plotTwist function.

  //Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//murder is Professor Plum as variable murder is already declared so when the if statement tries to declare murderer again via 'let murderer = 'Mrs. Peacock';' the code does not work and will not execute