// --- CONFIGURACIÓN DE CONEXIÓN ---
// Usamos '/api' porque el Proxy de Nginx redirige esto al contenedor 'football_api'
const API_BASE_URL = '/api';

document.addEventListener('DOMContentLoaded', () => {
    // Detectamos en qué página estamos leyendo el ID del body de tus HTML
    const pageId = document.body.id;
    const contenedor = document.getElementById('resultado-api');

    if (!contenedor) return;

    // Lógica de enrutamiento según la página
    switch (pageId) {
        case 'page-clubes':
            cargarClubes(contenedor);
            break;
        case 'page-jugadores':
            // Cargamos por defecto el equipo 1, o podrías añadir un selector
            cargarJugadores(contenedor, 1); 
            break;
        case 'page-estadisticas':
            cargarEventosVivo(contenedor, 1); // Carga eventos del partido 1
            break;
        case 'page-fichajes':
            cargarMercado(contenedor);
            break;
        case 'page-inicio':
            console.log("Futbol Legacy: Sistema listo.");
            break;
    }
});

// --- FUNCIONES DE CARGA DINÁMICA ---

// 1. Cargar Clubes (Desde /api/equipos)
async function cargarClubes(contenedor) {
    try {
        const res = await fetch(`${API_BASE_URL}/equipos`);
        const data = await res.json();
        let html = '';
        data.forEach(e => {
            html += `
                <div class="item-api">
                    <h3>${e.nombre}</h3>
                    <p>🏟️ Estadio: ${e.estadio}</p>
                    <p>📍 Ciudad: ${e.ciudad}</p>
                </div>`;
        });
        contenedor.innerHTML = html;
    } catch (err) {
        contenedor.innerHTML = `<p>Error al conectar con el microservicio de equipos.</p>`;
    }
}

// 2. Cargar Jugadores (Desde /api/jugadores/{id})
async function cargarJugadores(contenedor, equipoId) {
    try {
        const res = await fetch(`${API_BASE_URL}/jugadores/${equipoId}`);
        const data = await res.json();
        let html = '';
        data.forEach(j => {
            html += `
                <div class="item-api">
                    <h3>${j.nombre}</h3>
                    <p>🏃 Posición: ${j.posicion}</p>
                </div>`;
        });
        contenedor.innerHTML = html || '<p>No hay jugadores en este equipo.</p>';
    } catch (err) {
        contenedor.innerHTML = `<p>Error al obtener la plantilla.</p>`;
    }
}

// 3. Cargar Eventos en Vivo (Para estadisticas.html)
async function cargarEventosVivo(contenedor, partidoId) {
    try {
        // Esta ruta la definimos en el Backend para el "minuto a minuto"
        const res = await fetch(`${API_BASE_URL}/partidos/${partidoId}/eventos`);
        const data = await res.json();
        let html = '';
        data.forEach(ev => {
            html += `
                <div class="item-api">
                    <p><strong>Minuto ${ev.minuto}'</strong>: ${ev.tipo}</p>
                    <p>${ev.descripcion}</p>
                </div>`;
        });
        contenedor.innerHTML = html || '<p>Esperando eventos del partido...</p>';
    } catch (err) {
        contenedor.innerHTML = `<p>Servicio de eventos en vivo no disponible.</p>`;
    }
}

// 4. Cargar Mercado (Para fichajes.html)
async function cargarMercado(contenedor) {
    try {
        const res = await fetch(`${API_BASE_URL}/mercado/recientes`);
        const data = await res.json();
        let html = '';
        data.forEach(f => {
            html += `
                <div class="item-api">
                    <h3>${f.jugador}</h3>
                    <p>🔄 ${f.origen} ➡️ ${f.destino}</p>
                    <p>💰 Coste: ${f.coste}M €</p>
                </div>`;
        });
        contenedor.innerHTML = html || '<p>No hay fichajes recientes registrados.</p>';
    } catch (err) {
        contenedor.innerHTML = `<p>Error al cargar el mercado de fichajes.</p>`;
    }
}