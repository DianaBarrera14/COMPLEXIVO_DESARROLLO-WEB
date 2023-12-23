const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const vehiculoRouter = require("./routes/vehiculoRoutes");
app.use(vehiculoRouter);
const port = 8081;
app
  .listen(port, () => console.log(`Servidor levantado en http://localhost:${port}`))
  .on("error", (error) => console.error(error));