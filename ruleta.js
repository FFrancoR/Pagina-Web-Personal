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
    const lista = document.getElementById("cuadro_del_api")
    lista.innerHTML = "<div class='cuadroapi'><p>"+"Nombre de la pelicula: "+pelicula.title+"<br></p><p>"+"Sinopsis: "+pelicula.overview+"</p><br><p>"+"Puntuacion segun IMDB: "+pelicula.imdb_rating+"</p><br></div>"
}