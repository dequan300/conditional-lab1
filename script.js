let name = "dequan";
let age = "25";
let birthdate = "march";
let detroitGc = true;
let lifeEvents = ["I learned to swim", "I learned to code", "I learned to box", "I learned to ride a bike"]

if (detroitGc) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan.
        I am currently ${age} years old and my birthday is on ${birthdate}`);
} else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan.
        I am currently ${age} years old and my birthday is on ${birthdate}`);

}

for (let i = 0; i <= lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0;
let randomNumber = Math.floor(Math.random() * 11)
while (randomNumber < 12) {
    if (randomNumber !== 5) {

        console.log(`${randomNumber}!==5`)
        counter++;
    } else {

        console.log(`5==5 it took${counter}`)
        counter++;
    }
    break;
}