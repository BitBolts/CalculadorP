function calcularPropina() {
    var totalCuenta = parseFloat(document.getElementById('totalCuenta').value);
    var porcentajePropina = parseFloat(document.getElementById('porcentajePropina').value);

    if (!isNaN(totalCuenta) && !isNaN(porcentajePropina)) {
        var propina = (totalCuenta * porcentajePropina) / 100;
        var totalConPropina = totalCuenta + propina;

        // Mostrar cuadro de diálogo con los resultados
        alert(`Propina: $${propina.toFixed(2)}\nTotal con Propina: $${totalConPropina.toFixed(2)}`);
    } else {
        // Mostrar cuadro de diálogo con el mensaje de error
        alert('Por favor, ingresa números válidos.');
    }
}

