let matrix = [], temp, dim = 5, impairsSum = 0, cousinsSum = 0, cousins = [], acum = 0;

for (let i = 0; i < dim; i++) {
  temp = [];
  for (let j = 0; j < dim; j++) {
    temp[j] = Number(
      prompt(`Type numbers until the 5x5 matrix is filled [${i}][${j}]`));

    for (let k = 1; k <= temp[j]; k++) {
      if (temp[j] % k == 0)
        acum++;
    }
    if (acum == 2) {
      cousins.push(temp[j]);
      cousinsSum += temp[j];
    }
    acum = 0;
    document.write(temp[j] + " ");
    if (temp[j] % 2 != 0) impairsSum += temp[j];
  }
  matrix.push(temp);
  document.write("<br>");
}
document.write(`Impairs sum numbers: ${impairsSum} , Cousins numbers: ${cousins} - sum Cousins: ${cousinsSum}`);
