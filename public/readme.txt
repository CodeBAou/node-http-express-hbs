En esta carpeta /public se sirven las paginas de forma statica mediante express
utilizando las estructuras de carpeta como url

EJEMPLO CON EXPRESS

Se hace publica la carpeta sera igual a la url 

sirviendo una pagina estatica
app.get( '/RoadTryweb/generic' ,  (req, res) => {
    res.sendFile(__dirname + '/public/RoadTryweb/generic.html')  //sendFile - mandar fichero - absolute path
});