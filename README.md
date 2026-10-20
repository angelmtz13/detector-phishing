# Detector de Phishing Institucional — Javard Corporativo (v1.0)

Dashboard interactivo y didáctico para el análisis y detección de correos electrónicos y enlaces sospechosos (phishing institucional), desarrollado exclusivamente con **HTML5, CSS3 y JavaScript puro (Vanilla)**.

---

## 🚀 Características

- **Análisis Heurístico de Correos:**
  - Detección de lenguaje de urgencia y amenazas de desactivación.
  - Identificación de solicitudes sospechosas de credenciales (contraseñas, 2FA, datos bancarios).
  - Reconocimiento de pretextos comunes: nóminas de Recursos Humanos, alertas de buzón lleno en Microsoft 365, paqueterías retenidas (DHL/Estafeta) y falsos avisos fiscales (SAT).
  - Identificación de enlaces a plataformas gratuitas o no autorizadas dentro del correo.

- **Análisis Heurístico de Enlaces URL:**
  - Detección de suplantación de identidad de marcas conocidas (*Typosquatting*).
  - Reconocimiento de rutas de captura de credenciales (`/login`, `/auth`, `/verificacion`).
  - Detección de falsos dominios gubernamentales o universitarios en dominios comerciales `.com`.
  - Identificación de extensiones TLD económicas o abusadas (`.xyz`, `.sbs`, `.top`, etc.).
  - Descuento de confianza para dominios oficiales verificados (`.edu`, `.gob`, `.gov`).

- **Interfaz de Usuario:**
  - Medidor circular SVG de nivel de riesgo (0 a 100 pts) con clasificación: *Seguro*, *Sospechoso* y *Riesgo Crítico*.
  - Manual interactivo desplegable de ciberdefensa.
  - Consola técnica con registro de inspección detallado.
  - Acciones y recomendaciones de seguridad sugeridas.
  - Historial de análisis persistente en `localStorage`.
  - Soporte completo para Modo Claro y Modo Oscuro.
  - Generador de reportes listo para imprimir o exportar a PDF.

---

## 📁 Estructura del Proyecto

```text
├── index.html       # Estructura semántica de la aplicación
├── style.css        # Estilos, temas (claro/oscuro) y animaciones
├── script.js        # Motor heurístico, lógica y persistencia
└── README.md        # Documentación del proyecto
```

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructura semántica accesible.
- **CSS3:** Variables CSS, diseño responsivo (*Grid* / *Flexbox*), *glassmorphism* y animaciones.
- **JavaScript (Vanilla):** Lógica directa, clara y modular, sin frameworks ni dependencias externas.

---

## 💻 Cómo ejecutar localmente

No requiere instalación de dependencias ni servidores complejos:
1. Clona el repositorio:
   ```bash
   git clone https://github.com/angelmtz13/detector-phishing.git
   ```
2. Abre el archivo `index.html` en cualquier navegador web.
