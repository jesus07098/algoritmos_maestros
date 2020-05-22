const lado1 = document.querySelector("#valor1");
const lado2 = document.querySelector("#valor2");
const lado3 = document.querySelector("#valor3");
const btnVerificarTriangulo = document.querySelector("#verificarTriangulo");

btnVerificarTriangulo.addEventListener("click", () => {
  /*Lados del triangulo para verificar su tipo*/
  let val1 = lado1.value;
  let val2 = lado2.value;
  let val3 = lado3.value;
  tipoTriangulo(val1, val2, val3);
});

function tipoTriangulo(valor1, valor2, valor3) {
  
  //SI LOS VALORES DE LOS INPUTS ESTAN VACIO
  if (valor1 == "" || valor2 == "" || valor3 == "") {
    alert( "Digite todos los valores especificados para verificar el tipo de triangulo...");
  }
  // SI EL TRIANGULO TIENE TODOS SUS LADOS IGUALES ES EQUILATERO
  else if (valor1 == valor2 && valor1 == valor3) {
    alert("El tipo de triangulo es equilátero ");
  }
  // SI EL TRIANGULO TIENE TODOS SUS LADOS DIFERENTES ES ESCALENO
  else if (valor1 != valor2 && valor1 != valor3 && valor2 != valor3) {
    alert("El tipo de triangulo es Escaleno ");
  }
  //SI EL TRIANGULO TIENE DOS LADOS IGUALES ES ISOSCELES
  else{
    alert("El tipo de triangulo es Isósceles ");
  }
}
