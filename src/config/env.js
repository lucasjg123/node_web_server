// Aca manejamos las env
import { config } from "dotenv";
import env from "env-var";

config(); // agarra las variables del .env y las agrega al process

export const envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  PUBLIC_PATH: env.get("PUBLIC_PATH").default("public").asString(),
};
