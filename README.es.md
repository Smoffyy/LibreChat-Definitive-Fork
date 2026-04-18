# LibreChat Fork Definitivo — La Edición Definitiva v0.8.4

Un fork de [LibreChat v0.8.4](https://github.com/danny-avila/LibreChat/tree/v0.8.4) creado para *congelar* esta versión, preservando su funcionalidad central mientras introduce mejoras mínimas como mejoras de Calidad de Vida y asegurando que todo sea local y autocontenido.

<p align="center">
  <img src="logo.svg" alt="LibreChat Logo Original" width="200"/>
</p>

Si deseas la versión original, **no modificada** de LibreChat v0.8.4, echa un vistazo a la rama [LibreChat-0.8.4-base](https://github.com/Smoffyy/LibreChat-Definitive-Fork/tree/librechat-0.8.4-base).

Este proyecto está licenciado bajo la misma Licencia MIT que el LibreChat original. Al descargar, utilizar o modificar este proyecto, aceptas los términos de la [licencia original](https://github.com/Smoffyy/LibreChat-Static/blob/librechat-0.8.4-base/LICENSE) de la versión v0.8.4.

> **Esto no es una revisión completa. Es un fork de mantenimiento estable a largo plazo destinado a preservar el v0.8.4 exactamente como está.**

---

### Créditos / Agradecimientos (Creadores Originales)

#### Creador Original
- [Danny Avila](https://github.com/danny-avila) - Creador Original, Fundador y Mantenedor Principal

#### Contribuyentes Centrales
- [David Avila](https://github.com/david-avila) – Contribuyente temprano / colaborador
- [Berry (berry-13)](https://github.com/berry-13) – Colaborador central y contribuyente
- [Fuegovic](https://github.com/fuegovic) – Contribuyente y colaborador de código abierto
- [RubenT (rubentalstra)](https://github.com/rubentalstra) – Contribuyente

#### Contribuyentes Destacados
- [nhtruong](https://github.com/nhtruong) – Contribuyente
- [AmgadHasan](https://github.com/AmgadHasan) – Contribuyente
- [austin-barrington](https://github.com/austin-barrington) – Contribuyente
- [hofq](https://github.com/hofq) – Contribuyente
- [mawburn](https://github.com/mawburn) – Contribuyente
- [rba100](https://github.com/rba100) – Contribuyente
- [sbruel](https://github.com/sbruel) – Contribuyente
- [leblancfg](https://github.com/leblancfg) – Contribuyente
- [pnancarrow](https://github.com/pnancarrow) – Contribuyente
- [ruggishop](https://github.com/ruggishop) – Contribuyente

#### Contribuyentes Adicionales
- [jakubmieszczak](https://github.com/jakubmieszczak) – Contribuyente
- [DenisPalnitsky](https://github.com/DenisPalnitsky) – Contribuyente
- [nidasfly](https://github.com/nidasfly) – Contribuyente
- [achhabra2](https://github.com/achhabra2) – Contribuyente
- [arthurian](https://github.com/arthurian) – Contribuyente
- [techwithanirudh](https://github.com/techwithanirudh) – Contribuyente
- [bsu3338](https://github.com/bsu3338) – Contribuyente
- [pxz2016](https://github.com/pxz2016) – Contribuyente
- [eshack94](https://github.com/eshack94) – Contribuyente
- [ventz](https://github.com/ventz) – Contribuyente
- [derkoe](https://github.com/derkoe) – Contribuyente
- [btribonde](https://github.com/btribonde) – Contribuyente

#### Fuentes Personalizadas
- [Frank Grießhammer](https://fonts.google.com/?query=Frank+Grie%C3%9Fhammer) - Fuente de código abierto Source Serif 4.
- [The Open Sans Project Authors](https://github.com/googlefonts/opensans) - Fuente de código abierto Open Sans.
- [The B612 Project Authors](https://github.com/polarsys/b612) - Fuente de código abierto B612.

#### Contribuyentes de Código Abierto
- [Contribuyentes de LibreChat](https://github.com/danny-avila/LibreChat/graphs/contributors) – Más de 300 contribuyentes de código abierto que ayudaron a construir y mantener el proyecto

---

### ¿Cuál es el Objetivo?

El objetivo del proyecto es mantener el original [LibreChat v0.8.4](https://github.com/danny-avila/LibreChat/releases/tag/v0.8.4), manteniendo todo el código original intacto.

Específicamente, este proyecto busca:

- Mantener el **v0.8.4** original de LibreChat congelado en el tiempo
- Ediciones mínimas al código y a la sensación general del software
- Archivar el v0.8.4 de LibreChat para que cualquiera pueda usarlo
- Asegurar que todo se compile **100% desde fuentes** — sin descargar imágenes precompiladas durante la ejecución (runtime)
- Mantener la Licencia MIT original

---

### Diseño

Esto **no** está destinado a ser un rediseño completo o una revisión.

La intención es:
- Preservar el aspecto y funcionalidad del **LibreChat original**
- Modernizar ciertos aspectos
- Congelar paquetes y versiones
- Añadir mejoras opcionales

Piensa en ello como:
> LibreChat Original, forkado para longevidad y sostenibilidad.

---

## ¿En qué difiere de la LibreChat Original?

No hay nada diferente del LibreChat Original, solo unos pocos cambios que son características de Calidad de Vida. Además de eso, esto es estrictamente la base [LibreChat v0.8.4](https://github.com/danny-avila/LibreChat/releases/tag/v0.8.4), destinada a ser mantenida durante el mayor tiempo posible, sin preocuparse por que las características fallen o pierdan acceso.

### En cuanto a Docker
La LibreChat original dependía de Docker Hub para descargar varias imágenes precompiladas en la ejecución (runtime) cada vez que ejecutabas `docker compose up`. Esto significa que tu configuración dependía de que esas imágenes permanecieran disponibles en Docker Hub para siempre — si alguna de ellas se eliminaba, movía o cambiaba, tu instalación fallaría.

Este fork cambia eso construyendo **cada servicio individualmente desde fuentes**, empaquetado directamente dentro de este repositorio. Nada se descarga durante la ejecución (runtime).

### Lo que la LibreChat original descargaba

Cuando ejecutabas `docker compose up` en la LibreChat original, Docker contactaría con internet y descargaría:

- `registry.librechat.ai/danny-avila/librechat-rag-api-dev-lite:latest` — el servicio de API RAG
- `mongo:8.0.20` — la base de datos MongoDB
- `getmeili/meilisearch:v1.35.1` — el motor de búsqueda
- `pgvector/pgvector:0.8.0-pg15-trixie` — la base de datos vectorial para RAG

Esto significaba que tu compilación solo era tan estable como esos registros externos.

### Lo que hace este fork en su lugar

Cada servicio ahora tiene su propio Dockerfile empaquetado dentro de la carpeta `docker/` de este repositorio, y el código fuente del `rag_api` está empaquetado directamente en la carpeta `rag_api/`. Cuando ejecutas `docker compose build`, Docker construye cada imagen localmente desde estas fuentes — ningún registro externo es contactado para ninguno de los servicios centrales.

La estructura de carpetas para los Dockerfiles añadidos es:

```
docker/
  mongodb/
    Dockerfile        ← Instala MongoDB 8.0 desde el repositorio oficial apt de MongoDB
  meilisearch/
    Dockerfile        ← Descarga el binario Meilisearch v1.35.1 desde GitHub Releases
  vectordb/
    Dockerfile        ← Instala PostgreSQL 15 + pgvector desde el repositorio oficial apt de PostgreSQL
    entrypoint.sh     ← Inicializa la base de datos, crea al usuario y habilita la extensión vectorial
rag_api/              ← Código fuente completo de danny-avila/rag_api, empaquetado directamente
```

Cada Dockerfile instala su servicio desde el **repositorio oficial upstream** del paquete de ese software en lugar de depender de una imagen precompilada de Docker Hub. Esto es significativamente más resiliente — el repositorio apt oficial de MongoDB, el repositorio apt oficial de PostgreSQL y GitHub Releases son mucho más permanentes que cualquier etiqueta específica de Docker Hub.

### Por qué esto importa

Si `mongo:8.0.20` desaparece de Docker Hub mañana, la LibreChat original falla. Con este fork, MongoDB se instala desde el propio repositorio apt de MongoDB Inc. dentro de una imagen base estándar `debian:bookworm-slim` — algo que permanecerá disponible esencialmente para siempre. La misma lógica aplica a cada otro servicio.

La única conexión con internet que ocurre durante la compilación es obtener paquetes desde los repositorios oficiales de paquetes y la imagen base `debian:bookworm-slim`, que es mantenida por Docker mismo y es esencialmente permanente.

---

## Requisitos Previos (Manera más fácil de instalar)

- **[Git](https://git-scm.com/install/)**
- **[Docker](https://www.docker.com/products/docker-desktop/)**

---

## Instalación NPM (Desarrollo)

Si prefieres usar NPM, o estás desarrollándolo activamente, por favor consulta el archivo [NPMInstallation.md](local-docs/NPMInstallation.md).

## Instalación Docker

Para la mayoría de las personas, usar Docker Desktop es la manera más fácil de poner LibreChat en funcionamiento.

1. Clona el repositorio
```
git clone https://github.com/Smoffyy/LibreChat-Definitive-Fork
cd LibreChat-Definitive-Fork
```

2. Crea el Archivo del Entorno
```
copy .env.example .env
```
> Nota: este comando es para Windows. En macOS/Linux usa `cp .env.example .env`

3. Monta librechat.yaml
```
copy docker-compose.override.yml.example docker-compose.override.yml
```

Asegúrate de que dentro de tu override de Docker se vea así:
```yaml
services:
  api:
    image: librechat
    build:
      context: .
      target: node
    volumes:
      - type: bind
        source: ./librechat.yaml
        target: /app/librechat.yaml
    depends_on:
      - mongodb
      - meilisearch
```

4. Construye las imágenes
```
docker compose build --no-cache
docker compose up -d
```

> Esto construirá todos los servicios localmente desde fuentes. La primera compilación tarda varios minutos ya que compila LibreChat, instala las dependencias de la API RAG y configura las bases de datos. Las compilaciones subsiguientes son más rápidas debido al caché de capas de Docker.

5. Abre LibreChat en el navegador

Ve a `http://localhost:3080/` y comienza a chatear!

---

## Persistencia de Datos

Tus datos persisten automáticamente entre reinicios. Aquí es donde cada servicio almacena sus datos:

- **MongoDB** (historial de chat, usuarios) → carpeta `./data-node/` en la raíz del repositorio
- **Meilisearch** (índice de búsqueda) → carpeta `./meili_data_v1.35.1/` en la raíz del repositorio
- **pgvector** (datos vectoriales RAG) → volumen nombrado Docker `librechat_pgdata2`

Un normal `docker compose down` seguido de `docker compose up -d` mantiene todos los datos intactos. Solo `docker compose down -v` (con la bandera `-v`) eliminará el volumen nombrado pgvector. Las carpetas de datos de MongoDB y Meilisearch en el disco nunca son tocadas por Docker y sobreviven a todo.

---

## Archivos/configuraciones antiguas

Cada vez que desees ver los archivos de ejemplo originales, busca archivos que tengan `_old` al final, como `librechat.example_old.yaml` o `.env.example_old`.