const express = require("express");
const router = express.Router();
const vehiculoControlador = require("../controlador/vehiculoControlador");

router.get("/vehiculos", vehiculoControlador.getAllVehiculos);
router.post("/add", vehiculoControlador.createVehiculo);
router.put("/:placa", vehiculoControlador.updateVehiculo);
router.delete("/:placa", vehiculoControlador.deleteVehiculo);

module.exports = router;