let numberTimes = Number(prompt("Type the number of times to roll the dice: "));
let acumOne = 0,
  acumSix = 0,
  numberAleat;
for (i = 1; i <= numberTimes; i++) {
  console.log(
    `Attemp: ${i} : ${(numberAleat =
      Math.floor(Math.random() * (6 - 1 + 1)) + 1)}`
  );
  numberAleat === 6 ? acumSix++ : numberAleat === 1 ? acumOne++ : "";
}
let mensaje="";
console.log(`1: ${acumOne} times`, `\n6: ${acumSix} times`);
acumOne > acumSix
  ? mensaje="El 1 sale mas que el 6"
  : acumSix == acumOne
  ? mensaje="El 6 y el 1 salen iguales"
  : mensaje="El 6 sale mas que el 1";
console.log(mensaje);


