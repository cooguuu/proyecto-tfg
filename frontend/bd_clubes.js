// BASE DE DATOS DE EQUIPOS 2025/2026
const dbEquipos = {
    // === LALIGA ===
    "real-madrid": {
        nombre: "Real Madrid CF",
        entrenador: "Carlo Ancelotti",
        formacion: "4-3-3",
        // Alineación: Portero, Defensas, Medios, Delanteros
        alineacion: [
            ["Courtois"],
            ["Mendy", "Rüdiger", "Militão", "Carvajal"],
            ["Bellingham", "Tchouaméni", "Valverde"],
            ["Vinícius Jr", "Mbappé", "Rodrygo"]
        ],
        suplentes: ["Lunin", "Modrić", "Camavinga", "Brahim", "Güler", "Alaba", "Endrick"]
    },
    "barcelona": {
        nombre: "FC Barcelona",
        entrenador: "Hansi Flick",
        formacion: "4-2-3-1",
        alineacion: [
            ["Ter Stegen"],
            ["Balde", "Cubarsí", "Araújo", "Koundé"],
            ["Pedri", "Casadó"],
            ["Raphinha", "Dani Olmo", "Lamine Yamal"],
            ["Lewandowski"]
        ],
        suplentes: ["Peña", "Gavi", "De Jong", "Fermín", "Ferran", "Christensen", "Ansu Fati"]
    },
    "atletico": {
        nombre: "Atlético de Madrid",
        entrenador: "Diego Simeone",
        formacion: "5-3-2",
        alineacion: [
            ["Oblak"],
            ["Lino", "Lenglet", "Giménez", "Le Normand", "Llorente"],
            ["Gallagher", "Koke", "De Paul"],
            ["Julián Álvarez", "Griezmann"]
        ],
        suplentes: ["Musso", "Sorloth", "Correa", "Barrios", "Azpilicueta", "Riquelme"]
    },

    // === PREMIER LEAGUE ===
    "arsenal": {
        nombre: "Arsenal FC",
        entrenador: "Mikel Arteta",
        formacion: "4-3-3",
        alineacion: [
            ["Raya"],
            ["Calafiori", "Gabriel", "Saliba", "White"],
            ["Merino", "Rice", "Ødegaard"],
            ["Martinelli", "Havertz", "Saka"]
        ],
        suplentes: ["Neto", "Timber", "Trossard", "Partey", "Sterling", "Jesus"]
    },
    "liverpool": {
        nombre: "Liverpool FC",
        entrenador: "Arne Slot",
        formacion: "4-2-3-1",
        alineacion: [
            ["Alisson"],
            ["Robertson", "Van Dijk", "Konaté", "Alexander-Arnold"],
            ["Mac Allister", "Gravenberch"],
            ["Díaz", "Szoboszlai", "Salah"],
            ["Jota"]
        ],
        suplentes: ["Kelleher", "Núñez", "Gakpo", "Elliott", "Bradley", "Quansah"]
    },
    "chelsea": {
        nombre: "Chelsea FC",
        entrenador: "Enzo Maresca",
        formacion: "4-2-3-1",
        alineacion: [
            ["Sánchez"],
            ["Cucurella", "Colwill", "Fofana", "Gusto"],
            ["Enzo F.", "Caicedo"],
            ["Neto", "Palmer", "Madueke"],
            ["Jackson"]
        ],
        suplentes: ["Jørgensen", "Nkunku", "Félix", "Lavia", "Mudryk", "James"]
    },

    // === BUNDESLIGA ===
    "bayern": {
        nombre: "Bayern Múnich",
        entrenador: "Vincent Kompany",
        formacion: "4-2-3-1",
        alineacion: [
            ["Neuer"],
            ["Davies", "Kim", "Upamecano", "Kimmich"],
            ["Palhinha", "Pavlović"],
            ["Gnabry", "Musiala", "Olise"],
            ["Kane"]
        ],
        suplentes: ["Ulreich", "Sané", "Müller", "Coman", "Goretzka", "Guerreiro"]
    },
    "dortmund": {
        nombre: "Borussia Dortmund",
        entrenador: "Nuri Şahin",
        formacion: "4-2-3-1",
        alineacion: [
            ["Kobel"],
            ["Bensebaini", "Schlotterbeck", "Anton", "Ryerson"],
            ["Groß", "Can"],
            ["Gittens", "Brandt", "Sabitzer"],
            ["Guirassy"]
        ],
        suplentes: ["Meyer", "Malen", "Adeyemi", "Süle", "Beier", "Reyna"]
    },
    "leverkusen": {
        nombre: "Bayer Leverkusen",
        entrenador: "Xabi Alonso",
        formacion: "3-4-2-1",
        alineacion: [
            ["Hrádecký"],
            ["Hincapié", "Tah", "Tapsoba"],
            ["Grimaldo", "Andrich", "Xhaka", "Frimpong"],
            ["Wirtz", "Hofmann"],
            ["Boniface"]
        ],
        suplentes: ["Kovář", "Schick", "Palacios", "Tella", "Aleix García", "Mukiele"]
    },

    // === SERIE A ===
    "inter": {
        nombre: "Inter de Milán",
        entrenador: "Simone Inzaghi",
        formacion: "3-5-2",
        alineacion: [
            ["Sommer"],
            ["Bastoni", "Acerbi", "Pavard"],
            ["Dimarco", "Mkhitaryan", "Çalhanoğlu", "Barella", "Darmian"],
            ["Martínez", "Thuram"]
        ],
        suplentes: ["Martínez (P)", "Taremi", "Frattesi", "Zielinski", "Dumfries", "Bisseck"]
    },
    "milan": {
        nombre: "AC Milan",
        entrenador: "Paulo Fonseca",
        formacion: "4-2-3-1",
        alineacion: [
            ["Maignan"],
            ["Hernández", "Pavlović", "Tomori", "Emerson"],
            ["Reijnders", "Fofana"],
            ["Leão", "Loftus-Cheek", "Pulisic"],
            ["Morata"]
        ],
        suplentes: ["Sportiello", "Okafor", "Chukwueze", "Gabbia", "Musah", "Abraham"]
    },
    "napoli": {
        nombre: "SSC Napoli",
        entrenador: "Antonio Conte",
        formacion: "3-4-2-1",
        alineacion: [
            ["Meret"],
            ["Buongiorno", "Rrahmani", "Di Lorenzo"],
            ["Spinazzola", "Lobotka", "Anguissa", "Mazzocchi"],
            ["Kvaratskhelia", "Politano"],
            ["Lukaku"]
        ],
        suplentes: ["Caprile", "Neres", "McTominay", "Gilmour", "Raspadori", "Olivera"]
    },

    // === LIGUE 1 ===
    "psg": {
        nombre: "Paris Saint-Germain",
        entrenador: "Luis Enrique",
        formacion: "4-3-3",
        alineacion: [
            ["Donnarumma"],
            ["Mendes", "Pacho", "Marquinhos", "Hakimi"],
            ["Neves", "Vitinha", "Zaïre-Emery"],
            ["Barcola", "Asensio", "Dembélé"]
        ],
        suplentes: ["Safonov", "Kolo Muani", "Lee Kang-in", "Ruiz", "Doué", "Skriniar"]
    },
    "monaco": {
        nombre: "AS Mónaco",
        entrenador: "Adi Hütter",
        formacion: "4-2-3-1",
        alineacion: [
            ["Köhn"],
            ["Henrique", "Kehrer", "Singo", "Vanderson"],
            ["Camara", "Zakaria"],
            ["Ben Seghir", "Minamino", "Akliouche"],
            ["Embolo"]
        ],
        suplentes: ["Majecki", "Balogun", "Golovin", "Ilenikhena", "Salisu", "Diatta"]
    },
    "lyon": {
        nombre: "Olympique de Lyon",
        entrenador: "Pierre Sage",
        formacion: "4-3-3",
        alineacion: [
            ["Perri"],
            ["Tagliafico", "Ćaleta-Car", "Niakhaté", "Maitland-Niles"],
            ["Tolisso", "Matić", "Caqueret"],
            ["Benrahma", "Lacazette", "Mikautadze"]
        ],
        suplentes: ["Lopes", "Cherki", "Fofana", "Zaha", "Veretout", "Mata"]
    }
};

// Objeto para enlazar ligas con los options del select
const equiposPorLiga = {
    laliga: [
        { id: "real-madrid", nombre: "Real Madrid" },
        { id: "barcelona", nombre: "FC Barcelona" },
        { id: "atletico", nombre: "Atlético de Madrid" }
    ],
    premier: [
        { id: "arsenal", nombre: "Arsenal" },
        { id: "liverpool", nombre: "Liverpool" },
        { id: "chelsea", nombre: "Chelsea" }
    ],
    bundesliga: [
        { id: "bayern", nombre: "Bayern Múnich" },
        { id: "dortmund", nombre: "B. Dortmund" },
        { id: "leverkusen", nombre: "Bayer Leverkusen" }
    ],
    seriea: [
        { id: "inter", nombre: "Inter de Milán" },
        { id: "milan", nombre: "AC Milan" },
        { id: "napoli", nombre: "Napoli" }
    ],
    ligue1: [
        { id: "psg", nombre: "PSG" },
        { id: "monaco", nombre: "AS Mónaco" },
        { id: "lyon", nombre: "Olympique Lyon" }
    ]
};

// Función 1: Cambiar las opciones del select de equipos al elegir liga
function actualizarEquipos() {
    const ligaSeleccionada = document.getElementById('select-liga').value;
    const selectEquipo = document.getElementById('select-equipo');
    
    // Limpiamos el select
    selectEquipo.innerHTML = '<option value="">-- Selecciona un Equipo --</option>';
    
    if (ligaSeleccionada !== "") {
        selectEquipo.disabled = false;
        equiposPorLiga[ligaSeleccionada].forEach(equipo => {
            const opcion = document.createElement('option');
            opcion.value = equipo.id;
            opcion.textContent = equipo.nombre;
            selectEquipo.appendChild(opcion);
        });
    } else {
        selectEquipo.disabled = true;
    }
}

// Función 2: Pintar todo cuando le damos al botón
function cargarEquipo() {
    const idEquipo = document.getElementById('select-equipo').value;
    
    if (idEquipo === "") {
        alert("¡Selecciona un equipo primero!");
        return;
    }

    const datos = dbEquipos[idEquipo];
    
    // Mostramos la pantalla oculta
    document.getElementById('pantalla-equipo').style.display = 'block';
    
    // Cambiamos textos de cabecera
    document.getElementById('nombre-equipo').textContent = datos.nombre;
    document.getElementById('nombre-entrenador').textContent = datos.entrenador;
    document.getElementById('formacion-equipo').textContent = datos.formacion;

    // Pintar el campo de fútbol
    const campo = document.getElementById('campo-tactico');
    campo.innerHTML = ''; // Limpiamos el campo anterior

    // Recorremos la alineación (filas de abajo hacia arriba)
    datos.alineacion.forEach(fila => {
        const divFila = document.createElement('div');
        divFila.className = 'fila-tactica';
        
        fila.forEach(jugador => {
            const divJugador = document.createElement('div');
            divJugador.className = 'jugador-campo';
            divJugador.innerHTML = `
                <div class="jugador-punto"></div>
                <div class="jugador-nombre">${jugador}</div>
            `;
            divFila.appendChild(divJugador);
        });
        
        campo.appendChild(divFila);
    });

    // Pintar suplentes
    const listaSuplentes = document.getElementById('lista-suplentes');
    listaSuplentes.innerHTML = '';
    datos.suplentes.forEach(suplente => {
        const li = document.createElement('li');
        li.textContent = suplente;
        listaSuplentes.appendChild(li);
    });

    // NOTA: Para las imágenes de los escudos, puedes enlazar variables en la base de datos después.
    document.getElementById('img-liga').src = "https://via.placeholder.com/60?text=LIGA";
    document.getElementById('img-escudo').src = "https://via.placeholder.com/60?text=CLUB";
}