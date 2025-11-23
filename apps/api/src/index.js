// >> start point <<
import express from "express";
import { PORT } from "./config.js";
import routShorten from "./routes/shorten.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const currentDir = path.dirname(__filename);

const CLIENT_BUILD_PATH = path.resolve(currentDir, "../../client/dist");
const CLIENT_INDEX_FILE = path.join(CLIENT_BUILD_PATH, "index.html");

const app = express();

app.use(express.json());
app.use("/", express.static(CLIENT_BUILD_PATH));
app.use("", routShorten);

app.listen(PORT, () =>
  console.log(`Servidor completamente abierto en el puerto: ${PORT}`)
);
