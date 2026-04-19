from fastapi import FastAPI, HTTPException
import psycopg2

app = FastAPI(title="Futbol Legacy API - Producción")

# Configuración de la conexión
def connect_db():
    return psycopg2.connect(
        host="db",
        database="footstats_db",
        user="admin",
        password="password123"
    )

@app.get("/")
def read_root():
    return {"status": "Futbol Legacy API Running"}

# --- SECCIÓN DE EQUIPOS (Módulo Clubes) ---
@app.get("/equipos")
def get_equipos():
    try:
        conn = connect_db()
        cur = conn.cursor()
        # Unificamos a tabla 'equipo' para evitar errores 500
        cur.execute("SELECT id, nombre, ciudad, estadio FROM equipo;")
        data = cur.fetchall()
        cur.close()
        conn.close()
        return [{"id": e[0], "nombre": e[1], "ciudad": e[2], "estadio": e[3]} for e in data]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# --- SECCIÓN DE JUGADORES ---
@app.get("/jugadores/{equipo_id}")
def get_jugadores_equipo(equipo_id: int):
    try:
        conn = connect_db()
        cur = conn.cursor()
        query = """
            SELECT j.id, j.nombre, j.posicion_principal 
            FROM jugador j 
            JOIN equipo_jugador ej ON j.id = ej.jugador_id 
            WHERE ej.equipo_id = %s AND ej.fecha_fin IS NULL;
        """
        cur.execute(query, (equipo_id,))
        data = cur.fetchall()
        cur.close()
        conn.close()
        return [{"id": j[0], "nombre": j[1], "posicion": j[2]} for j in data]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# --- SECCIÓN DE EVENTOS EN VIVO ---
# Eliminamos el prefijo /api/ porque Nginx ya lo gestiona
@app.get("/partidos/{partido_id}/eventos")
def get_eventos_vivo(partido_id: int):
    try:
        conn = connect_db()
        cur = conn.cursor()
        cur.execute("SELECT minuto, tipo_evento, descripcion FROM evento_vivo WHERE partido_id = %s ORDER BY minuto DESC;", (partido_id,))
        data = cur.fetchall()
        cur.close()
        conn.close()
        return [{"minuto": ev[0], "tipo": ev[1], "descripcion": ev[2]} for ev in data]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# --- SECCIÓN DE MERCADO (Fichajes) ---
@app.get("/mercado/recientes")
def get_fichajes_recientes():
    try:
        conn = connect_db()
        cur = conn.cursor()
        query = """
            SELECT j.nombre, e1.nombre, e2.nombre, m.coste_millones 
            FROM mercado_fichajes m 
            JOIN jugador j ON m.jugador_id = j.id 
            JOIN equipo e1 ON m.equipo_origen_id = e1.id 
            JOIN equipo e2 ON m.equipo_destino_id = e2.id 
            ORDER BY m.fecha_transferencia DESC LIMIT 5;
        """
        cur.execute(query)
        data = cur.fetchall()
        cur.close()
        conn.close()
        return [{"jugador": f[0], "origen": f[1], "destino": f[2], "coste": f[3]} for f in data]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
