const boton = document.querySelector ("button")
const color = document.getElementById ("color")
function generarColorHexaDecimal() {
    let digitos= "0123456789ABCDEF";
    let colorHexaDecimal= "#";
    for (let i= 0; i < 6; i++) {
        let indiceAleatorio = Math.floor (Math.random () * 16);
        colorHexaDecimal+= digitos =[indiceAleatorio];
    }
    return colorHexaDecimal;

}
boton.addEventListener ("click", function (){
    let colorAleatorio= generarColorHexaDecimal ();
    color.textContent= colorAleatorio; 
    document.body.style.backgroundColor= colorAleatorio;
})