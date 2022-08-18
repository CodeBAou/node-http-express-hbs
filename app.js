//EXPRESS
//Express permite manejar las diferentes rutas de una peticion http que vienen en la peticion
//Es facil escalarlo 
const express = require('express')
const app = express()
const port = 8080;


/**  
*       SERVIR CONTENIDO ESTATICO   - Express
*
* Las rutas se configuran con carpetas que contienen un index.html 
* las rutas sera el path de la carpetas public=raiz-ULR/pacientes=subcarpeta
* Hacemos publica para servir su index.html
*/


app.use( //ESTO TIENE PRIORIDAD SOBRE LAS RUTAS (RUTA HTTP = RAIZ )
    express.static('public') //toma la carpeta public, path de la carpeta que queremos hacer publica
);



/** otra ruta estatica
* public - url raiz (http://localhost:8080/)
* ruta url segun carpetas dentro de public, ejemplo:
*       public/pacientes/pacientes.html  - url = http://localhost:8080/pacientes/
*       los ficheros dentro de las carpetas publicas debe tener el nombre index.html para que node lo sirva
*/

/*
app.use( //ESTO TIENE PRIORIDAD SOBRE LAS RUTAS (RUTA HTTP = RAIZ )
    express.static('public\\pacientes') //toma la carpeta public, path de la carpeta que queremos hacer publica
);
*/

//Servir web roadtry 
app.use( 
    express.static('public\\RoadTryweb')
);



//PAGINAS DE LA WEB - roadTryweb

//Mandamos pagina estatica generic sin la extension .html

app.get( '/RoadTryweb/generic' ,  (req, res) => {
    res.sendFile(__dirname + '/public/RoadTryweb/generic.html')  //sendFile - mandar fichero - absolute path
});

//Mandamos pagina estatica elements sin la extension .html
app.get( '/RoadTryweb/elements' ,  (req, res) => {
    res.sendFile(__dirname + '/public/RoadTryweb/elements.html')  //sendFile - mandar fichero - absolute path
});

//Mandamos pagina estatica index sin la extension .html
app.get( '/RoadTryweb/index' ,  (req, res) => {
    res.sendFile(__dirname + '/public/RoadTryweb/index.html')  //sendFile - mandar fichero - absolute path
});




//Se renderiza
app.get( '/' , (req, res) => {
    res.sendFile(__dirname +'/public/index.html');
});

//respuesta para la ruta /hola-mundo - se devuelve un texto
app.get( '/hola-mundo' , (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
});

//Mandamos pagina estatica para el error 404
app.get( '*' ,  (req, res) => { 
    res.sendFile(__dirname + '/public/404.html')  //sendFile - mandar fichero - absolute path
});

app.listen( port, () => {
    console.log(`Example app listening on port ${port}`)
});

