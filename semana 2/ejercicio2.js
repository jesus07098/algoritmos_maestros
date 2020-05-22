const btnCalc = document.querySelector("#btnCalc");
const date = new Date();

btnCalc.addEventListener("click", () => {
  const month = document.querySelector("#month").value;
  const year = document.querySelector("#year").value;
  const day = document.querySelector("#day").value;
  verifyAge(month, year, day);
});

function verifyAge(month, year, day) {
  date.getMonth() + 1 < month || (month == date.getMonth() + 1 && date.getDate() < day) ? alert(`Su edad es  ${(date.getFullYear() - year) - 1}`) : alert(`Su edad es  ${date.getFullYear() - year}`);
}