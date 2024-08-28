document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const empleado = urlParams.get("empleado");
    const sucursal = urlParams.get("sucursal"); // Asegúrate de obtener la sucursal desde la URL
    const empleadoNombre = document.getElementById("empleadoNombre");
    empleadoNombre.textContent = empleado;

    if (!sucursal) {
        console.error("Sucursal no definida. Verifica que la sucursal se esté pasando correctamente en la URL.");
        return;
    }

    const evaluacionForm = document.getElementById("evaluacionForm");
    evaluacionForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(evaluacionForm);
        const evaluacionData = {};

        formData.forEach((value, key) => {
            evaluacionData[key] = value;
        });

        // Guardar los datos en Firebase bajo la sucursal correspondiente
        firebase.database().ref(`evaluaciones/${sucursal}/${empleado}`).push(evaluacionData)
        .then(() => {
            alert("Evaluación guardada correctamente.");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            console.error("Error al guardar la evaluación: ", error);
            alert("Hubo un error al guardar la evaluación. Por favor, inténtelo de nuevo.");
        });
    });
});
