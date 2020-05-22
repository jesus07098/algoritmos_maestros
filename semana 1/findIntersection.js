const stringArray = ["8,3,5,6", "1,3,5,6"];
function intersectElementString() {
    const [firstElement, secondElement] = stringArray;
    let respuesta = firstElement.split(',').filter(element => secondElement.includes(element)).toString();
    return respuesta=="" ?  'false' : respuesta;
}
document.write(intersectElementString(stringArray));




