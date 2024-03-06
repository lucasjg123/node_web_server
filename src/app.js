import { envs } from "./config/env.js";
import { startServer } from "./server/server.js";

const main = () => {
  startServer({
    // le mando a strartServer un obj con las var de entorno importadas de env.js
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
  });
};
// Funcion anonima autoconvoda asincronica
(async () => {
  main();
})();
