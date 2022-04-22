async function obtenerDatos(){
const response = await fetch("http://127.0.0.1:5500/json.json");
const json= await response.json();


console.log(json)
console.log(json.nombre)
json.nacionalidad.forEach((elemento) => {
    console.log(elemento.pais)
});
//de texto jason JSON.parse
// console.log(JSON.parse(json))
// console.log(JSON.stringify(json))
}

obtenerDatos();