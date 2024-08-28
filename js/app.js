document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtener valores de los campos
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("loginMessage");

    // Lógica básica de validación
    if (username === "admin" && password === "admin123") {
        // Redirigir al dashboard o página principal si la autenticación es exitosa
        window.location.href = "dashboard.html";
    } else {
        // Mostrar mensaje de error si las credenciales no son válidas
        loginMessage.textContent = "Usuario o contraseña incorrectos.";
    }
});
