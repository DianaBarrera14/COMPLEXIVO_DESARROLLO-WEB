document.addEventListener("DOMContentLoaded", function() {
    const addForm = document.getElementById("addForm");
    const tableBody = document.getElementById("vehiculosTableBody");
    addForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const marca = document.getElementById("marcaInput").value;
      const modelo = document.getElementById("modeloInput").value;
      const color = document.getElementById("colorInput").value;
      const placa = document.getElementById("placaInput").value;
  
      fetch("http://localhost:8081/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          marca,
          modelo,
          color,
          placa,
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log("Vehículo agregado:", data);
          loadAndDisplayData();
        })
        .catch(error => console.error("Error al agregar vehículo:", error));
    });
  
    function loadAndDisplayData() {
      fetch("http://localhost:8081/vehiculos")
        .then(response => response.json())
        .then(data => {
          tableBody.innerHTML = "";
  
          data.forEach(vehiculo => {
            const row = createTableRow(vehiculo);
            tableBody.appendChild(row);
          });
        })
        .catch(error => console.error("Error al obtener datos:", error));
    }
  
    function createTableRow(vehiculo) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${vehiculo.marca}</td>
        <td>${vehiculo.modelo}</td>
        <td>${vehiculo.color}</td>
        <td>${vehiculo.placa}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editVehicle('${vehiculo.placa}')">Editar</button>
          <button class="btn btn-danger btn-sm" onclick="deleteVehicle('${vehiculo.placa}')">Eliminar</button>
        </td>
      `;
      return row;
    }
  
    loadAndDisplayData();

    window.editVehicle = function(placa) {
      const marca = prompt("Ingrese la nueva marca:");
      const modelo = prompt("Ingrese el nuevo modelo:");
      const color = prompt("Ingrese el nuevo color:");
  
      fetch(`http://localhost:8081/${placa}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          marca,
          modelo,
          color,
          placa,
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log("Datos del vehículo actualizados:", data);
          loadAndDisplayData();
        })
        .catch(error => console.error("Error al actualizar datos del vehículo:", error));
    };
  
    window.deleteVehicle = function(placa) {
      if (confirm("¿Está seguro de que desea eliminar este vehículo?")) {
        fetch(`http://localhost:8081/${placa}`, {
          method: "DELETE",
        })
          .then(response => {
            if (response.ok) {
              console.log("Vehículo eliminado exitosamente");
              loadAndDisplayData();
            } else {
              console.error("Error al eliminar vehículo");
            }
          })
          .catch(error => console.error("Error al eliminar vehículo:", error));
      }
    };
  });
  