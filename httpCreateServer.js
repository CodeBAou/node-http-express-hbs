/*
* EJEMPLO DEL PAQUETE HTTP
*/
const http = require('http');

/*
* request solicitud al servidor
* response respuesta del servidor
*/
http.createServer( ( request, response ) =>{
    
    //PRECESAMIETO DE LA SOLICITUD ( request )
    console.log(request);
    
    //PROCESAMIENTO DE LA RESPUESTA ( response )

    //Escribimos respuesta en el encabezado (head)
    
    //response.writeHead(404); //codigo de respuesta
    //response.writeHead( 200 , {'Content-Type': 'text/plain'} );//Incluir encabezado

    //Escribimos la respuesta (body)
    //response.write(' 404 | Page not found '); //escribe data - text  plain



    //Ejemplos respuesta
    const persona = {
        id: 1,
        nombre: 'Boris'
    };

    //TEXT/PLAIN - HEADERS
    //response.writeHead( 200 , {'Content-Type': 'text/plain'} );//Incluir encabezado
    //response.write( JSON.stringify(persona) ) ; //Se envia en texto plano

    //APPLICATION/JSON
    response.writeHead( 200 , {'Content-Type': 'application/json'} );//Incluir encabezado
    response.write( JSON.stringify(persona) ) ; //Se tratara como un objecto, aunque se le pasa como string


    //Finalizar
    response.end(); //decirle a node que se termino de escribir la respuesta

})
.listen( 8080 ); //poner en escucha en el puerto 8080