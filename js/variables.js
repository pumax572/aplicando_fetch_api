//--------------------------------------------------------------------------
//Uso de la API
//--------------------------------------------------------------------------
//Seleccionamos los elementos a utilizar
const input = document.querySelector("input");
const button = document.querySelector("button");
const pokemonContainer = document.querySelector(".pokemon-container");

button.addEventListener("click", (e)=>{
    e.preventDefault(); //Impide que se recargue la página
    traerPokemon (input.value); //Treaer el pokemon con el valor actual
})//Dandole funcionalidad al botón

function traerPokemon(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`) //Buscamos el sitio de la API de donde tenemos la info con fetch
  .then(res => res.json()) //Cacheamos la respuesta en un JSON
  .then(data => {
    crearPokemon(data);
  }) //
}

//Creamos una funcion para pasar los datos.

function crearPokemon (pokemon) {
    const img = document.createElement('img'); //Creamos el elemento que contiene la imagen
    img.src = pokemon.sprites.front_default; //Propiedad del array

    const h3 = document.createElement('h3'); //Creamos el nombre
    h3.textContent = pokemon.name //También es una propiedad del array

    const div = document.createElement('div'); //Creamos un div para poner todas las propiedades que obtenemos de la api
    div.appendChild(img);
    div.appendChild(h3);

    pokemonContainer.appendChild(div); //Añadimos el div al pokemonContainer

}