const FRM2 = document.getElementById('FRM_Regreso')
FRM2.addEventListener('submit', regreso)

function regreso(evento) {
    evento.preventDefault()
    window.location.href = 'index.html'
}