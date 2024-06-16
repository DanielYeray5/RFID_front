document.getElementById('FRM').addEventListener('submit', function (event) {
    event.preventDefault();

    const rfid = document.querySelector('input[name="rfid"]').value;
    const nombreUsuario = document.querySelector('input[name="nombre"]').value;
    const correo = document.querySelector('input[name="correo"]').value;
    const contraseña = document.querySelector('input[name="contraseña"]').value;

    fetch('http://localhost:3000/registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rfid, nombreUsuario, correo, contraseña })
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => { throw new Error(text) });
        }
        return response.text();
    })
    .then(data => {
        alert(data);
    })
    .catch(error => {
        alert('Error: ' + error.message);
    });
});
