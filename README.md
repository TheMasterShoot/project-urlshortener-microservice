# URL Shortener Microservice

This is the boilerplate code for the URL Shortener Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice.

Este es un proyecto básico de acortador de URLs construido con **Node.js** y **Express** como parte de una práctica de backend. Permite acortar URLs mediante una API REST sencilla.

---

## Características

- ✅ Crear un short link a partir de una URL válida (`POST /api/shorturl`)
- ✅ Redirigir automáticamente al visitar el short link (`GET /api/shorturl/:short_url`)
- ✅ Validación de formato de URL
- ❌ No guarda datos en una base de datos (almacenamiento en memoria)

---

## Tecnologías usadas

- Node.js
- Express.js
- dotenv
- cors

---

## Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/TheMasterShoot/project-urlshortener-microservice.git
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` y define el puerto si lo deseas (opcional):

```env
PORT=3000
```

4. Inicia el servidor:

```bash
npm start
```

---

## Uso de la API

### 1. Crear un short link

**POST** `/api/shorturl`

**Body (x-www-form-urlencoded):**
```
url=https://example.com
```

**Respuesta:**
```json
{
  "original_url": "https://example.com",
  "short_url": 1
}
```

---

### 2. Redirigir a la URL original

**GET** `/api/shorturl/1`

🔁 Redirige a: `https://example.com`

---

### 3. Error de URL inválida

**POST** `/api/shorturl` con una URL inválida

**Respuesta:**
```json
{
  "error": "invalid url"
}
```

---

## Pruebas

1. You should provide your own project, not the example URL.  
2. You can POST a URL to `/api/shorturl` and get a JSON response with `original_url` and `short_url` properties. Example:  
   ```json
   { "original_url": "https://freeCodeCamp.org", "short_url": 1 }
   ```
3. When you visit `/api/shorturl/<short_url>`, you will be redirected to the original URL.  
4. If you pass an invalid URL (not following the valid `http://www.example.com` format), the JSON response will be:  
   ```json
   { "error": "invalid url" }
   ```

---

## Ejemplo con curl

```bash
curl -X POST -d "url=https://freecodecamp.org" https://tu-dominio.com/api/shorturl
```
