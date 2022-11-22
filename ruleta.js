const url = "https://api.reelgood.com/v3.0/content/random?region=us&sources=netflix"

function llamadaApi(){
    fetch(url)
    .then((resultado) => {
        return resultado.json()
    })
    .then((res) => {
        agregarALista(res)
    })
    .catch(e=> {
        console.log(e)
    })
}

function agregarALista(pelicula) {
    const lista = document.getElementById("listaPeliculas")
    lista.innerHTML = "<div><p>"+pelicula.name+"</p></div>"
}