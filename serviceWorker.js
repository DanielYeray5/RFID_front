const staticPage = "dev-user-site-v1"
const assets = [
    "/",
    "/index.html",
    "/datosUsuarios.html",
    "/registro.html",
    "/registro.js",
    "/inicioSesion.js",
    "/index2.js",
    "/conexion.js",
    "/datos.css",
    "/index.css",
    "/registro.css"
]

self.addEventListener("install", (installEvent) => {
    installEvent.waitUntil(
        caches.open(staticPage).then((cache) => {
            cache.addAll(assets)
        })
    )

})

self.addEventListener("fetch", (fetchEvent) => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(response => response || fetch(fetchEvent.request)
        )
    )
})

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/serviceWorker.js").then(res => console.log("serviceWorker registrado")).catch(err => console.log("serviceWorker no registrado"))
    })
}
