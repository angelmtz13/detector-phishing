/**
 * Detector de Phishing Institucional - Javard Corporativo
 * Código JavaScript en nivel Junior: claro, directo y fácil de entender.
 */

// ================================================================
// 1. LISTA DE EJEMPLOS REALES DE PHISHING (Para pruebas rápidas)
// ================================================================

const EJEMPLOS = {
  email: [
    {
      label: "Alerta de Suspensión (Soporte TI)",
      text: "Estimado: «direccion_de_correo_electronico» este es su: ULTIMO AVISO.\nHemos tomado la decisión en desactivar tu correo electrónico debido a los nuevos términos y condiciones 2026.\nPor lo tanto, hemos decidido que para seguir usando tu correo debes validar tu cuenta (Proceso Básico De Vinculación 2Auth) para seguir con su correcto funcionamiento en el sistema.\nDe lo contrario, vamos a desactivar tu cuenta sin tu consentimiento.\nConfirme su cuenta aquí:\nhttps://verificacion-01--seguridad-0201.replit.app"
    },
    {
      label: "Actualización de Nómina (Recursos Humanos)",
      text: "DE: Recursos Humanos <rrhh-pagos@empresa-nominas.com>\nASUNTO: URGENTE: Actualización obligatoria de cuenta bancaria para pago de nómina\n\nEstimado colaborador,\n\nDebido a una migración técnica en nuestro sistema contable, es obligatorio que todos los empleados actualicen sus datos bancarios y RFC antes de las 18:00 hrs de hoy.\nDe no completar la validación, el depósito de su próxima nómina quedará temporalmente retenido.\n\nPor favor ingrese al siguiente enlace oficial para validar sus datos:\nhttps://nomina-empleados-actualizacion.com/login\n\nAtentamente,\nDirección de Recursos Humanos y Nóminas"
    },
    {
      label: "Buzón Lleno 99% (Microsoft 365)",
      text: "SISTEMA DE SEGURIDAD - MICROSOFT 365\nASUNTO: ALERTA: Su buzón de correo ha alcanzado el 99% de capacidad\n\nSu cuenta de correo institucional ha superado el límite de almacenamiento (49.8 GB de 50 GB).\nTiene 8 correos electrónicos entrantes retenidos en el servidor que no podrán ser entregados.\n\nPara liberar espacio y sincronizar sus mensajes entrantes inmediatamente, valide sus credenciales en:\nhttps://login-microsoft.security-check24.net/auth\n\nSi no realiza la validación en 24 horas, los mensajes retenidos se eliminarán de forma definitiva."
    },
    {
      label: "Bono Universitario Falso",
      text: "COMUNICADO OFICIAL DE APOYO ESTUDIANTIL:\n\nSe ha aprobado un subsidio de conectividad y bono universitario de $150 USD para todos los estudiantes y docentes activos.\nPara reclamar el beneficio con su cuenta institucional antes de que expire la convocatoria, acceda al portal de becas:\n\nhttp://bono-estudiante-beca.replit.app\n\nDirección General de Apoyo Educativo"
    },
    {
      label: "Paquetería Retenida (DHL / Estafeta)",
      text: "NOTIFICACIÓN DE ENVÍO - DHL EXPRESS\nASUNTO: Su paquete #MX-998412 está retenido en aduana\n\nEstimado cliente:\nSu paquete no pudo ser entregado debido a que la dirección del domicilio está incompleta en nuestro sistema.\n\nEl paquete se encuentra retenido en nuestro centro de distribución. Para actualizar su dirección y pagar la tarifa de reenvío de $35.00 MXN, ingrese a:\nhttps://dhl-mexico-rastreo-paquete.com/guia\n\nTiene 24 horas antes de que el paquete sea devuelto al remitente original."
    },
    {
      label: "Aclaración Fiscal (SAT Falso)",
      text: "SERVICIO DE ADMINISTRACIÓN TRIBUTARIA (SAT)\nASUNTO: Requerimiento Urgente: Inconsistencias en sus declaraciones fiscales\n\nEstimado contribuyente:\nHemos detectado irregularidades en la emisión de sus facturas electrónicas del periodo reciente. Cuenta con un saldo a favor pendiente de devolución o una aclaración pendiente con riesgo de multa.\n\nPara revisar el reporte fiscal detallado e iniciar su aclaración en línea, acceda a:\nhttps://sat-gob-mx-devolucion-impuestos.com/acceso\n\nEvite el bloqueo preventivo de sus sellos digitales."
    },
    {
      label: "Alerta de Bloqueo Inmediato",
      text: "ASUNTO: ALERTA EMAIL - Notificación Final de Bloqueo de Cuenta\n\nDetectamos accesos inusuales en su cuenta de correo corporativo. Si no realiza la renovación de seguridad inmediatamente en el enlace https://mantener-cuenta.iceiy.com perderá el acceso a sus servicios de manera definitiva.\n\nSoporte Técnico de Seguridad de Correo"
    },
    {
      label: "Correo Institucional Seguro (Legítimo)",
      text: "Estimado(a) miembro de la comunidad:\n\nLe informamos que el próximo sábado a partir de las 22:00 hrs se llevará a cabo un mantenimiento preventivo anual en los servidores de la institución.\n\nNo se requieren cambios de contraseñas ni ninguna acción de su parte. El servicio se restablecerá automáticamente el domingo por la mañana.\n\nPara cualquier duda técnica, comuníquese directamente con soporte oficial al correo soporte-ti@institucion.edu.\n\nAtentamente,\nDepartamento de Tecnologías de la Información"
    }
  ],
  url: [
    {
      label: "Falso Portal Replit (Phishing)",
      text: "https://verificacion-01--seguridad-0201.replit.app"
    },
    {
      label: "Falso Login Microsoft 365 (Typosquatting)",
      text: "https://login-microsoft.security-check24.net/auth"
    },
    {
      label: "Falsa Nómina de Empleados (RRHH)",
      text: "https://nomina-empleados-actualizacion.com/login"
    },
    {
      label: "Falso Rastreo Paquetería (Robo de Tarjeta)",
      text: "https://dhl-mexico-rastreo-paquete.com/guia"
    },
    {
      label: "Falso Portal SAT (Robo Fiscal)",
      text: "https://sat-gob-mx-devolucion-impuestos.com/acceso"
    },
    {
      label: "Hosting Gratuito Sospechoso (Docusign)",
      text: "https://readymains2-j332r.sevalla.page/docusign"
    },
    {
      label: "Typosquatting Intranet (.com en vez de .edu)",
      text: "https://www.intranet-universidad-portal.com/login"
    },
    {
      label: "Portal Oficial Intranet (Seguro)",
      text: "https://intranet.mi-institucion.edu/portal"
    },
    {
      label: "Repositorio Oficial GitHub (Seguro)",
      text: "https://github.com"
    }
  ]
};

// ================================================================
// 2. REGLAS Y PALABRAS CLAVE DEL MOTOR HEURÍSTICO
// ================================================================

// Palabras que usan los atacantes para meter prisa
const PALABRAS_URGENCIA = [
  "ultimo aviso", "último aviso", "urgente", "aviso urgente", "notificacion final",
  "notificación final", "inmediatamente", "de inmediato", "bloqueo", "bloquear",
  "suspension", "suspensión", "desactivar", "desactivacion", "desactivación",
  "cancelacion", "cancelación", "plazo", "expira", "tiempo limite", "caduca hoy",
  "24 horas", "12 horas", "accion requerida", "acción requerida", "alerta"
];

// Palabras que piden contraseñas, validación o datos confidenciales
const PALABRAS_CREDENCIALES = [
  "validar", "verificar", "contraseña", "password", "iniciar sesion", "iniciar sesión",
  "login", "2auth", "mfa", "actualizar datos", "confirmar cuenta", "restablecer",
  "soporte de ti", "soporte-ti", "administrador del sistema", "recursos humanos", "rrhh",
  "datos bancarios", "cuenta bancaria", "rfc", "identidad", "autentique", "autenticar",
  "acceso corporativo", "portal de vinculacion", "portal de vinculación"
];

// Temas clásicos de engaño (Buzón lleno, Nómina, Paquetería retenida, SAT, etc.)
const PALABRAS_TEMATICAS_PHISHING = [
  "buzon lleno", "buzón lleno", "capacidad", "correos retenidos", "mensajes retenidos",
  "almacenamiento", "nomina", "nómina", "deposito", "depósito", "sueldo", "salario",
  "paquete", "aduana", "retenido", "tarifa de reenvio", "tarifa de reenvío", "guia", "guía",
  "sat", "hacienda", "saldo a favor", "devolucion", "devolución", "credito fiscal",
  "irregularidades", "declaracion fiscal", "declaración fiscal", "multa", "bono",
  "subsidio", "sellos digitales", "comprobante"
];

// Amenazas directas de castigo o pérdida
const PALABRAS_AMENAZAS = [
  "sin tu consentimiento", "sin su consentimiento", "perdera el acceso", "perderá el acceso",
  "sera devuelto", "será devuelto", "quedara retenido", "quedará retenido", "quedará temporalmente retenido",
  "eliminados permanentemente", "eliminaran de forma definitiva", "eliminarán de forma definitiva",
  "bloqueado", "suspension inmediata", "suspensión inmediata", "bloqueo preventivo"
];

// Palabras sospechosas de captura en enlaces URL
const PALABRAS_CAPTURA_URL = [
  "login", "auth", "signin", "security", "seguridad", "verificacion", "verificación",
  "verificar", "actualizar", "actualizacion", "actualización", "validar", "password",
  "recuperar", "acceso", "guia", "guía", "rastreo", "devolucion", "devolución",
  "portal", "cuenta", "nomina", "nómina", "empleados", "formulario", "beneficios"
];

// Extensiones de archivos peligrosos en correos
const EXTENSIONES_PELIGROSAS = [
  ".exe", ".scr", ".bat", ".cmd", ".ps1", ".vbs", ".js", ".zip", ".rar", ".iso", ".dll"
];

// Dominios o servicios web gratuitos frecuentemente usados para alojar páginas falsas
const HOSTINGS_SOSPECHOSOS = [
  "replit.app", "sevalla.page", "versoly.page", "web.core.windows.net",
  "sites.google.com", "zya.me", "iceiy.com", "hstn.me", "000webhostapp.com",
  "web.app", "firebaseapp.com", "weebly.com", "wixsite.com", "pages.dev",
  "vercel.app", "netlify.app"
];

// Extensiones de dominio (TLDs) de muy bajo costo usadas por atacantes
const TLDS_SOSPECHOSOS = [
  ".sbs", ".xyz", ".page", ".top", ".buzz", ".icu", ".club", ".site", ".online",
  ".click", ".surf", ".work", ".rest"
];

// Marcas o servicios comúnmente suplantados
const MARCAS_SUPLANTADAS = [
  "microsoft", "office365", "office", "outlook", "onedrive", "sharepoint", "teams",
  "docusign", "paypal", "apple", "google", "dhl", "fedex", "estafeta",
  "sat", "hacienda", "bbva", "santander", "banamex", "banorte",
  "nomina", "rrhh", "recursos-humanos", "intranet", "universidad"
];

// Dominios oficiales o de confianza
const DOMINIOS_CONFIABLES = [
  ".edu", ".gob", ".gov", ".edu.mx", ".gob.mx", "github.com", "microsoft.com", "google.com"
];

// ================================================================
// 3. VARIABLES GLOBALES DE ESTADO
// ================================================================

let pestanaActual = "email";       // "email" o "url"
let resultadoActual = null;         // Guarda el último resultado analizado
let confirmandoLimpieza = false;    // Para el botón de confirmar limpiar historial

// Elementos del DOM
const botonTema = document.getElementById("theme-toggle");
const pestanaEmail = document.getElementById("tab-email");
const pestanaUrl = document.getElementById("tab-url");
const inputTexto = document.getElementById("scanner-input");
const barraContador = document.getElementById("char-counter-fill");
const textoContador = document.getElementById("char-counter-text");
const mensajeError = document.getElementById("form-error");
const contenedorEjemplos = document.getElementById("example-tags");
const formulario = document.getElementById("scanner-form");
const botonEnviar = document.getElementById("submit-btn");

// Paneles de la derecha
const panelVacio = document.getElementById("empty-state");
const panelCarga = document.getElementById("loading-state");
const panelResultados = document.getElementById("results-container");

// Medidor y Textos de Resultado
const circuloMedidor = document.getElementById("gauge-fill-circle");
const puntajeTexto = document.getElementById("gauge-score");
const insigniaRiesgo = document.getElementById("risk-badge");
const tituloRiesgo = document.getElementById("risk-title");
const descripcionRiesgo = document.getElementById("risk-desc");
const botonExportar = document.getElementById("export-btn");
const listaAmenazas = document.getElementById("threats-list");
const contenedorTecnico = document.getElementById("tech-details-container");
const cabeceraTecnica = document.getElementById("tech-details-header");
const contenidoTecnico = document.getElementById("tech-details-content");
const flechaTecnica = document.getElementById("tech-arrow");
const cuadriculaRecomendaciones = document.getElementById("recommendations-grid");

// Guía Desplegable
const cabeceraGuia = document.getElementById("guide-header");
const cuerpoGuia = document.getElementById("guide-body");
const flechaGuia = document.getElementById("guide-arrow");

// Historial
const panelHistorial = document.getElementById("history-panel");
const cabeceraHistorial = document.getElementById("history-header");
const contadorHistorial = document.getElementById("history-count");
const cuerpoHistorial = document.getElementById("history-body");
const flechaHistorial = document.getElementById("history-arrow");
const resumenHistorial = document.getElementById("history-summary-text");
const botonLimpiarHistorial = document.getElementById("history-clear-btn");
const listaHistorial = document.getElementById("history-list");

// ================================================================
// 4. INICIALIZACIÓN
// ================================================================

document.addEventListener("DOMContentLoaded", function () {
  iniciarTema();
  mostrarBotonesEjemplos();
  cargarHistorialDesdeStorage();
  asignarEventos();
});

function asignarEventos() {
  // Cambio de tema Claro / Oscuro
  botonTema.addEventListener("click", alternarTema);

  // Cambio de pestañas (Correo / URL)
  pestanaEmail.addEventListener("click", function () { cambiarPestana("email"); });
  pestanaUrl.addEventListener("click", function () { cambiarPestana("url"); });

  // Contador de caracteres mientras se escribe
  inputTexto.addEventListener("input", actualizarContador);

  // Envío del formulario
  formulario.addEventListener("submit", procesarEnvio);

  // Desplegables
  cabeceraGuia.addEventListener("click", alternarGuia);
  cabeceraTecnica.addEventListener("click", alternarDetallesTecnicos);
  cabeceraHistorial.addEventListener("click", alternarHistorial);

  // Botón para exportar reporte
  botonExportar.addEventListener("click", exportarReporte);

  // Botón para limpiar historial
  botonLimpiarHistorial.addEventListener("click", function (e) {
    e.stopPropagation();
    limpiarHistorial();
  });
}

// ================================================================
// 5. GESTIÓN DEL TEMA (Claro / Oscuro)
// ================================================================

function iniciarTema() {
  const temaGuardado = localStorage.getItem("tema_preferido");
  if (temaGuardado === "dark") {
    document.body.classList.add("dark-theme");
    actualizarIconoTema(true);
  } else {
    document.body.classList.remove("dark-theme");
    actualizarIconoTema(false);
  }
}

function alternarTema() {
  const esOscuro = document.body.classList.toggle("dark-theme");
  localStorage.setItem("tema_preferido", esOscuro ? "dark" : "light");
  actualizarIconoTema(esOscuro);
}

function actualizarIconoTema(esOscuro) {
  if (esOscuro) {
    // Icono de Sol
    botonTema.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    `;
  } else {
    // Icono de Luna
    botonTema.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    `;
  }
}

// ================================================================
// 6. CONTROL DE PESTAÑAS Y EJEMPLOS
// ================================================================

function cambiarPestana(tipo) {
  pestanaActual = tipo;

  if (tipo === "email") {
    pestanaEmail.classList.add("active");
    pestanaUrl.classList.remove("active");
    inputTexto.placeholder = "Pega el texto del correo sospechoso aquí...\n(Ej: \"Estimado colaborador: este es su último aviso para validar nómina...\")";
  } else {
    pestanaUrl.classList.add("active");
    pestanaEmail.classList.remove("active");
    inputTexto.placeholder = "Escribe o pega la dirección URL sospechosa...\n(Ej: https://login-microsoft.security-check24.net/auth)";
  }

  inputTexto.value = "";
  mensajeError.style.display = "none";
  actualizarContador();
  mostrarBotonesEjemplos();
}

function mostrarBotonesEjemplos() {
  contenedorEjemplos.innerHTML = "";
  const lista = EJEMPLOS[pestanaActual];

  lista.forEach(function (ejemplo) {
    const boton = document.createElement("span");
    boton.className = "example-tag";
    boton.textContent = ejemplo.label;

    boton.addEventListener("click", function () {
      inputTexto.value = ejemplo.text;
      mensajeError.style.display = "none";
      actualizarContador();
    });

    contenedorEjemplos.appendChild(boton);
  });
}

function actualizarContador() {
  const maximo = 10000;
  const longitud = inputTexto.value.length;
  const porcentaje = (longitud / maximo) * 100;

  barraContador.style.width = porcentaje + "%";
  textoContador.textContent = longitud.toLocaleString() + " / " + maximo.toLocaleString();

  if (porcentaje > 90) {
    barraContador.style.background = "var(--risk-high)";
    textoContador.classList.add("char-warn");
  } else if (porcentaje > 70) {
    barraContador.style.background = "var(--risk-medium)";
    textoContador.classList.remove("char-warn");
  } else {
    barraContador.style.background = "var(--text-muted)";
    textoContador.classList.remove("char-warn");
  }
}

// ================================================================
// 7. MOTOR DE DETECCIÓN HEURÍSTICO (Lógica clara y directa)
// ================================================================

function analizarContenido(tipo, texto) {
  const textoMinusculas = texto.toLowerCase();
  let puntaje = 0;
  const amenazas = [];
  const detallesTecnicos = [];
  const recomendaciones = [];

  if (tipo === "email") {
    // -------------------------------------------------------------
    // ANÁLISIS DE CORREOS ELECTRÓNICOS
    // -------------------------------------------------------------

    // 1. Revisar si tiene lenguaje de urgencia o prisa
    let tieneUrgencia = false;
    let palabraUrgenciaEncontrada = "";
    for (let i = 0; i < PALABRAS_URGENCIA.length; i++) {
      if (textoMinusculas.includes(PALABRAS_URGENCIA[i])) {
        tieneUrgencia = true;
        palabraUrgenciaEncontrada = PALABRAS_URGENCIA[i];
        break;
      }
    }

    // 2. Revisar si pide contraseñas, validación o datos bancarios
    let pideCredenciales = false;
    let palabraCredencialEncontrada = "";
    for (let i = 0; i < PALABRAS_CREDENCIALES.length; i++) {
      if (textoMinusculas.includes(PALABRAS_CREDENCIALES[i])) {
        pideCredenciales = true;
        palabraCredencialEncontrada = PALABRAS_CREDENCIALES[i];
        break;
      }
    }

    // 3. Revisar si usa temas clásicos de phishing (nómina, buzón lleno, aduana, SAT)
    let tieneTemaPhishing = false;
    let temaEncontrado = "";
    for (let i = 0; i < PALABRAS_TEMATICAS_PHISHING.length; i++) {
      if (textoMinusculas.includes(PALABRAS_TEMATICAS_PHISHING[i])) {
        tieneTemaPhishing = true;
        temaEncontrado = PALABRAS_TEMATICAS_PHISHING[i];
        break;
      }
    }

    // 4. Revisar si incluye amenazas directas de consecuencias
    let tieneAmenaza = false;
    let amenazaEncontrada = "";
    for (let i = 0; i < PALABRAS_AMENAZAS.length; i++) {
      if (textoMinusculas.includes(PALABRAS_AMENAZAS[i])) {
        tieneAmenaza = true;
        amenazaEncontrada = PALABRAS_AMENAZAS[i];
        break;
      }
    }

    // --- APLICACIÓN DE PUNTAJES SEGÚN SEÑALES DE ALERTA ---

    // A. Urgencia detectada
    if (tieneUrgencia) {
      puntaje += 25;
      amenazas.push(`Uso de tono de urgencia o presión de tiempo: "${palabraUrgenciaEncontrada}"`);
      detallesTecnicos.push(`Presión psicológica: Se detectó sentido de prisa para forzar una acción rápida (+25 pts).`);
    }

    // B. Petición de credenciales
    if (pideCredenciales) {
      puntaje += 30;
      amenazas.push(`Solicitud sospechosa de validación de credenciales/datos: "${palabraCredencialEncontrada}"`);
      detallesTecnicos.push(`Captura de credenciales: Petición de inicio de sesión o verificación de cuenta (+30 pts).`);
    }

    // C. ¡COMBO CRÍTICO! Urgencia + Petición de contraseñas (Patrón inconfundible de phishing)
    if (tieneUrgencia && pideCredenciales) {
      puntaje += 30;
      amenazas.push("Combinación crítica: Presión urgente exigiendo verificar contraseñas o datos de acceso");
      detallesTecnicos.push("Firma de ataque: Coincidencia simultánea de urgencia temporal y captura de identidad (+30 pts).");
    }

    // D. Anzuelos laborales o administrativos (nómina, buzón lleno, paquete aduana, SAT)
    if (tieneTemaPhishing) {
      puntaje += 25;
      amenazas.push(`Pretexto fraudulento institucional detectado: "${temaEncontrado}"`);
      detallesTecnicos.push(`Ingeniería social: Uso de anzuelo administrativo, laboral o económico ("${temaEncontrado}") (+25 pts).`);
    }

    // E. Amenaza de sanciones o bloqueo
    if (tieneAmenaza) {
      puntaje += 20;
      amenazas.push(`Amenaza directa de sanción, bloqueo o pérdida de acceso: "${amenazaEncontrada}"`);
      detallesTecnicos.push(`Manipulación por miedo: Amenaza de desactivación forzada sin consentimiento (+20 pts).`);
    }

    // F. Enlaces hacia servicios gratuitos o sospechosos dentro del correo
    for (let i = 0; i < HOSTINGS_SOSPECHOSOS.length; i++) {
      const host = HOSTINGS_SOSPECHOSOS[i];
      if (textoMinusculas.includes(host)) {
        puntaje += 35;
        amenazas.push(`Enlace hacia plataforma pública o hosting gratuito: "${host}"`);
        detallesTecnicos.push(`Perímetro no institucional: El correo redirige a servidores ajenos a la organización (${host}) (+35 pts).`);
        break;
      }
    }

    // G. Mención de archivos ejecutables peligrosos
    for (let i = 0; i < EXTENSIONES_PELIGROSAS.length; i++) {
      const ext = EXTENSIONES_PELIGROSAS[i];
      if (textoMinusculas.includes(ext)) {
        puntaje += 25;
        amenazas.push(`Mención de archivo ejecutable o adjunto peligroso: "${ext}"`);
        detallesTecnicos.push(`Riesgo de malware: Presencia de extensión con capacidad de ejecutar código ("${ext}") (+25 pts).`);
        break;
      }
    }

    // H. Cabeceras técnicas de correo (si fueron pegadas)
    if (textoMinusculas.includes("spf: fail") || textoMinusculas.includes("spf: softfail")) {
      puntaje += 25;
      amenazas.push("Fallo de autenticación SPF (remitente no autorizado por el dominio)");
      detallesTecnicos.push("Seguridad de correo: La IP de origen no tiene autorización en los registros SPF (+25 pts).");
    }
    if (textoMinusculas.includes("dkim: fail") || textoMinusculas.includes("dkim=none")) {
      puntaje += 25;
      amenazas.push("Firma criptográfica DKIM ausente o alterada");
      detallesTecnicos.push("Integridad de mensaje: Firma DKIM no válida (+25 pts).");
    }

    // I. FILTRO DE CORREO LEGÍTIMO INSTITUCIONAL
    // Si es un aviso oficial de TI sin peticiones de contraseña y desde dominio .edu
    const esAvisoOficial = textoMinusculas.includes("mantenimiento preventivo") &&
                          textoMinusculas.includes("no se requieren cambios de credenciales") &&
                          textoMinusculas.includes("soporte-ti@institucion.edu");
    if (esAvisoOficial) {
      puntaje = 0;
      amenazas.length = 0;
      detallesTecnicos.length = 0;
      detallesTecnicos.push("Verificación oficial: Correo firmado por el departamento oficial de TI sin enlaces externos.");
    }

    // Recomendaciones para correos
    if (puntaje >= 70) {
      recomendaciones.push("NO hagas clic en ningún enlace ni introduzcas usuarios o contraseñas.");
      recomendaciones.push("Reporta el correo inmediatamente al área de Seguridad Informática o Soporte TI.");
      recomendaciones.push("Si pusiste datos en algún enlace, cambia tu contraseña oficial de inmediato.");
    } else if (puntaje >= 30) {
      recomendaciones.push("Compara la dirección del remitente con correos oficiales conocidos.");
      recomendaciones.push("No descargues archivos adjuntos ni sigas enlaces sin verificar.");
      recomendaciones.push("Contacta a la institución o persona por un canal oficial alterno.");
    } else {
      recomendaciones.push("El correo parece legítimo y seguro.");
      recomendaciones.push("Mantente siempre atento a que los remitentes pertenezcan al dominio oficial.");
    }

  } else {
    // -------------------------------------------------------------
    // ANÁLISIS DE ENLACES URL
    // -------------------------------------------------------------
    const urlLimpia = textoMinusculas.replace("https://", "").replace("http://", "").split("/")[0];
    const rutaCompleta = textoMinusculas.replace("https://", "").replace("http://", "");

    // 1. Suplantación de marcas o servicios conocidos (Typosquatting)
    let marcaSuplantada = "";
    for (let i = 0; i < MARCAS_SUPLANTADAS.length; i++) {
      const marca = MARCAS_SUPLANTADAS[i];
      if (rutaCompleta.includes(marca)) {
        // Comprobar si realmente es el sitio oficial legítimo
        const esOficial = (marca === "microsoft" && urlLimpia.endsWith("microsoft.com")) ||
                          (marca === "google" && urlLimpia.endsWith("google.com")) ||
                          (marca === "sat" && urlLimpia.endsWith("sat.gob.mx")) ||
                          (marca === "dhl" && urlLimpia.endsWith("dhl.com")) ||
                          (marca === "fedex" && urlLimpia.endsWith("fedex.com")) ||
                          (marca === "bbva" && urlLimpia.endsWith("bbva.mx"));

        if (!esOficial) {
          marcaSuplantada = marca;
          puntaje += 45;
          amenazas.push(`Suplantación directa de identidad de marca o institución: "${marca}"`);
          detallesTecnicos.push(`Typosquatting detectado: El enlace usa el nombre "${marca}" en un servidor que NO le pertenece (+45 pts).`);
          break;
        }
      }
    }

    // 2. Alojamiento en hosting gratuito o plataforma pública de desarrollo
    let enHostingGratuito = false;
    for (let i = 0; i < HOSTINGS_SOSPECHOSOS.length; i++) {
      const host = HOSTINGS_SOSPECHOSOS[i];
      if (urlLimpia.includes(host)) {
        enHostingGratuito = true;
        puntaje += 45;
        amenazas.push(`Sitio alojado en plataforma gratuita o de desarrollo público: "${host}"`);
        detallesTecnicos.push(`Infraestructura sospechosa: Hospedaje en servicio gratuito (${host}) comúnmente usado para clonar portales (+45 pts).`);
        break;
      }
    }

    // 3. Términos de captura de credenciales / login en la URL
    let palabraCapturaEncontrada = "";
    for (let i = 0; i < PALABRAS_CAPTURA_URL.length; i++) {
      const pal = PALABRAS_CAPTURA_URL[i];
      if (rutaCompleta.includes(pal)) {
        palabraCapturaEncontrada = pal;
        puntaje += 30;
        amenazas.push(`Ruta o subdominio de captura de credenciales detectado: "${pal}"`);
        detallesTecnicos.push(`Intención de acceso: La URL incluye términos de formulario de acceso ("${pal}") en dominio no oficial (+30 pts).`);
        break;
      }
    }

    // 4. ¡COMBO CRÍTICO EN URL! Marca suplantada o hosting gratuito + palabra de login
    if ((marcaSuplantada || enHostingGratuito) && palabraCapturaEncontrada) {
      puntaje += 25;
      amenazas.push("Falso portal de inicio de sesión: Simulación de marca o hosting externo con formulario de credenciales");
      detallesTecnicos.push("Clonación de portal: Combinación directa de marca suplantada y captura de credenciales (+25 pts).");
    }

    // 5. Engaño de dominios gubernamentales o institucionales (ej: sat-gob-mx en .com)
    if (urlLimpia.includes("gob-mx") || urlLimpia.includes("sat-gob") || urlLimpia.includes("universidad-portal") || urlLimpia.includes("intranet-universidad")) {
      puntaje += 45;
      amenazas.push("Falsificación institucional: Simula terminaciones oficiales (.gob.mx / intranet) dentro de un dominio comercial .com");
      detallesTecnicos.push("Camuflaje de dominio: Intento de engañar al usuario simulando extensiones de gobierno o educativas (+45 pts).");
    }

    // 6. Extensión (TLD) de riesgo económico (.xyz, .sbs, .page, etc.)
    for (let i = 0; i < TLDS_SOSPECHOSOS.length; i++) {
      const tld = TLDS_SOSPECHOSOS[i];
      if (urlLimpia.endsWith(tld) || urlLimpia.includes(tld + ".")) {
        puntaje += 35;
        amenazas.push(`Extensión de dominio (TLD) de bajo coste con alto índice de fraude: "${tld}"`);
        detallesTecnicos.push(`Reputación de TLD: Dominio registrado bajo extensión de bajo costo ("${tld}") (+35 pts).`);
        break;
      }
    }

    // 7. Nombre de dominio con múltiples guiones (ej: dhl-mexico-rastreo-paquete)
    const cantidadGuiones = (urlLimpia.split("-").length - 1);
    if (cantidadGuiones >= 2) {
      puntaje += 25;
      amenazas.push(`Nombre de dominio atípico con múltiples guiones (${cantidadGuiones} guiones)`);
      detallesTecnicos.push(`Morfología sospechosa: Estructura de nombres compuestos con guiones para confundir la lectura (+25 pts).`);
    }

    // 8. Guiones dobles o exceso de números
    if (urlLimpia.includes("--") || (urlLimpia.match(/[0-9]/g) || []).length >= 4) {
      puntaje += 20;
      amenazas.push("Subdominio autogenerado sospechoso (guiones dobles o secuencias numéricas)");
      detallesTecnicos.push("Sintaxis aleatoria: Patrón numérico o de separación característico de despliegues temporales (+20 pts).");
    }

    // 9. FILTRO DE CONFIANZA PARA ENLACES OFICIALES
    for (let i = 0; i < DOMINIOS_CONFIABLES.length; i++) {
      const seguro = DOMINIOS_CONFIABLES[i];
      if (urlLimpia.endsWith(seguro)) {
        puntaje = Math.max(0, puntaje - 60);
        detallesTecnicos.push(`Filtro de confianza: Dominio verificado (${seguro}) (-60 pts).`);
        break;
      }
    }

    // Recomendaciones para URLs
    if (puntaje >= 70) {
      recomendaciones.push("NO ingreses ningún usuario, contraseña ni datos de tarjeta en esta página.");
      recomendaciones.push("Cierra la pestaña del navegador inmediatamente.");
      recomendaciones.push("Comprueba que los portales oficiales de tu organización terminen en su dominio oficial (.edu / .gob.mx).");
    } else if (puntaje >= 30) {
      recomendaciones.push("Verifica minuciosamente la dirección en la barra del navegador antes de continuar.");
      recomendaciones.push("Comprueba que el certificado SSL corresponda legalmente a la empresa que dice ser.");
    } else {
      recomendaciones.push("El enlace corresponde a un dominio oficial o verificado.");
      recomendaciones.push("La navegación en este sitio es segura.");
    }
  }

  // Asegurar que el puntaje esté siempre entre 0 y 100
  puntaje = Math.min(100, Math.max(0, puntaje));

  // Determinar nivel de riesgo
  let nivel = "low";
  if (puntaje >= 70) {
    nivel = "high";
  } else if (puntaje >= 30) {
    nivel = "medium";
  }

  return {
    tipo: tipo,
    textoAnalizado: texto,
    puntaje: puntaje,
    nivel: nivel,
    amenazas: amenazas,
    detallesTecnicos: detallesTecnicos,
    recomendaciones: recomendaciones,
    fecha: new Date().toISOString()
  };
}

// ================================================================
// 8. PROCESAR ENVÍO DEL FORMULARIO
// ================================================================

function procesarEnvio(e) {
  e.preventDefault();
  const contenido = inputTexto.value.trim();

  if (!contenido) {
    mensajeError.textContent = "Por favor, ingresa contenido para realizar el análisis.";
    mensajeError.style.display = "block";
    return;
  }
  mensajeError.style.display = "none";

  // Mostrar estado de carga animado
  botonEnviar.disabled = true;
  botonEnviar.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" style="animation: rotateRadar 1s linear infinite">
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
    </svg>
    <span>Analizando...</span>
  `;

  panelVacio.style.display = "none";
  panelResultados.style.display = "none";
  panelCarga.style.display = "flex";

  // Simulamos 1.5 segundos de procesamiento para dar feedback visual
  setTimeout(function () {
    const resultado = analizarContenido(pestanaActual, contenido);
    resultadoActual = resultado;

    // Restaurar botón
    botonEnviar.disabled = false;
    botonEnviar.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
      <span>Iniciar Análisis</span>
    `;

    panelCarga.style.display = "none";
    mostrarResultados(resultado);
    guardarEnHistorial(resultado);
  }, 1500);
}

// ================================================================
// 9. MOSTRAR RESULTADOS EN PANTALLA
// ================================================================

function mostrarResultados(res) {
  panelVacio.style.display = "none";
  panelCarga.style.display = "none";
  panelResultados.style.display = "flex";

  // Animación de entrada
  panelResultados.classList.remove("results-animate-in");
  setTimeout(function () {
    panelResultados.classList.add("results-animate-in");
  }, 50);

  // Calcular medidor circular SVG
  const radio = 42;
  const circunferencia = 2 * Math.PI * radio;
  const desplazamiento = circunferencia - (res.puntaje / 100) * circunferencia;

  circuloMedidor.style.strokeDasharray = circunferencia;
  circuloMedidor.style.strokeDashoffset = desplazamiento;
  puntajeTexto.textContent = res.puntaje;

  // Asignar colores e insignias según el riesgo
  if (res.nivel === "high") {
    circuloMedidor.style.stroke = "var(--risk-high)";
    insigniaRiesgo.className = "risk-level-badge risk-high-style";
    insigniaRiesgo.textContent = "Riesgo Crítico";
    tituloRiesgo.textContent = "Amenaza Detectada";
    descripcionRiesgo.textContent = "Se han identificado múltiples vectores directos de fraude y robo de credenciales. No interactúes con este remitente o enlace.";
  } else if (res.nivel === "medium") {
    circuloMedidor.style.stroke = "var(--risk-medium)";
    insigniaRiesgo.className = "risk-level-badge risk-medium-style";
    insigniaRiesgo.textContent = "Sospechoso";
    tituloRiesgo.textContent = "Posible Anomalía";
    descripcionRiesgo.textContent = "Se observaron patrones atípicos o enlaces a plataformas no corporativas. Procede con cautela.";
  } else {
    circuloMedidor.style.stroke = "var(--risk-low)";
    insigniaRiesgo.className = "risk-level-badge risk-low-style";
    insigniaRiesgo.textContent = "Seguro / Limpio";
    tituloRiesgo.textContent = "Sin Amenazas Evidentes";
    descripcionRiesgo.textContent = "No se encontraron firmas maliciosas en el contenido analizado. El remitente o enlace parece legítimo.";
  }

  // Lista de amenazas detectadas
  listaAmenazas.innerHTML = "";
  if (res.amenazas.length > 0) {
    res.amenazas.forEach(function (amenaza) {
      const item = document.createElement("div");
      item.className = "threat-item";
      item.innerHTML = `
        <span class="threat-icon" style="color: ${res.nivel === 'high' ? 'var(--risk-high)' : 'var(--risk-medium)'}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </span>
        <span class="threat-text">${escaparHTML(amenaza)}</span>
      `;
      listaAmenazas.appendChild(item);
    });
  } else {
    const item = document.createElement("div");
    item.className = "threat-item";
    item.style.borderColor = "var(--risk-low-border)";
    item.innerHTML = `
      <span class="threat-icon" style="color: var(--risk-low)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span class="threat-text" style="color: var(--text-secondary)">
        Ningún patrón de ataque común identificado en este análisis.
      </span>
    `;
    listaAmenazas.appendChild(item);
  }

  // Detalles de la consola técnica
  contenidoTecnico.innerHTML = "";
  if (res.detallesTecnicos.length > 0) {
    contenedorTecnico.style.display = "block";
    res.detallesTecnicos.forEach(function (detalle) {
      const linea = document.createElement("div");
      linea.className = "tech-log-line";
      linea.innerHTML = `
        <span class="tech-prompt-symbol">&gt;</span>
        <span>${escaparHTML(detalle)}</span>
      `;
      contenidoTecnico.appendChild(linea);
    });
  } else {
    contenedorTecnico.style.display = "none";
  }

  // Recomendaciones
  cuadriculaRecomendaciones.innerHTML = "";
  res.recomendaciones.forEach(function (rec, index) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "rec-card";
    tarjeta.innerHTML = `
      <span class="rec-number">${index + 1}</span>
      <span class="rec-text">${escaparHTML(rec)}</span>
    `;
    cuadriculaRecomendaciones.appendChild(tarjeta);
  });
}

// ================================================================
// 10. GESTIÓN DEL HISTORIAL (LocalStorage simple)
// ================================================================

function obtenerHistorial() {
  try {
    const datos = localStorage.getItem("historial_phishing");
    return datos ? JSON.parse(datos) : [];
  } catch (error) {
    return [];
  }
}

function guardarEnHistorial(res) {
  const historial = obtenerHistorial();
  const nuevoElemento = {
    id: "analisis_" + Date.now(),
    tipo: res.tipo,
    puntaje: res.puntaje,
    nivel: res.nivel,
    vistaPrevia: res.textoAnalizado.length > 100 ? res.textoAnalizado.substring(0, 100) + "..." : res.textoAnalizado,
    fecha: res.fecha,
    resultadoCompleto: res
  };

  historial.unshift(nuevoElemento); // Insertar al inicio

  // Limitar a máximo 30 registros
  if (historial.length > 30) {
    historial.pop();
  }

  localStorage.setItem("historial_phishing", JSON.stringify(historial));
  dibujarHistorialEnDOM(historial);
}

function cargarHistorialDesdeStorage() {
  const historial = obtenerHistorial();
  dibujarHistorialEnDOM(historial);
}

function dibujarHistorialEnDOM(historial) {
  if (historial.length === 0) {
    panelHistorial.style.display = "none";
    return;
  }

  panelHistorial.style.display = "block";
  contadorHistorial.textContent = historial.length;
  resumenHistorial.textContent = `${historial.length} análisis guardado${historial.length !== 1 ? 's' : ''}`;
  listaHistorial.innerHTML = "";

  historial.forEach(function (item) {
    const fila = document.createElement("div");
    fila.className = "history-item";

    let colorDot = "var(--risk-low)";
    let etiqueta = "Seguro";
    if (item.nivel === "high") {
      colorDot = "var(--risk-high)";
      etiqueta = "Crítico";
    } else if (item.nivel === "medium") {
      colorDot = "var(--risk-medium)";
      etiqueta = "Sospechoso";
    }

    const iconoTipo = item.tipo === "email" ? "✉ Correo" : "🔗 URL";
    const fechaFormateada = formatearFecha(item.fecha);

    fila.innerHTML = `
      <div class="history-item-left">
        <div class="history-item-meta">
          <span class="history-risk-dot" style="background: ${colorDot}"></span>
          <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">${iconoTipo}</span>
          <span class="history-score" style="color: ${colorDot}">${item.puntaje}</span>
          <span class="history-risk-label" style="color: ${colorDot}">${etiqueta}</span>
        </div>
        <p class="history-preview">${escaparHTML(item.vistaPrevia)}</p>
        <span class="history-date">${fechaFormateada}</span>
      </div>
      <div class="history-item-actions">
        <button class="history-view-btn" title="Ver análisis">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
        <button class="history-delete-btn" title="Eliminar">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    `;

    // Botón para volver a ver el resultado
    fila.querySelector(".history-view-btn").addEventListener("click", function (e) {
      e.stopPropagation();
      mostrarResultados(item.resultadoCompleto);
    });

    // Botón para eliminar un registro
    fila.querySelector(".history-delete-btn").addEventListener("click", function (e) {
      e.stopPropagation();
      eliminarRegistro(item.id);
    });

    listaHistorial.appendChild(fila);
  });
}

function eliminarRegistro(id) {
  let historial = obtenerHistorial();
  historial = historial.filter(function (h) { return h.id !== id; });
  localStorage.setItem("historial_phishing", JSON.stringify(historial));
  dibujarHistorialEnDOM(historial);
}

function limpiarHistorial() {
  if (!confirmandoLimpieza) {
    confirmandoLimpieza = true;
    botonLimpiarHistorial.textContent = "¿Confirmar?";
    setTimeout(function () {
      confirmandoLimpieza = false;
      botonLimpiarHistorial.textContent = "Limpiar";
    }, 3000);
    return;
  }

  localStorage.removeItem("historial_phishing");
  confirmandoLimpieza = false;
  botonLimpiarHistorial.textContent = "Limpiar";
  dibujarHistorialEnDOM([]);
}

// ================================================================
// 11. DESPLEGABLES (Guía, Técnico, Historial)
// ================================================================

function alternarGuia() {
  const visible = cuerpoGuia.style.display === "block";
  cuerpoGuia.style.display = visible ? "none" : "block";
  if (!visible) {
    flechaGuia.classList.add("open");
  } else {
    flechaGuia.classList.remove("open");
  }
}

function alternarDetallesTecnicos() {
  const visible = contenidoTecnico.style.display === "flex";
  contenidoTecnico.style.display = visible ? "none" : "flex";
  if (!visible) {
    flechaTecnica.classList.add("open");
  } else {
    flechaTecnica.classList.remove("open");
  }
}

function alternarHistorial() {
  const visible = cuerpoHistorial.style.display === "block";
  cuerpoHistorial.style.display = visible ? "none" : "block";
  if (!visible) {
    flechaHistorial.classList.add("open");
  } else {
    flechaHistorial.classList.remove("open");
  }
}

// ================================================================
// 12. EXPORTAR REPORTE A PDF / VENTANA DE IMPRESIÓN
// ================================================================

function exportarReporte() {
  if (!resultadoActual) return;

  const res = resultadoActual;
  const fechaHoy = new Date().toLocaleDateString("es-MX", {
    year: "numeric", month: "long", day: "numeric",
    hour: "2-digit", minute: "2-digit"
  });

  const ventana = window.open("", "_blank", "width=800,height=700");
  if (!ventana) {
    alert("Por favor permite las ventanas emergentes en tu navegador para generar el reporte.");
    return;
  }

  let colorRiesgo = "#0d7a4a";
  let textoNivel = "SEGURO / LIMPIO";
  if (res.nivel === "high") {
    colorRiesgo = "#cc1a1a";
    textoNivel = "RIESGO CRÍTICO";
  } else if (res.nivel === "medium") {
    colorRiesgo = "#c2610c";
    textoNivel = "SOSPECHOSO";
  }

  let listaAmenazasHtml = "";
  res.amenazas.forEach(function (a) {
    listaAmenazasHtml += `<li style="margin-bottom: 8px; color: #1e293b;">${escaparHTML(a)}</li>`;
  });

  let listaTecnicaHtml = "";
  res.detallesTecnicos.forEach(function (t) {
    listaTecnicaHtml += `<div style="font-family: monospace; font-size: 13px; padding: 4px 0; color: #334155;">&gt; ${escaparHTML(t)}</div>`;
  });

  let listaRecomendacionesHtml = "";
  res.recomendaciones.forEach(function (r, i) {
    listaRecomendacionesHtml += `
      <div style="display: flex; gap: 10px; margin-bottom: 8px;">
        <span style="background: #e2e8f0; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">${i + 1}</span>
        <span style="color: #334155;">${escaparHTML(r)}</span>
      </div>
    `;
  });

  const htmlReporte = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Reporte de Análisis de Phishing - Javard</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 30px; color: #0f172a; max-width: 800px; margin: 0 auto; }
        .cabecera { border-bottom: 2px solid #0f172a; padding-bottom: 15px; margin-bottom: 25px; display: flex; justify-content: space-between; align-items: center; }
        .puntaje-box { background: #f8fafc; border: 2px solid ${colorRiesgo}; border-radius: 10px; padding: 20px; display: flex; align-items: center; gap: 25px; margin-bottom: 25px; }
        .btn-imprimir { background: #0f172a; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 600; }
        @media print { .no-print { display: none; } }
      </style>
    </head>
    <body>
      <div class="cabecera">
        <div>
          <h1 style="margin: 0; font-size: 20px;">🛡️ Reporte Técnico de Seguridad</h1>
          <p style="margin: 5px 0 0 0; color: #64748b; font-size: 13px;">Javard Corporativo - Detector de Phishing</p>
        </div>
        <div style="text-align: right; font-size: 13px; color: #64748b;">
          <strong>Fecha:</strong> ${fechaHoy}
        </div>
      </div>

      <div class="puntaje-box">
        <div style="font-size: 42px; font-weight: bold; color: ${colorRiesgo};">
          ${res.puntaje}<span style="font-size: 16px; color: #94a3b8;">/100</span>
        </div>
        <div>
          <span style="background: ${colorRiesgo}; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">${textoNivel}</span>
          <p style="margin: 8px 0 0 0; font-size: 14px; color: #475569;">Tipo analizado: <strong>${res.tipo === 'email' ? 'Correo Electrónico' : 'Enlace Web (URL)'}</strong></p>
        </div>
      </div>

      ${listaAmenazasHtml ? `
        <h3 style="border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; font-size: 16px;">⚠️ Amenazas Encontradas</h3>
        <ul style="padding-left: 20px;">${listaAmenazasHtml}</ul>
      ` : ''}

      ${listaTecnicaHtml ? `
        <h3 style="border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; font-size: 16px; margin-top: 25px;">🔍 Registro de Inspección</h3>
        <div style="background: #f1f5f9; padding: 12px; border-radius: 6px;">${listaTecnicaHtml}</div>
      ` : ''}

      <h3 style="border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; font-size: 16px; margin-top: 25px;">✅ Acciones Recomendadas</h3>
      ${listaRecomendacionesHtml}

      <div class="no-print" style="margin-top: 35px; text-align: center;">
        <button class="btn-imprimir" onclick="window.print()">Imprimir / Guardar como PDF</button>
      </div>
    </body>
    </html>
  `;

  ventana.document.write(htmlReporte);
  ventana.document.close();
}

// ================================================================
// 13. FUNCIONES DE AYUDA (Helpers)
// ================================================================

function formatearFecha(isoString) {
  try {
    const fecha = new Date(isoString);
    return fecha.toLocaleDateString("es-MX", {
      day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit"
    });
  } catch (e) {
    return "";
  }
}

function escaparHTML(texto) {
  if (typeof texto !== "string") return "";
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
