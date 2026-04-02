// Esperar a que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", () => {
    // Obtener el elemento donde irá el año
    const yearSpan = document.getElementById("year");
    
    // Obtener el año actual
    const currentYear = new Date().getFullYear();
    
    // Insertar el año en el HTML
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }
    
    console.log("Landing page cargada correctamente.");
});