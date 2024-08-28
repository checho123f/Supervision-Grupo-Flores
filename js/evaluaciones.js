document.addEventListener("DOMContentLoaded", function() {
    const sucursalSelect = document.getElementById("sucursal");
    const empleadoSelect = document.getElementById("empleado");
    const evaluarBtn = document.getElementById("btnEvaluar");

    // Simulación de empleados por sucursal (esto debería venir de una base de datos en una implementación real)
    const empleadosPorSucursal = {
        sucursal1: ["Juan Pérez", "Ana Gómez", "Carlos Ruiz"],
        sucursal2: ["Laura García", "Pedro Morales", "María López"],
        sucursal3: ["Fernando Díaz", "Luisa Fernández", "Jorge Martínez"],
        // Añade más empleados y sucursales según sea necesario
    };

    // Maneja el cambio de sucursal para actualizar el select de empleados
    sucursalSelect.addEventListener("change", function() {
        const selectedSucursal = sucursalSelect.value;
        empleadoSelect.innerHTML = ""; // Limpia las opciones actuales

        // Añade los empleados correspondientes a la sucursal seleccionada
        empleadosPorSucursal[selectedSucursal].forEach(function(empleado) {
            const option = document.createElement("option");
            option.value = empleado;
            option.textContent = empleado;
            empleadoSelect.appendChild(option);
        });
    });

    // Acción cuando se hace clic en "Evaluar Empleado"
    evaluarBtn.addEventListener("click", function() {
        const selectedEmpleado = empleadoSelect.value;
        if (selectedEmpleado) {
            window.location.href = `evaluacion_formulario.html?empleado=${selectedEmpleado}`;
        } else {
            alert("Por favor, seleccione un empleado.");
        }
    });

    // Disparar el cambio para inicializar empleados de la primera sucursal por defecto
    sucursalSelect.dispatchEvent(new Event("change"));
});
