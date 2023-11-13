import peliculas from './peliculas.js'



peliculas.forEach(pelicula => {
    let img = `<img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}"></img>`;
    let genIds = pelicula.genre_ids;
    genIds.forEach(number => {
        if (document.querySelector('#genero-'+number)) {
            document.querySelector('#genero-'+number).innerHTML += `<figure>${img}<figcaption>${pelicula.title}</figcaption></figure>`;
        }
    });
});


