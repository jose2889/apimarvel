const privatekey='695ac5280b318ea7a48f298abeb75f2018def628',
    publickey = 'b16e76f6fcddebf068d27fdba8a5aa06',
    contenedor = document.getElementById('contenedor');

const conexion = () => {
    const ts = 1,
        hash = '0bbee75c741a95598aea6307dcd21068',
        URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publickey}&hash=${hash}`;
        fetch(URL)
            .then(response => response.json())
            .then(Response => {
                Response.data.results.forEach(e => {
                    verhero(e);                    
                });
            });
}

const verhero = e => {
    const imagen = `${e.thumbnail.path}/portrait_uncanny.${e.thumbnail.extension}`;
    const hero = `
    <div>
        <h3>${e.name}</h3>
        <img src="${imagen}">
        <p>${e.description}</p>
    </div>
    `;
    contenedor.insertAdjacentHTML('beforeEnd',hero);
}; 
conexion();
