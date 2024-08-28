document.addEventListener("DOMContentLoaded", function() {
    const sucursalSelect = document.getElementById("sucursal");
    const verResultadosBtn = document.getElementById("btnVerResultados");
    const resultadosSection = document.getElementById("resultados");

    verResultadosBtn.addEventListener("click", function() {
        const sucursal = sucursalSelect.value;
        resultadosSection.innerHTML = "<p>Cargando resultados...</p>";

        // Obtener datos de Firebase filtrados por sucursal
        database.ref(`evaluaciones/${sucursal}`).once('value', function(snapshot) {
            resultadosSection.innerHTML = ""; // Limpiar resultados previos
            const evaluaciones = snapshot.val();

            if (evaluaciones) {
                for (let empleado in evaluaciones) {
                    const evaluacionesEmpleado = evaluaciones[empleado];
                    resultadosSection.innerHTML += `<h3>Evaluaciones para ${empleado}:</h3>`;

                    for (let key in evaluacionesEmpleado) {
                        const evaluacion = evaluacionesEmpleado[key];
                        resultadosSection.innerHTML += `
                            <div>
                                <p><strong>Puntualidad:</strong> ${evaluacion.puntualidad}</p>
                                <p><strong>Productividad:</strong> ${evaluacion.productividad}</p>
                                <p><strong>Trabajo en Equipo:</strong> ${evaluacion.trabajoEquipo}</p>
                                <p><strong>Comentarios:</strong> ${evaluacion.comentarios}</p>
                                <hr>
                            </div>
                        `;
                    }
                }
            } else {
                resultadosSection.innerHTML = "<p>No hay evaluaciones para esta sucursal.</p>";
            }
        }).catch(function(error) {
            console.error("Error al obtener los datos: ", error);
            resultadosSection.innerHTML = "<p>Error al cargar los resultados.</p>";
        });
    });
});
