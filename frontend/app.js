// --- CONFIGURACIÓN DE TU API ---
// Recuerda poner aquí tu Key real cuando la tengas (ej. de RapidAPI)
const API_KEY = 'TU_CLAVE_API_AQUI'; 
const API_HOST = 'v3.football.api-sports.io'; // O la que vayas a usar

const requestOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST
    }
};

// --- ENRUTADOR PRINCIPAL ---
// Esperamos a que la página cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // Detectamos en qué página estamos leyendo el ID del body
    const pageId = document.body.id;
    const contenedorResultados = document.getElementById('resultado-api');

    if (pageId === 'page-estadisticas') {
        cargarEstadisticas(contenedorResultados);
    } else if (pageId === 'page-jugadores') {
        cargarJugadores(contenedorResultados);
    } else if (pageId === 'page-clubes') {
        cargarClubes(contenedorResultados);
    } else if (pageId === 'page-fichajes') {
        cargarFichajes(contenedorResultados);
    }
});

// --- FUNCIONES DE LLAMADA A LA API ---

async function cargarEstadisticas(contenedor) {
    try {
        // Ejemplo: Obtener fixtures (partidos) del día
        // const response = await fetch(`https://${API_HOST}/fixtures?date=2024-05-15`, requestOptions);
        // const data = await response.json();
        
        // Simulación visual mientras no tienes la Key puesta
        contenedor.innerHTML = `
            <div class="item-api">
                <h3>Real Madrid vs Barcelona</h3>
                <p>Posesión: 55% - 45%</p>
                <p>Goles Esperados (xG): 1.5 - 1.2</p>
            </div>
             <div class="item-api">
                <h3>Arsenal vs City</h3>
                <p>Posesión: 40% - 60%</p>
                <p>Goles Esperados (xG): 0.8 - 2.1</p>
            </div>
        `;
    } catch (error) {
        contenedor.innerHTML = `<p style="color: red;">Error al cargar estadísticas: ${error}</p>`;
    }
}

async function cargarJugadores(contenedor) {
    try {
        // Ejemplo de Fetch real:
        // const response = await fetch(`https://${API_HOST}/players/topscorers?league=140&season=2023`, requestOptions);
        contenedor.innerHTML = `<div class="item-api"><h3>Datos de Jugadores</h3><p>Buscando máximos goleadores...</p></div>`;
    } catch (error) {
        console.error("Error:", error);
    }
}

async function cargarClubes(contenedor) {
    try {
        contenedor.innerHTML = `<div class="item-api"><h3>Clasificación de Clubes</h3><p>Buscando tabla de LaLiga...</p></div>`;
    } catch (error) {
        console.error("Error:", error);
    }
}

async function cargarFichajes(contenedor) {
    try {
        contenedor.innerHTML = `<div class="item-api"><h3>Últimos Fichajes</h3><p>Buscando mercado de transferencias...</p></div>`;
    } catch (error) {
        console.error("Error:", error);
    }
}