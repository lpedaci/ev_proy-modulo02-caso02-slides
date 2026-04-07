# Primera Presentación de Proyecto · SensorOffice
### 7mo Informática 2026 · Instituto Leonardo Murialdo

Presentación interactiva de diapositivas para la **primera instancia de evaluación** del proyecto integrador de 7mo año Informática. El archivo modela la metodología completa de relevamiento, análisis y planificación aplicada al caso de uso **SensorOffice** — un sistema de monitoreo ambiental con hardware y software para el Estudio Contable Gómez (Valeria Gómez, Caseros, Tres de Febrero).

---

## Descripción del proyecto

La presentación cubre el ciclo completo de trabajo previo a la fase de desarrollo:

- Identificación del problema mediante entrevista estructurada a la usuaria real
- Mapeo de síntomas → causas raíz → requerimientos técnicos (RF, RNF y **RHW**)
- Línea de base con métricas medibles (temperatura, CO₂, quejas, consumo energético)
- Tres perfiles de usuario: Administradora, Empleada y Técnico Instalador
- Requerimientos funcionales (RF), no funcionales (RNF) y **de hardware (RHW)**
- Alcance del proyecto (qué hace / qué NO hace el sistema)
- OKRs con Key Results cuantificables para software y mundo físico
- Composición del equipo y roles interdisciplinarios
- Tech stack: ESP32, sensores (DHT22, MQ-135, BH1750, PIR, SCT-013), MQTT, Node.js, React
- Presupuesto estimado en horas-hombre y componentes de hardware
- Cronograma GANTT de abril a noviembre 2026
- Próximos pasos antes de escribir código o soldar componentes

> **Nota pedagógica:** este caso introduce tres conceptos nuevos respecto al caso Roberto:
> la categoría **RHW** (requerimientos de hardware), los **bloques de entrevista E y F**
> (entorno físico e instalación), y el **perfil de Técnico Instalador** como tercer usuario.

La presentación es **material docente reutilizable**: los estudiantes completan los placeholders
(nombres, número de equipo) y la adaptan a su propio caso de uso.

---

## Estructura de archivos

```
presentacion-proyecto_Valeria/
│
├── index.html              # Documento principal — toda la estructura HTML de slides
├── README.md               # Este archivo
│
└── assets/
    ├── css/
    │   └── style.css       # Todos los estilos: variables, layout, componentes, animaciones
    └── js/
        └── script.js       # Navegación entre slides, dots, barra de progreso, teclado y swipe
```

> **Sin dependencias de build.** El proyecto se abre directamente en el navegador
> haciendo doble clic en `index.html`. No requiere servidor local ni npm.

---

## Tecnologías usadas

| Tecnología | Uso |
|---|---|
| HTML5 semántico | Estructura de slides y componentes |
| CSS3 custom properties | Sistema de tokens de color y tipografía (incluye `--slide-purple` para HW) |
| CSS Grid / Flexbox | Layout de columnas, cards, arch-layers, sensor-grid y gantt |
| CSS transitions / animations | Animaciones de entrada/salida de slides y pulso en EXPO |
| Vanilla JavaScript ES6+ | Navegación, dots, barra de progreso, teclado y touch/swipe |
| Google Fonts | DM Sans · DM Mono · Lora (vía CDN, sin descarga local) |

No se usa ningún framework JavaScript ni librería de terceros.

---

## Componentes visuales específicos de este caso

| Clase CSS | Descripción |
|---|---|
| `.arch-layer` / `.arch-flow` | Diagrama de capas de arquitectura HW→SW→Cloud |
| `.sensor-mini-grid` | Grilla de tarjetas de sensores (DHT22, MQ-135, BH1750, PIR, SCT-013) |
| `.tag-rhw` | Tag morado para requerimientos de hardware |
| `.card-purple` / `.note.hw` | Cards y notas con acento violeta para contenido de hardware |
| `.okr-obj.hw` | Objetivo OKR con fondo violeta para metas físicas |
| `.profile-header.tecnico` | Perfil de Técnico Instalador con acento violeta |
| `.baseline-card.hw` | Cards de línea de base para métricas físicas |

---

## Notas orientativas para estudiantes

### Cómo adaptar la presentación a su propio caso

1. **`index.html`** — buscar y reemplazar los placeholders:
   - `Apellido, Nombre` → nombres reales del equipo
   - `N° —` → número de equipo
   - Datos de Valeria y el estudio → datos de su usuario real entrevistado

2. **`assets/css/style.css`** — no modificar salvo cambios de paleta intencionales.
   Las variables en `:root` controlan toda la paleta; `--slide-purple` es exclusiva de este caso.

3. **`assets/js/script.js`** — no requiere modificación.

### Reglas metodológicas (recordatorio)

- El usuario **debe haber sido entrevistado** antes de esta presentación.
- Para proyectos con hardware: aplicar los bloques **E** (entorno físico) y **F** (instalación).
- Cada RF y RHW debe trazarse a una respuesta concreta de la entrevista.
- Los KR deben incluir número; un KR sin métrica no es un KR.
- El mockup del dashboard **y** el esquema de nodos deben validarse con el usuario antes de fabricar o programar.

### Atajos de teclado

| Tecla | Acción |
|---|---|
| `→` / `↓` / `Espacio` | Siguiente slide |
| `←` / `↑` | Slide anterior |
| `Esc` | Volver al inicio |

También funciona swipe táctil (móvil / tablet).

---

## Créditos

- **Autor**: Prof. Pedaci, Lourdes — [LinkedIn](https://www.linkedin.com/in/lourdes-pedaci/)
- **Institución**: Instituto Leonardo Murialdo · 7mo Informática 2026
- **Año lectivo:** 2026  
- **Caso de uso:** Estudio Contable Gómez, Caseros, Tres de Febrero (usuaria ficticia, metodología real)  
- **Sistema propuesto:** SensorOffice — ESP32 + DHT22 + MQ-135 + BH1750 + PIR + SCT-013, MQTT, Node.js, React

---

> _"Sensor incorrecto → dato incorrecto → decisión incorrecta."_

---

*Material de uso instruccional. Los casos de uso son ficticios y fueron construidos como ejemplos pedagógicos para modelar la metodología de la asignatura.*
