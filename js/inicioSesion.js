document.getElementById('FRM_Inicio').addEventListener('submit', function(event) {
    event.preventDefault();
    const rfid = document.getElementById('RFID').value;
    const nombreUsuario = document.getElementById('Usuario').value;
    const contraseña = document.querySelector('input[name="contraseña"]').value; // Obtener el valor de la contraseña

    fetch('http://localhost:3000/iniciarSesion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rfid, nombreUsuario, contraseña })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Credenciales incorrectas');
        }
        return response.json();
    })
    .then(data => {
        window.location.href = `datosUsuario.html?rfid=${data.rfid}&nombre=${data.nombre}&correo=${data.correo}`;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al iniciar sesión: ' + error.message);
    });
});
