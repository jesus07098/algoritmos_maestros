let unidad1= prompt("Digite la unidad a convertir: ");
let cantidad= Number(prompt("Digite lo que desea convertir: "));
let unidad2= prompt("Digite la unidad a la que desea convertir");



switch(unidad1){

case "metro":
    if(unidad2=="kilometro"){
        resultado=cantidad/1000;
        alert(`${cantidad} metro/s son ${resultado} kilometros`);
    }
    else if(unidad2=="centimetro"){
        resultado=cantidad*100;
        alert(`${cantidad} metro/s son ${resultado} centrimetros`);
    }
    else if(unidad2=="milimetro"){
        resultado=cantidad*1000;
        alert(`${cantidad} metro/s son ${resultado} milimetros`);
    }
    break;

    default:
        alert("Unidades mal digitadas...");

}