document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const empleado = urlParams.get("empleado");
    const empleadoNombre = document.getElementById("empleadoNombre");
    empleadoNombre.textContent = empleado;

    const evaluacionForm = document.getElementById("evaluacionForm");
    evaluacionForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(evaluacionForm);
        const evaluacionData = {};

        // Crear un objeto con los datos del formulario
        formData.forEach((value, key) => {
            evaluacionData[key] = value;
        });

        // Guardar los datos en Firebase
        firebase.database().ref('evaluaciones/' + empleado).push(evaluacionData)
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
