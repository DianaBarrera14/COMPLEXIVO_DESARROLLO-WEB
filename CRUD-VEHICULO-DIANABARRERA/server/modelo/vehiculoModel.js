const { pool } = require("../db/conexion");
module.exports = {
  queryAllVehicles: () => {
    console.log("consulta realizada exitosamente");
    return pool
      .promise()
      .query("SELECT * FROM vehiculo")
      .then(([results]) => results)
      .catch((err) => console.log(err));
  },
  queryAddVehicle:(values) => {
    console.log("vehículo añadido");
    return pool
      .promise()
      .query("INSERT INTO vehiculo(marca, modelo, color, placa) VALUES (?)", [values])
      .then(([results]) => results)
      .catch((err) => console.log(err));
  },
  queryDeleteVehicle:(placa) => {
    console.log("vehículo eliminado");
    return pool
      .promise()
      .query("DELETE FROM vehiculo WHERE placa = ?", [placa])
      .then(([results]) => results)
      .catch((err) => console.log(err));
  },
  queryUpdateVehicle:(data, placa) => {
    console.log("vehículo actualizado");
    return pool
      .promise()
      .query("UPDATE vehiculo SET ? WHERE placa = ?", [data, placa])
      .then(([results]) => results)
      .catch((err) => console.log(err));
  },
};