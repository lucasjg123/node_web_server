import express from "express";
import path from "path";

export const startServer = (options) => {
  // desestructuro options en "port"  y "public_path"
  const { port, public_path = "public" } = options;

  const app = express(); // ejecutamos express dentro de la var app

  // mediante .use usamos los middlewares de express
  app.use(express.static(public_path)); // contenido estatico que ponemos disponible para q se use

  // .get es cuando el cliente nos solicite info mediante get del http
  // ("*") es si nos pide cualquier cosa pero podria ser ("/respajarito")
  // Son endpoints
  // req: peticion del cliente - res: respuesta del sv
  app.get("*", (req, res) => {
    const indexPath = path.join(
      __dirname + `../../../${public_path}/index.html`
    ); // directorio del index.html
    res.sendFile(indexPath); // La respuesta del sv es enviar el direc del index
  });

  // En .listen() le indicamos el puerto que debe escuchar y una callback que nos confirme la escucha
  app.listen(port, () => {
    console.log(`Escuchando el puerto: ${port}`);
  });
  // ahora si en el nav vamos a: localhost:3000 nos mostrara el index.html
};
