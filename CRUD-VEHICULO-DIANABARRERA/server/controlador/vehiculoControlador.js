const vehiculo = require("../modelo/vehiculoModel");

module.exports = {
    getAllVehiculos: (req, res) => {
        console.log("Consulta realizada");
        vehiculo.queryAllVehicles().then((result) => {

            res.status(200).send(result);
        });
    },
    createVehiculo: (req, res) => {
        console.log("Creando vehículo");
        const values = [...Object.values(req.body)];
        vehiculo.queryAddVehicle(values).then((result) => {
            res.status(200).send(result);
        });
    },
    deleteVehiculo: (req, res) => {
        console.log("Eliminando vehículo");
        const placa = req.params.placa;
        vehiculo.queryDeleteVehicle(placa).then((result) => {
            res.status(200).send(result);
        });
    },
    updateVehiculo: (req, res) => {
        console.log("Actualizando vehículo");
        const placa = req.params.placa;
        const data = req.body;
        vehiculo.queryUpdateVehicle(data, placa).then((result) => {
            res.status(200).send(result);
        });
    },
};