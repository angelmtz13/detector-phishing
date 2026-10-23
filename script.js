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
      label: "Reactivación de Cuenta (Outlook)",
      text: "ASUNTO: Reactiva tu cuenta de correo\n\nTu cuenta de Outlook será suspendida por inactividad. Ingresa y confirma tu cuenta ahora para no perder tus mensajes:\nreactivarcuentaemailoutl0ok.hstn.me\n\nEquipo de soporte de correo"
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
      label: "Becas SEP Falsas (Estudiantes)",
      text: "ASUNTO: Registro de beca de excelencia 2026 - Último llamado\n\nEstimado alumno:\nHas sido preseleccionado para la beca de apoyo económico. Para recibir tu depósito debes confirmar tu cuenta institucional y subir tu credencial antes de 48 horas, de lo contrario perderás el beneficio.\n\nRegistro: https://becas-sep-alumnos.weebly.com/registro\n\nControl Escolar"
    },
    {
      label: "Reinscripción con Adeudo (Formulario)",
      text: "ASUNTO: Aviso de adeudo - Reinscripción bloqueada\n\nSe detectó un adeudo en tu cuenta de colegiatura. Tu reinscripción será suspendida hoy. Actualiza tus datos y contraseña del portal en este formulario:\nhttps://forms.gle/Xy7kQ2reinscripcion\n\nDepartamento de Servicios Escolares"
    },
    {
      label: "Convocatoria Real con Enlace Institucional (Legítimo)",
      text: "Estimados alumnos:\n\nSe abre la convocatoria de becas de excelencia del semestre. El plazo de registro es del 5 al 20 del mes. Consulta los requisitos y el calendario en el portal oficial de la institución:\nhttps://alumnos.mi-institucion.edu.mx/becas\n\nAtentamente,\nCoordinación de Becas"
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
      label: "Reactivar Cuenta Outlook (hstn.me)",
      text: "reactivarcuentaemailoutl0ok.hstn.me"
    },
    {
      label: "Ingreso Urgente (iceiy.com)",
      text: "ingreso-urgente.iceiy.com/"
    },
    {
      label: "Falso Azure Blob (Weebly)",
      text: "storageazblobsecurity.weebly.com"
    },
    {
      label: "Confirmar Cuenta MSN (ucoz.net)",
      text: "https://cuentamsn2026validaciones.ucoz.net/index.html"
    },
    {
      label: "Enlace Acortado (goo.su)",
      text: "https://goo.su/FU3rGS"
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
      label: "Falso Banco Galicia (marca en la ruta)",
      text: "https://certificazi.one/galicia-personas/"
    },
    {
      label: "Falsas Becas Benito Juárez (.xyz)",
      text: "https://becas-benito-juarez-registro.xyz/alumnos"
    },
    {
      label: "Falso Moodle / Aula Virtual (.top)",
      text: "https://moodle-aulavirtual-acceso.top/login"
    },
    {
      label: "Formulario Público de Reinscripción",
      text: "https://docs.google.com/forms/d/e/1FAIpQLSd-reinscripcion-2026/viewform"
    },
    {
      label: "Portal UNAM Oficial (Seguro)",
      text: "https://www.unam.mx"
    },
    {
      label: "Cuenta Microsoft Oficial (Seguro)",
      text: "https://account.microsoft.com/family"
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

const URL_ACCION = [
  "reactiv", "ingres", "confirm", "valid", "verific", "verify", "actualiz", "update",
  "recuper", "recover", "restabl", "restor", "desbloque", "unlock", "desactiv", "renov",
  "mantener", "autentic", "acceso", "login", "logon", "signin", "sign-in", "account",
  "cuenta", "password", "contrasena", "clave", "secure", "security", "seguridad",
  "protect", "soporte", "support", "helpdesk", "billing", "pago", "factura", "reclam",
  "claim", "webmail", "credencial", "identidad", "certific", "token", "homebanking",
  "home-banking", "banca"
];

const URL_URGENCIA = [
  "urgent", "inmediat", "ultimo", "final", "alerta", "alert", "aviso", "suspend",
  "bloque", "blocked", "expira", "critic", "importante", "limit", "restring"
];

const URL_TEMA = [
  "email", "correo", "mail", "outlook", "msn", "hotmail", "office", "o365", "onedrive",
  "sharepoint", "azure", "azblob", "blob", "storage", "docusign", "nomina", "rrhh",
  "beca", "bono", "subsidio", "hacienda", "devoluc", "paquete", "rastreo", "tracking",
  "intranet", "universidad", "campus", "classroom", "alumno", "estudiante",
  "docente", "institucion", "sat|", "banco", "banca", "tarjeta", "prestamo", "credito",
  "clientes", "personas|", "homebanking", "afore", "seguro|"
];

const MAIL_URGENCIA = [
  "ultimo aviso", "aviso final", "urgent", "inmediat", "de inmediato", "notificacion final",
  "accion requerida", "accion inmediata", "alerta", "plazo", "expira", "expirar", "vence",
  "caduca", "tiempo limite", "antes de las", "hoy mismo", "ultima oportunidad",
  "24 horas", "48 horas", "12 horas", "72 horas", "de lo contrario", "de no "
];

const MAIL_CREDENCIALES = [
  "validar", "valide", "validacion", "verificar", "verifique", "verificacion",
  "contrasena", "password", "iniciar sesion", "inicie sesion", "login", "2auth", "mfa",
  "actualizar datos", "actualicen sus datos", "actualice sus datos", "confirmar cuenta",
  "confirme su cuenta", "confirma tu cuenta", "reactiv", "restablecer su", "restablecer tu", "restablezca", "datos bancarios",
  "cuenta bancaria", "rfc", "curp", "nip", "cvv", "tarjeta", "credenciales", "identidad",
  "autentic", "vincul", "ingrese", "ingresa ", "acceda", "accede ", "clic", "click",
  "haga clic", "haz clic", "enlace"
];

const MAIL_TEMA = [
  "buzon", "capacidad", "almacenamiento", "retenido", "retenidos", "nomina", "deposito",
  "sueldo", "salario", "paquete", "aduana", "reenvio", "envio", "guia de", "hacienda",
  "sat|", "saldo a favor", "devolucion", "credito fiscal", "irregularidad", "declaracion",
  "multa", "sellos digitales", "bono", "subsidio", "beca", "premio", "ganador", "herencia",
  "factura", "comprobante", "terminos y condiciones", "actividad inusual", "acceso inusual",
  "accesos inusuales", "inactividad", "inusual", "migracion", "nuevos terminos"
];

const MAIL_TEMA_EDU = [
  "beca", "reinscripcion", "inscripcion", "calificaciones", "kardex", "boleta", "constancia",
  "titulacion", "servicio social", "colegiatura", "adeudo", "cuota", "biblioteca", "licencia",
  "cuenta institucional", "correo institucional", "plataforma", "aula virtual", "moodle",
  "classroom", "microsoft 365", "office 365", "google workspace", "credencial", "convocatoria",
  "apoyo economico", "tarjeta bienestar", "estudiantes", "alumnos", "docentes", "academico",
  "intercambio", "practicas profesionales", "bolsa de trabajo", "ceneval", "examen"
];

const MAIL_AMENAZAS = [
  "sin tu consentimiento", "sin su consentimiento", "perdera el acceso", "perdera acceso",
  "perder el acceso", "perdera sus", "sera devuelto", "sera suspendid", "sera desactivad",
  "sera bloquead", "quedara retenido", "quedara temporalmente", "eliminad", "eliminar",
  "definitiva", "permanente", "bloqueo", "suspension", "suspendid", "desactivar",
  "desactivaremos", "cancelacion", "cancelada", "multa", "sancion", "penalizacion"
];

const MAIL_SALUDO_GENERICO = [
  "estimado usuario", "estimado cliente", "estimado colaborador", "estimado contribuyente",
  "estimado: ", "estimado miembro", "querido usuario", "apreciable usuario", "dear user",
  "dear customer", "direccion_de_correo"
];

const EXTENSIONES_PELIGROSAS = [
  ".exe", ".scr", ".bat", ".cmd", ".ps1", ".vbs", ".js", ".jar", ".msi", ".zip", ".rar",
  ".7z", ".iso", ".img", ".dll", ".lnk", ".docm", ".xlsm", ".html", ".htm"
];

const ACORTADORES = [
  "goo.su", "bit.ly", "tinyurl.com", "cutt.ly", "is.gd", "t.ly", "rebrand.ly", "ow.ly",
  "shorturl.at", "tiny.cc", "rb.gy", "t.co", "buff.ly", "lnkd.in", "s.id", "v.gd",
  "clck.ru", "qr.ae", "adf.ly", "soo.gd", "l.ead.me", "bl.ink", "short.io", "urlz.fr"
];

const HOSTINGS_GRATUITOS = [
  "replit.app", "replit.dev", "repl.co", "sevalla.page", "versoly.page", "weebly.com",
  "wixsite.com", "wix.com", "webflow.io", "framer.app", "framer.website", "carrd.co",
  "godaddysites.com", "mystrikingly.com", "jimdofree.com", "blogspot.com", "wordpress.com",
  "github.io", "gitlab.io", "glitch.me", "pages.dev", "workers.dev", "vercel.app",
  "netlify.app", "surge.sh", "web.app", "firebaseapp.com", "herokuapp.com", "onrender.com",
  "ngrok.io", "ngrok-free.app", "trycloudflare.com", "web.core.windows.net",
  "blob.core.windows.net", "sites.google.com", "notion.site", "canva.site",
  "000webhostapp.com", "infinityfreeapp.com", "infinityfree.com", "epizy.com", "rf.gd",
  "byethost.com", "zya.me", "iceiy.com", "hstn.me", "ucoz.net", "ucoz.com", "ucoz.org",
  "ucoz.ru", "x10.mx", "x10host.com", "freehosting.com", "42web.io", "wuaze.com",
  "great-site.net", "lovestoblog.com", "free.nf", "kesug.com", "rf.gd", "unaux.com",
  "bravenet.com", "yolasite.com", "mobirisesite.com", "angelfire.com", "tripod.com",
  "page.link", "forms.gle", "typedream.app", "bubbleapps.io", "softr.app", "odoo.com"
];

const TLDS_SOSPECHOSOS = [
  ".sbs", ".xyz", ".top", ".buzz", ".icu", ".club", ".site", ".online", ".click", ".surf",
  ".work", ".rest", ".su", ".tk", ".ml", ".ga", ".cf", ".gq", ".cam", ".monster", ".cyou",
  ".cfd", ".lol", ".vip", ".live", ".shop", ".store", ".website", ".space", ".fun", ".bid",
  ".win", ".loan", ".zip", ".mov", ".ru", ".cn", ".pw", ".xin", ".bond", ".help",
  ".beauty", ".autos", ".boats", ".quest", ".mom", ".today", ".world"
];

const TLDS_MODERADOS = [
  ".one", ".link", ".life", ".digital", ".tech", ".pro", ".agency", ".center", ".support",
  ".services", ".solutions", ".cloud", ".info", ".biz", ".cc"
];

const TLDS_COMERCIALES = [".com", ".net", ".org", ".info", ".biz", ".co", ".me", ".us"];

const SEGUNDO_NIVEL = ["com", "org", "net", "edu", "gob", "gov", "co", "ac", "mil"];

const PALABRAS_INSTITUCIONALES = [
  "universidad", "instituto", "colegio", "escuela", "intranet", "campus", "alumno",
  "estudiante", "docente", "academico", "politecnico", "tecnologico", "preparatoria"
];

const RUTAS_SENSIBLES = [
  "login", "signin", "auth", "verify", "verificar", "validar", "account", "cuenta",
  "update", "actualizar", "recover", "password", "secure", "webmail", "owa", "docusign"
];

const MARCAS = [
  { nombre: "Microsoft/Outlook", raices: ["microsoft", "outlook", "office365", "office", "msn", "hotmail", "onedrive", "sharepoint", "azure", "azblob", "o365", "windowslive"], oficiales: ["microsoft.com", "microsoftonline.com", "office.com", "office365.com", "outlook.com", "live.com", "msn.com", "hotmail.com", "sharepoint.com", "onedrive.com", "azure.com", "windows.com", "microsoft.us"] },
  { nombre: "Google", raices: ["google", "gmail", "gdrive"], oficiales: ["google.com", "gmail.com", "google.com.mx", "goo.gl", "googleusercontent.com"] },
  { nombre: "Apple/iCloud", raices: ["icloud", "appleid", "apple"], oficiales: ["apple.com", "icloud.com"] },
  { nombre: "DocuSign", raices: ["docusign"], oficiales: ["docusign.com", "docusign.net"] },
  { nombre: "PayPal", raices: ["paypal"], oficiales: ["paypal.com", "paypal.me"] },
  { nombre: "DHL", raices: ["dhl"], oficiales: ["dhl.com", "dhl.com.mx"] },
  { nombre: "FedEx", raices: ["fedex"], oficiales: ["fedex.com", "fedex.com.mx"] },
  { nombre: "Estafeta", raices: ["estafeta"], oficiales: ["estafeta.com", "estafeta.com.mx"] },
  { nombre: "Amazon", raices: ["amazon"], oficiales: ["amazon.com", "amazon.com.mx", "amazon.es"] },
  { nombre: "Mercado Libre", raices: ["mercadolibre", "mercadopago"], oficiales: ["mercadolibre.com", "mercadolibre.com.mx", "mercadopago.com", "mercadopago.com.mx"] },
  { nombre: "Facebook/Meta", raices: ["facebook", "instagram", "whatsapp"], oficiales: ["facebook.com", "instagram.com", "whatsapp.com", "meta.com", "fb.com"] },
  { nombre: "Netflix", raices: ["netflix"], oficiales: ["netflix.com"] },
  { nombre: "BBVA", raices: ["bbva"], oficiales: ["bbva.mx", "bbva.com", "bbva.es"] },
  { nombre: "Santander", raices: ["santander"], oficiales: ["santander.com.mx", "santander.com"] },
  { nombre: "Banorte", raices: ["banorte"], oficiales: ["banorte.com"] },
  { nombre: "Banamex/Citi", raices: ["banamex", "citibanamex"], oficiales: ["banamex.com", "citibanamex.com", "citi.com"] },
  { nombre: "HSBC", raices: ["hsbc"], oficiales: ["hsbc.com.mx", "hsbc.com"] },
  { nombre: "SAT / Gobierno de México", raices: ["sat|", "hacienda", "gobmx", "gob-mx", "sat-gob", "satgob", "imss", "infonavit"], oficiales: ["sat.gob.mx", "gob.mx", "imss.gob.mx", "infonavit.org.mx"] },
  { nombre: "Banco Galicia", raices: ["galicia"], oficiales: ["bancogalicia.com", "bancogalicia.com.ar", "galicia.ar"] },
  { nombre: "Banco Nación / Banco Provincia", raices: ["banconacion", "bancoprovincia", "bapro|"], oficiales: ["bna.com.ar", "bancon.com.ar", "bancoprovincia.com.ar"] },
  { nombre: "Naranja X / Brubank / Ualá", raices: ["naranjax", "brubank", "uala|"], oficiales: ["naranjax.com", "brubank.com", "uala.com.ar"] },
  { nombre: "Scotiabank", raices: ["scotiabank", "scotia|"], oficiales: ["scotiabank.com", "scotiabank.com.mx"] },
  { nombre: "Inbursa", raices: ["inbursa"], oficiales: ["inbursa.com"] },
  { nombre: "Banco Azteca / BanCoppel", raices: ["bancoazteca", "bancoppel"], oficiales: ["bancoazteca.com.mx", "bancoppel.com"] },
  { nombre: "Nu / Nubank", raices: ["nubank", "nu|"], oficiales: ["nu.com.mx", "nubank.com.br"] },
  { nombre: "Bancolombia / Nequi / Davivienda", raices: ["bancolombia", "nequi", "davivienda"], oficiales: ["bancolombia.com", "nequi.com.co", "davivienda.com"] },
  { nombre: "Itaú / Bradesco / Banco do Brasil", raices: ["itau|", "bradesco", "bancodobrasil"], oficiales: ["itau.com.br", "itau.com", "bradesco.com.br", "bb.com.br"] },
  { nombre: "Telcel / Telmex / Totalplay", raices: ["telcel", "telmex", "totalplay"], oficiales: ["telcel.com", "telmex.com", "totalplay.com.mx"] },
  { nombre: "CFE", raices: ["cfe|"], oficiales: ["cfe.mx", "cfe.gob.mx"] },
  { nombre: "Liverpool / Coppel", raices: ["liverpool", "coppel"], oficiales: ["liverpool.com.mx", "coppel.com"] },
  { nombre: "Mastercard / Visa", raices: ["mastercard", "visa|"], oficiales: ["mastercard.com", "mastercard.com.mx", "visa.com", "visa.com.mx"] },
  { nombre: "Spotify / Shopify", raices: ["spotify", "shopify"], oficiales: ["spotify.com", "shopify.com"] },
  { nombre: "Binance / Coinbase", raices: ["binance", "coinbase"], oficiales: ["binance.com", "coinbase.com"] },
  { nombre: "Dropbox / Adobe / Zoom / WeTransfer", raices: ["dropbox", "adobe", "zoom|", "wetransfer"], oficiales: ["dropbox.com", "adobe.com", "zoom.us", "wetransfer.com"] },
  { nombre: "LinkedIn / TikTok / Telegram", raices: ["linkedin", "tiktok", "telegram"], oficiales: ["linkedin.com", "tiktok.com", "telegram.org", "t.me"] },

  { nombre: "Moodle", peso: 25, raices: ["moodle"], oficiales: ["moodle.org", "moodle.com", "moodlecloud.com"] },
  { nombre: "Canvas / Blackboard", peso: 25, raices: ["canvaslms", "instructure", "blackboard"], oficiales: ["instructure.com", "canvaslms.com", "blackboard.com"] },
  { nombre: "SEP / SECIHTI / Becas", peso: 25, raices: ["sep|", "becasbenito", "benitojuarez", "benito-juarez", "becas-sep", "secihti", "conahcyt", "ceneval"], oficiales: ["sep.gob.mx", "gob.mx", "becasbenitojuarez.gob.mx", "secihti.mx", "conahcyt.mx", "ceneval.edu.mx"] },
  { nombre: "UNAM / IPN / UAM / TecNM", peso: 30, raices: ["unam|", "ipn|", "uam|", "tecnm"], oficiales: ["unam.mx", "ipn.mx", "uam.mx", "tecnm.mx"] }
];

const DOMINIOS_ABUSABLES = ["sharepoint.com", "goo.gl", "googleusercontent.com", "azure.com", "onedrive.com", "t.me"];

const PLATAFORMAS_FORMULARIOS = [
  "docs.google.com/forms", "forms.gle", "forms.office.com", "forms.microsoft.com",
  "sites.google.com", "drive.google.com", "typeform.com", "jotform.com", "forms.app", "tally.so"
];

const NOMBRES_TYPO = [
  "microsoft", "outlook", "office", "hotmail", "google", "gmail", "paypal", "docusign",
  "amazon", "facebook", "instagram", "whatsapp", "netflix", "mercadolibre", "santander",
  "banorte", "banamex", "estafeta", "fedex", "icloud", "onedrive", "sharepoint"
];

const DOMINIOS_CONFIABLES = [
  "microsoft.com", "microsoftonline.com", "office.com", "outlook.com", "live.com",
  "google.com", "gmail.com", "github.com", "apple.com", "icloud.com", "docusign.com",
  "paypal.com", "dhl.com", "fedex.com", "amazon.com", "wikipedia.org", "sat.gob.mx",
  // Instituciones educativas de México que usan .mx en lugar de .edu.mx
  "unam.mx", "ipn.mx", "uam.mx", "tec.mx", "itesm.mx", "tecnm.mx", "udg.mx", "buap.mx",
  "uanl.mx", "uaem.mx", "uaslp.mx", "uv.mx", "unison.mx", "uady.mx", "uabc.mx", "ugto.mx",
  "itam.mx", "ibero.mx", "anahuac.mx", "lasalle.mx", "upn.mx", "colmex.mx", "cinvestav.mx",
  // Plataformas oficiales
  "moodle.org", "instructure.com", "canvaslms.com", "blackboard.com", "coursera.org",
  "edx.org", "khanacademy.org", "zoom.us"
].concat(DOMINIOS_INSTITUCION);

const TLDS_INSTITUCIONALES = [
  ".edu", ".edu.mx", ".gob.mx", ".gob", ".gov", ".gov.mx", ".mil", ".ac.uk",
  ".edu.ar", ".edu.co", ".edu.es", ".edu.pe", ".edu.cl", ".edu.br", ".edu.ec", ".edu.uy",
  ".edu.ve", ".edu.bo", ".edu.gt", ".edu.pa", ".edu.do", ".edu.ni", ".edu.hn", ".edu.sv",
  ".gob.ar", ".gob.cl", ".gob.pe", ".gob.ec", ".gob.es", ".gov.co", ".gov.br", ".ac.cr"
];

let pestanaActual = "email";
let resultadoActual = null;
let confirmandoLimpieza = false;

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

const panelVacio = document.getElementById("empty-state");
const panelCarga = document.getElementById("loading-state");
const panelResultados = document.getElementById("results-container");

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

const cabeceraGuia = document.getElementById("guide-header");
const cuerpoGuia = document.getElementById("guide-body");
const flechaGuia = document.getElementById("guide-arrow");

const panelHistorial = document.getElementById("history-panel");
const cabeceraHistorial = document.getElementById("history-header");
const contadorHistorial = document.getElementById("history-count");
const cuerpoHistorial = document.getElementById("history-body");
const flechaHistorial = document.getElementById("history-arrow");
const resumenHistorial = document.getElementById("history-summary-text");
const botonLimpiarHistorial = document.getElementById("history-clear-btn");
const listaHistorial = document.getElementById("history-list");

document.addEventListener("DOMContentLoaded", function () {
  iniciarTema();
  mostrarBotonesEjemplos();
  cargarHistorialDesdeStorage();
  asignarEventos();
});

function asignarEventos() {
  botonTema.addEventListener("click", alternarTema);

  pestanaEmail.addEventListener("click", function () { cambiarPestana("email"); });
  pestanaUrl.addEventListener("click", function () { cambiarPestana("url"); });

  inputTexto.addEventListener("input", actualizarContador);

  formulario.addEventListener("submit", procesarEnvio);

  cabeceraGuia.addEventListener("click", alternarGuia);
  cabeceraTecnica.addEventListener("click", alternarDetallesTecnicos);
  cabeceraHistorial.addEventListener("click", alternarHistorial);

  botonExportar.addEventListener("click", exportarReporte);

  botonLimpiarHistorial.addEventListener("click", function (e) {
    e.stopPropagation();
    limpiarHistorial();
  });
}

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
    botonTema.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    `;
  } else {
    botonTema.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    `;
  }
}

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

const MAX_EJEMPLOS_VISIBLES = 5;

function barajar(arr) {
  const copia = arr.slice();
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = copia[i]; copia[i] = copia[j]; copia[j] = t;
  }
  return copia;
}

function mostrarBotonesEjemplos() {
  contenedorEjemplos.innerHTML = "";
  const todos = EJEMPLOS[pestanaActual];
  const esSeguro = function (e) { return /\((seguro|legítimo)\)/i.test(e.label); };
  const seguros = barajar(todos.filter(esSeguro));
  const riesgosos = barajar(todos.filter(function (e) { return !esSeguro(e); }));

  let lista = riesgosos.slice(0, MAX_EJEMPLOS_VISIBLES - 1);
  if (seguros.length > 0) lista.push(seguros[0]);
  lista = barajar(lista);

  if (todos.length > MAX_EJEMPLOS_VISIBLES) {
    const otros = document.createElement("span");
    otros.className = "example-tag";
    otros.textContent = "↻ Ver otros ejemplos";
    otros.style.fontStyle = "italic";
    otros.addEventListener("click", mostrarBotonesEjemplos);
    lista.push({ __otros: otros });
  }

  lista.forEach(function (ejemplo) {
    if (ejemplo.__otros) {
      contenedorEjemplos.appendChild(ejemplo.__otros);
      return;
    }
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

function normalizarTexto(t) {
  return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function destilarLeet(t) {
  const mapa = { "0": "o", "1": "l", "3": "e", "4": "a", "5": "s", "7": "t" };
  return t.replace(/(?<=[a-z])[013457](?=[a-z])/g, function (d) { return mapa[d]; });
}

function hallar(texto, lista) {
  const encontradas = [];
  for (let i = 0; i < lista.length; i++) {
    const p = lista[i];
    if (p.endsWith("|")) {
      const s = p.slice(0, -1);
      if (new RegExp("(^|[^a-z0-9])" + s + "([^a-z]|$)").test(texto)) encontradas.push(s);
    } else if (texto.includes(p)) {
      encontradas.push(p);
    }
  }
  return encontradas;
}

function distanciaEdicion(a, b) {
  const m = a.length, n = b.length;
  if (Math.abs(m - n) > 2) return 99;
  let prev = [];
  for (let j = 0; j <= n; j++) prev[j] = j;
  for (let i = 1; i <= m; i++) {
    const act = [i];
    for (let j = 1; j <= n; j++) {
      const costo = a[i - 1] === b[j - 1] ? 0 : 1;
      act[j] = Math.min(prev[j] + 1, act[j - 1] + 1, prev[j - 1] + costo);
    }
    prev = act;
  }
  return prev[n];
}

function hostCoincide(host, dominio) {
  return host === dominio || host.endsWith("." + dominio);
}

function obtenerDominioRegistrable(host) {
  const partes = host.split(".");
  if (partes.length <= 2) return host;
  const tld = partes[partes.length - 1];
  const sld = partes[partes.length - 2];
  if (tld.length === 2 && SEGUNDO_NIVEL.indexOf(sld) !== -1) {
    return partes.slice(-3).join(".");
  }
  return partes.slice(-2).join(".");
}

function parsearURL(entrada) {
  let s = entrada.trim().replace(/^[<("'«]+|[>)"'».,;]+$/g, "");
  const m = s.match(/^([a-z]+):\/*/i);
  const esquema = m ? m[1].toLowerCase() : "";
  const malformada = !!m && !/^[a-z]+:\/\//i.test(s);
  const resto = m ? s.slice(m[0].length) : s;

  let autoridad = resto.split(/[\/?#]/)[0];
  const ruta = resto.slice(autoridad.length);

  const tieneArroba = autoridad.indexOf("@") !== -1;
  if (tieneArroba) autoridad = autoridad.slice(autoridad.lastIndexOf("@") + 1);

  let puerto = "";
  const pm = autoridad.match(/:(\d+)$/);
  if (pm) { puerto = pm[1]; autoridad = autoridad.slice(0, -pm[0].length); }

  const host = autoridad.toLowerCase().replace(/\.+$/, "");
  const registrable = obtenerDominioRegistrable(host);
  const etiquetas = host.split(".");
  const subdominios = etiquetas.length - registrable.split(".").length;

  return {
    original: entrada.trim(), esquema: esquema, malformada: malformada, host: host,
    ruta: ruta.toLowerCase(), registrable: registrable, subdominios: Math.max(0, subdominios),
    tieneArroba: tieneArroba, puerto: puerto,
    esIP: /^\d{1,3}(\.\d{1,3}){3}$/.test(host)
  };
}

function analizarURL(texto) {
  const u = parsearURL(texto);
  const amenazas = [];
  const detalles = [];
  let puntaje = 0;

  function sumar(pts, amenaza, detalle) {
    puntaje += pts;
    if (amenaza) amenazas.push(amenaza);
    if (detalle) detalles.push(detalle + " (+" + pts + " pts).");
  }

  if (!u.host || u.host.indexOf(".") === -1) {
    return { puntaje: 0, amenazas: amenazas, detalles: ["No se pudo identificar un dominio válido en la entrada."], url: u, confiable: false, acortador: false };
  }

  const hostNorm = normalizarTexto(u.host);
  const hostLeet = destilarLeet(hostNorm);
  const rutaNorm = normalizarTexto(u.ruta);
  const pajar = hostNorm + " " + hostLeet + " " + rutaNorm;

  // ----- Dominio confiable (se evalúa primero) -----
  const hostRuta = u.host + u.ruta;
  const esFormulario = PLATAFORMAS_FORMULARIOS.some(function (p) { return hostRuta.indexOf(p) === 0; });
  u.formulario = esFormulario;
  let confiable = false;
  if (!u.tieneArroba && !u.esIP && !esFormulario) {
    for (let i = 0; i < DOMINIOS_CONFIABLES.length; i++) {
      if (hostCoincide(u.host, DOMINIOS_CONFIABLES[i])) { confiable = true; break; }
    }
    if (!confiable) {
      for (let i = 0; i < MARCAS.length && !confiable; i++) {
        for (let j = 0; j < MARCAS[i].oficiales.length; j++) {
          const d = MARCAS[i].oficiales[j];
          if (DOMINIOS_ABUSABLES.indexOf(d) === -1 && hostCoincide(u.host, d)) { confiable = true; break; }
        }
      }
    }
    if (!confiable) {
      for (let i = 0; i < TLDS_INSTITUCIONALES.length; i++) {
        if (u.host.endsWith(TLDS_INSTITUCIONALES[i])) { confiable = true; break; }
      }
    }
  }
  if (confiable) {
    detalles.push("Filtro de confianza: el dominio (" + u.registrable + ") es oficial o institucional verificado.");
    return { puntaje: 0, amenazas: amenazas, detalles: detalles, url: u, confiable: true, acortador: false };
  }

  if (esFormulario) {
    sumar(20, "Formulario o página alojada en una plataforma pública que cualquiera puede crear", "Plataforma abierta: los atacantes también crean formularios en este servicio; verifica quién lo envía");
  }

  // ----- Acortadores -----
  let acortador = false;
  for (let i = 0; i < ACORTADORES.length; i++) {
    if (hostCoincide(u.host, ACORTADORES[i])) {
      acortador = true;
      sumar(40, "Enlace acortado (" + ACORTADORES[i] + "): oculta el destino real", "Ofuscación: un acortador impide ver a dónde lleva realmente el enlace");
      break;
    }
  }

  // ----- Hosting gratuito / plataformas públicas -----
  let hostingGratuito = "";
  for (let i = 0; i < HOSTINGS_GRATUITOS.length; i++) {
    if (hostCoincide(u.host, HOSTINGS_GRATUITOS[i])) {
      hostingGratuito = HOSTINGS_GRATUITOS[i];
      sumar(40, "Sitio alojado en plataforma gratuita o pública: \"" + hostingGratuito + "\"", "Infraestructura sospechosa: hospedaje gratuito (" + hostingGratuito + ") muy usado para clonar portales");
      break;
    }
  }

  // ----- TLD de riesgo -----
  for (let i = 0; i < TLDS_SOSPECHOSOS.length; i++) {
    if (u.host.endsWith(TLDS_SOSPECHOSOS[i])) {
      sumar(30, "Extensión de dominio (TLD) con alto índice de fraude: \"" + TLDS_SOSPECHOSOS[i] + "\"", "Reputación de TLD: extensión de bajo costo frecuentemente abusada");
      break;
    }
  }

  if (!TLDS_SOSPECHOSOS.some(function (t) { return u.host.endsWith(t); })) {
    for (let i = 0; i < TLDS_MODERADOS.length; i++) {
      if (u.host.endsWith(TLDS_MODERADOS[i])) {
        sumar(15, "Extensión de dominio poco habitual en instituciones: \"" + TLDS_MODERADOS[i] + "\"", "Reputación de TLD: extensión barata y de uso frecuente en campañas (" + TLDS_MODERADOS[i] + ")");
        break;
      }
    }
  }

  // ----- Suplantación de marca -----
  let marcaSuplantada = "";
  let marcaRutaPendiente = null;
  for (let i = 0; i < MARCAS.length && !marcaSuplantada; i++) {
    const marca = MARCAS[i];
    let oficial = false;
    for (let j = 0; j < marca.oficiales.length; j++) {
      if (hostCoincide(u.host, marca.oficiales[j])) { oficial = true; break; }
    }
    if (oficial) continue;

    const enHost = hallar(hostNorm + " " + hostLeet, marca.raices);
    if (enHost.length > 0) {
      marcaSuplantada = marca.nombre;
      sumar(marca.peso || 40, "Suplantación de marca o institución:\"" + marca.nombre + "\" (rastro: \"" + enHost[0] + "\")", "Suplantación: el dominio " + u.registrable + " menciona a " + marca.nombre + " pero NO le pertenece");
      continue;
    }
    const enRuta = hallar(rutaNorm, marca.raices);
    if (enRuta.length > 0 && !marcaRutaPendiente) {
      marcaRutaPendiente = { nombre: marca.nombre, rastro: enRuta[0] };
    }
  }

  // ----- Typosquatting y sustitución de caracteres -----
  const tokensOrig = hostNorm.split(/[^a-z0-9]+/).filter(function (t) { return t.length >= 4; });
  let typoEncontrado = false;
  for (let i = 0; i < tokensOrig.length && !typoEncontrado; i++) {
    const tok = tokensOrig[i];
    const tokLeet = destilarLeet(tok);
    for (let j = 0; j < NOMBRES_TYPO.length; j++) {
      const marca = NOMBRES_TYPO[j];
      if (tok === marca) continue;
      if (tokLeet !== tok && tokLeet.includes(marca) && !tok.includes(marca)) {
        typoEncontrado = true;
        sumar(25, "Sustitución de caracteres para imitar \"" + marca + "\" (ej. 0 por o, 1 por l)", "Ofuscación: \"" + tok + "\" imita a \"" + marca + "\" cambiando letras por números");
        break;
      }
      const dist = distanciaEdicion(tok, marca);
      const mismasLetras = tok.length === marca.length && tok.split("").sort().join("") === marca.split("").sort().join("");
      if (tok.length >= 6 && Math.abs(tok.length - marca.length) <= 1 && (dist === 1 || (mismasLetras && dist <= 2))) {
        typoEncontrado = true;
        sumar(30, "Nombre casi idéntico a una marca conocida: \"" + tok + "\" ≈ \"" + marca + "\"", "Typosquatting: \"" + tok + "\" difiere en una sola letra de \"" + marca + "\"");
        break;
      }
    }
  }

  // ----- Palabras clave (raíces) -----
  const accion = hallar(pajar, URL_ACCION);
  const urgencia = hallar(pajar, URL_URGENCIA);
  const tema = hallar(pajar, URL_TEMA);

  function unicas(arr) { return arr.filter(function (v, i) { return arr.indexOf(v) === i; }); }
  const accionU = unicas(accion), urgenciaU = unicas(urgencia), temaU = unicas(tema);

  if (accionU.length > 0) {
    const pts = accionU.length >= 3 ? 35 : accionU.length === 2 ? 25 : 15;
    sumar(pts, "Términos de acceso o verificación de cuenta en la dirección: " + accionU.slice(0, 4).join(", "), "Intención de captura: la URL contiene raíces de acceso/verificación (" + accionU.slice(0, 4).join(", ") + ")");
  }
  if (urgenciaU.length > 0) {
    sumar(20, "Términos de urgencia o amenaza en la dirección: " + urgenciaU.slice(0, 3).join(", "), "Presión psicológica: la URL incluye palabras de urgencia (" + urgenciaU.slice(0, 3).join(", ") + ")");
  }
  if (temaU.length > 0) {
    sumar(temaU.length >= 2 ? 20 : 10, "Servicio o pretexto frecuente en fraudes: " + temaU.slice(0, 4).join(", "), "Anzuelo temático: nombres de servicios/beneficios usados en engaños (" + temaU.slice(0, 4).join(", ") + ")");
  }

  const totalSenales = accionU.length + urgenciaU.length + temaU.length;
  if (totalSenales >= 4) {
    sumar(15, "Acumulación de palabras clave en un solo dominio (" + totalSenales + " señales)", "Keyword stuffing: dominios legítimos rara vez concatenan tantas palabras sensibles");
  }

  // Una marca que solo aparece en la ruta cuenta únicamente si hay otra señal de fraude
  // (así un blog que menciona "Galicia" como región no se marca por error)
  const hayOtraSenal = (accionU.length + urgenciaU.length + temaU.length) > 0 ||
    TLDS_SOSPECHOSOS.some(function (t) { return u.host.endsWith(t); }) ||
    TLDS_MODERADOS.some(function (t) { return u.host.endsWith(t); }) || !!hostingGratuito || acortador;
  if (marcaRutaPendiente && !marcaSuplantada && hayOtraSenal) {
    marcaSuplantada = marcaRutaPendiente.nombre;
    sumar(30, "Menciona a \"" + marcaRutaPendiente.nombre + "\" en la ruta de un dominio que no le pertenece (rastro: \"" + marcaRutaPendiente.rastro + "\")", "Marca en la ruta: " + u.registrable + " no es un dominio oficial de " + marcaRutaPendiente.nombre + ", pero su nombre aparece después de la barra");
  }

  // ----- Combinaciones -----
  if ((marcaSuplantada || hostingGratuito || acortador) && accionU.length > 0) {
    sumar(20, "Combinación crítica: infraestructura no oficial + solicitud de acceso/verificación", "Firma de ataque: portal de acceso en servidor ajeno a la organización suplantada");
  }

  if (accionU.length > 0 && temaU.length > 0) {
    sumar(15, "Combinación de pretexto (" + temaU[0] + ") con solicitud de acceso (" + accionU[0] + ") en un dominio no confiable", "Correlación: tema atractivo + petición de acceso en el mismo dominio");
  }

  // ----- Contexto institucional falso -----
  const institucionales = hallar(hostNorm, PALABRAS_INSTITUCIONALES);
  if (institucionales.length > 0) {
    const esComercial = hostingGratuito || TLDS_COMERCIALES.some(function (t) { return u.host.endsWith(t); });
    if (esComercial) {
      sumar(25, "Simula una institución educativa (\"" + institucionales[0] + "\") en un dominio comercial en vez de .edu", "Camuflaje institucional: nombre educativo en dominio comercial");
    }
  }
  if (/(^|[.-])(gob|gobierno)([.-]|$)/.test(hostNorm) || /sat-?gob|gob-?mx/.test(hostNorm)) {
    sumar(30, "Simula terminaciones gubernamentales (gob.mx) dentro de otro dominio", "Camuflaje de dominio: imita extensiones de gobierno");
  }

  // ----- Estructura del dominio -----
  const guiones = (u.host.split("-").length - 1);
  if (guiones >= 2) {
    sumar(15, "Dominio atípico con múltiples guiones (" + guiones + ")", "Morfología sospechosa: guiones usados para simular nombres legítimos");
  }
  if (u.host.indexOf("--") !== -1 && u.host.indexOf("xn--") === -1) {
    sumar(10, "Subdominio con guiones dobles", "Sintaxis autogenerada: patrón típico de despliegues temporales");
  }
  const digitos = (u.host.match(/[0-9]/g) || []).length;
  if (digitos >= 4) {
    sumar(10, "Dominio con muchos números (" + digitos + ")", "Sintaxis aleatoria: secuencias numéricas poco comunes en sitios legítimos");
  }
  if (/(^|[^0-9])(202[3-9])([^0-9]|$)/.test(u.host)) {
    sumar(10, "Año incluido en el dominio (gancho de 'nuevos términos/actualización')", "Señuelo temporal: el año en el nombre del dominio es típico en campañas");
  }
  const etiquetaMasLarga = u.host.split(".").reduce(function (a, b) { return b.length > a.length ? b.length : a; }, 0);
  if (etiquetaMasLarga >= 28) {
    sumar(10, "Nombre de dominio excesivamente largo (" + etiquetaMasLarga + " caracteres)", "Longitud anómala: nombres largos ocultan palabras clave engañosas");
  }
  if (u.subdominios >= 3) {
    sumar(15, "Demasiados subdominios (" + u.subdominios + ")", "Estructura engañosa: el dominio real queda oculto al final");
  }
  if (u.esIP) {
    sumar(40, "La dirección usa una IP numérica en vez de un nombre de dominio", "Sin dominio: los servicios legítimos no piden credenciales en IPs directas");
  }
  if (u.host.indexOf("xn--") !== -1) {
    sumar(35, "Dominio con caracteres internacionales (punycode) que puede imitar letras conocidas", "Ataque homógrafo: letras de otros alfabetos que parecen latinas");
  }
  if (u.tieneArroba) {
    sumar(35, "La URL contiene '@' para disfrazar el verdadero destino", "Engaño de autoridad: lo que está antes de '@' es ignorado por el navegador");
  }
  if (u.puerto && u.puerto !== "80" && u.puerto !== "443") {
    sumar(10, "Puerto no estándar (" + u.puerto + ")", "Servicio atípico en un puerto poco común");
  }
  if (u.esquema === "http") {
    sumar(10, "Conexión sin cifrado (HTTP)", "Sin TLS: el sitio no usa HTTPS");
  }
  if (u.malformada) {
    sumar(10, "Formato de enlace anómalo (esquema mal escrito)", "Sintaxis incorrecta: formato inusual que evade filtros simples");
  }
  const rutasSens = hallar(rutaNorm, RUTAS_SENSIBLES);
  if (rutasSens.length > 0) {
    sumar(10, "Ruta que apunta a un formulario de acceso: \"" + rutasSens[0] + "\"", "Ruta sensible: la URL lleva a una página de login/verificación en dominio no confiable");
  }

  // ----- Rasgos léxicos adicionales (comunes en URLs de phishing reportadas) -----
  if (u.original.length > 75) {
    sumar(10, "URL muy larga (" + u.original.length + " caracteres)", "Longitud: las URLs de phishing suelen superar 75 caracteres para esconder el dominio real");
  }
  if (/%[0-9a-f]{2}/i.test(u.ruta) || /[a-z0-9]{30,}/.test(u.ruta)) {
    sumar(10, "Ruta con codificación o cadenas largas aleatorias", "Parámetros ofuscados: porcentaje-codificación o cadenas tipo base64 en la ruta");
  }
  const primeraEtiqueta = u.registrable.split(".")[0];
  const vocales = (primeraEtiqueta.match(/[aeiou]/g) || []).length;
  if (primeraEtiqueta.length >= 10 && vocales / primeraEtiqueta.length < 0.25) {
    sumar(15, "Nombre de dominio con aspecto aleatorio: \"" + primeraEtiqueta + "\"", "Entropía: pocas vocales para su longitud, típico de dominios generados automáticamente");
    if (accionU.length > 0) {
      sumar(20, "Dominio de aspecto aleatorio que pide acceso o validación de cuenta", "Firma de ataque: dominio sin sentido + términos de verificación");
    }
  }

  return { puntaje: Math.min(100, puntaje), amenazas: amenazas, detalles: detalles, url: u, confiable: false, acortador: acortador };
}

/* ---------------------------------------------------------------------
   ANÁLISIS DE CORREO
   --------------------------------------------------------------------- */
function extraerURLs(texto) {
  const urls = [];
  const conEsquema = texto.match(/\bhttps?:\/*[^\s<>"'«»)]+/gi) || [];
  conEsquema.forEach(function (u) { urls.push(u); });

  const sinEsquema = texto.replace(/\bhttps?:\/*[^\s<>"'«»)]+/gi, " ");
  const re = /(?<![@\w.\-])(?:[a-z0-9][a-z0-9-]*\.)+(?:com|net|org|info|biz|me|su|xyz|top|site|online|page|app|dev|io|co|mx|edu|gob|ly|gl|ru|cn|club|click|buzz|icu|sbs|cc|tk|ml|ga|cf|gq|one|xin|bond|help|win|cfd|cyou|life|link|digital|live|shop|store|website|space|fun|vip|pw|tech|pro|world|today|agency|ar|br|cl)\b(?:\/[^\s<>"'«»)]*)?/gi;
  const m = sinEsquema.match(re) || [];
  m.forEach(function (u) {
    if (!/^(www\.)?[a-z0-9-]+\.(png|jpg|gif|pdf|docx?|xlsx?|txt)$/i.test(u)) urls.push(u);
  });

  const vistos = {};
  return urls.filter(function (u) {
    const clave = u.toLowerCase().replace(/[.,;]+$/, "");
    if (vistos[clave]) return false;
    vistos[clave] = true;
    return true;
  }).slice(0, 10);
}

function analizarCorreo(texto) {
  const amenazas = [];
  const detalles = [];
  let puntaje = 0;

  function sumar(pts, amenaza, detalle) {
    puntaje += pts;
    if (amenaza) amenazas.push(amenaza);
    if (detalle) detalles.push(detalle + " (+" + pts + " pts).");
  }

  // Se eliminan frases negadas ("No se requieren cambios de contraseña...") para no confundirlas con una petición
  let base = normalizarTexto(texto);
  base = base.replace(/\bno\s+(se\s+)?(requier\w+|necesit\w+|solicit\w+|compart\w+|proporcion\w+|ingres\w+|haga\w*|realic\w+)[^.\n]*/g, " ");

  const urgencia = hallar(base, MAIL_URGENCIA);
  const credenciales = hallar(base, MAIL_CREDENCIALES);
  const tema = hallar(base, MAIL_TEMA);
  const amenaza = hallar(base, MAIL_AMENAZAS);
  const saludo = hallar(base, MAIL_SALUDO_GENERICO);
  const temaEdu = hallar(base, MAIL_TEMA_EDU);
  let remitenteSospechoso = false;

  if (urgencia.length > 0) {
    sumar(urgencia.length >= 2 ? 25 : 15, "Tono de urgencia o presión de tiempo: \"" + urgencia[0].trim() + "\"" + (urgencia.length > 1 ? " y " + (urgencia.length - 1) + " más" : ""), "Presión psicológica: " + urgencia.length + " expresión(es) de prisa para forzar una acción rápida");
  }
  if (credenciales.length > 0) {
    sumar(credenciales.length >= 2 ? 30 : 20, "Solicitud de validar cuenta, credenciales o datos: \"" + credenciales[0].trim() + "\"" + (credenciales.length > 1 ? " y " + (credenciales.length - 1) + " más" : ""), "Captura de credenciales: " + credenciales.length + " indicio(s) de petición de acceso o verificación");
  }
  if (tema.length > 0) {
    sumar(tema.length >= 2 ? 25 : 15, "Pretexto frecuente en fraudes (buzón, nómina, paquete, fiscal, beneficios): \"" + tema[0].trim() + "\"", "Ingeniería social: anzuelo administrativo, laboral o económico (" + tema.slice(0, 3).join(", ") + ")");
  }
  if (amenaza.length > 0) {
    sumar(amenaza.length >= 2 ? 25 : 15, "Amenaza de sanción, bloqueo o pérdida de acceso: \"" + amenaza[0].trim() + "\"", "Manipulación por miedo: " + amenaza.length + " expresión(es) de consecuencia negativa");
  }
  if (temaEdu.length > 0) {
    sumar(temaEdu.length >= 3 ? 15 : 8, "Pretexto del entorno escolar usado con frecuencia en fraudes: " + temaEdu.slice(0, 3).join(", "), "Anzuelo educativo: becas, trámites o plataformas escolares (" + temaEdu.slice(0, 3).join(", ") + ")");
  }
  if (saludo.length > 0) {
    sumar(10, "Saludo genérico sin identificar a la persona", "Mensaje masivo: los comunicados reales suelen dirigirse por nombre");
  }
  if (urgencia.length > 0 && credenciales.length > 0) {
    sumar(20, "Combinación crítica: presión urgente exigiendo verificar datos de acceso", "Firma de ataque: urgencia temporal + captura de identidad simultánea");
  }
  if (amenaza.length > 0 && (credenciales.length > 0 || tema.length > 0) && urgencia.length > 0) {
    sumar(10, null, "Patrón completo: urgencia + amenaza + pretexto/credenciales");
  }

  // ----- Extensiones peligrosas -----
  const exts = EXTENSIONES_PELIGROSAS.filter(function (e) {
    return new RegExp("[\\w)]" + e.replace(".", "\\.") + "(\\b|$)", "i").test(texto);
  });
  if (exts.length > 0) {
    sumar(25, "Mención de archivo ejecutable o adjunto de riesgo: \"" + exts[0] + "\"", "Riesgo de malware: extensión con capacidad de ejecutar código (" + exts[0] + ")");
  }

  // ----- Cabeceras de autenticación -----
  if (/spf\s*[:=]\s*(fail|softfail)/i.test(texto)) {
    sumar(25, "Fallo de autenticación SPF (remitente no autorizado por el dominio)", "Seguridad de correo: la IP de origen no está autorizada en los registros SPF");
  }
  if (/dkim\s*[:=]\s*(fail|none)/i.test(texto)) {
    sumar(25, "Firma criptográfica DKIM ausente o inválida", "Integridad de mensaje: firma DKIM no válida");
  }
  if (/dmarc\s*[:=]\s*fail/i.test(texto)) {
    sumar(20, "Fallo de política DMARC", "Autenticación: el dominio remitente no supera DMARC");
  }

  // ----- Remitente -----
  const remitente = texto.match(/(?:^|\n)\s*(?:de|from|remitente)\s*:[^\n]*?([a-z0-9._+-]+@([a-z0-9.-]+\.[a-z]{2,}))/i);
  if (remitente) {
    const rDom = analizarURL(remitente[2]);
    if (!rDom.confiable && rDom.puntaje >= 15) {
      remitenteSospechoso = true;
      const pts = Math.min(30, Math.round(rDom.puntaje * 0.6));
      sumar(pts, "Dominio del remitente sospechoso: " + remitente[2], "Remitente: el dominio " + remitente[2] + " presenta señales de riesgo (" + rDom.amenazas.slice(0, 2).join("; ") + ")");
    }
  }

  // ----- Enlaces dentro del correo (análisis completo de cada URL) -----
  const urls = extraerURLs(texto);
  let maxUrl = 0;
  let urlsRiesgo = 0;
  let urlsConf = 0;
  let hayFormulario = false;
  urls.forEach(function (raw) {
    const r = analizarURL(raw);
    if (r.confiable) urlsConf++;
    if (r.url && r.url.formulario) hayFormulario = true;
    if (r.puntaje > maxUrl) maxUrl = r.puntaje;
    if (r.puntaje >= 50) urlsRiesgo++;
    if (r.puntaje >= 30) {
      const principal = r.amenazas.slice(0, 2).join("; ");
      detalles.push("Enlace analizado: " + r.url.host + " → " + r.puntaje + "/100. " + principal);
    }
  });
  if (maxUrl >= 30) {
    const pts = Math.min(55, Math.round(maxUrl * 0.7));
    sumar(pts, "Enlace sospechoso dentro del mensaje (riesgo del enlace: " + maxUrl + "/100)", "Enlaces: el análisis individual de las URLs del correo aporta riesgo");
  }
  if (urlsRiesgo > 0 && (urgencia.length + credenciales.length + tema.length + amenaza.length) > 0) {
    sumar(15, "Texto de ingeniería social acompañado de un enlace de alto riesgo", "Correlación: el mensaje empuja a abrir un enlace peligroso");
  }

  if (hayFormulario && (credenciales.length > 0 || urgencia.length > 0 || temaEdu.length > 0)) {
    sumar(20, "El mensaje envía a un formulario público (Google Forms, etc.) para pedir datos o actuar con prisa", "Patrón común en phishing escolar: formulario gratuito que parece un trámite oficial");
  }

  // Si todos los enlaces son de dominios oficiales/institucionales y el remitente no es dudoso,
  // es probable que sea un aviso real (los avisos legítimos también usan palabras como "plazo" o "beca")
  const fallaAutenticacion = /spf\s*[:=]\s*(fail|softfail)|dkim\s*[:=]\s*(fail|none)|dmarc\s*[:=]\s*fail/i.test(texto);
  if (urls.length > 0 && urlsConf === urls.length && puntaje > 0 && !remitenteSospechoso && !fallaAutenticacion) {
    puntaje = Math.round(puntaje * 0.4);
    detalles.push("Todos los enlaces apuntan a dominios oficiales o institucionales verificados: el riesgo se reduce.");
  }

  // Un correo sin enlaces, sin petición de datos y sin amenazas es informativo
  if (urls.length === 0 && credenciales.length === 0 && amenaza.length === 0 && puntaje < 40) {
    puntaje = Math.min(puntaje, 15);
    detalles.push("Sin enlaces ni solicitud de datos: se trata de un mensaje informativo, el riesgo se reduce.");
  }

  return { puntaje: puntaje, amenazas: amenazas, detalles: detalles };
}

/* ---------------------------------------------------------------------
   FUNCIÓN PRINCIPAL
   --------------------------------------------------------------------- */
// ¿El texto es una dirección web (con o sin https://)? Un correo "usuario@dominio.com" no cuenta.
function esSoloURL(t) {
  if (!/^\S+$/.test(t)) return false;
  const tieneEsquema = /^[a-z]+:/i.test(t);
  const autoridad = t.replace(/^[a-z]+:\/*/i, "").split(/[\/?#]/)[0];
  if (!tieneEsquema && autoridad.indexOf("@") !== -1) return false;
  const host = autoridad.replace(/^.*@/, "");
  return /^[^\s\/@:]+\.[a-z]{2,24}(:\d+)?$/i.test(host) || /^\d{1,3}(\.\d{1,3}){3}(:\d+)?$/.test(host);
}

function analizarContenido(tipo, texto) {
  const recomendaciones = [];
  const fichas = texto.trim().split(/\s+/).filter(Boolean);
  let parcial;
  let notaTipo = "";

  // El análisis se elige por lo que realmente se pegó, no solo por la pestaña activa
  if (fichas.length > 0 && (fichas.every(esSoloURL) || (tipo === "url" && fichas.length === 1))) {
    if (tipo === "email") notaTipo = "La entrada es un enlace y no un correo: se analizó como URL.";
    tipo = "url";
    let mejor = null;
    fichas.slice(0, 20).forEach(function (f) {
      const r = analizarURL(f);
      if (!mejor || r.puntaje > mejor.puntaje) mejor = r;
    });
    parcial = mejor;
    if (fichas.length > 1) notaTipo = "Se analizaron " + fichas.length + " enlaces; se muestra el de mayor riesgo (" + mejor.url.host + ").";
  } else {
    if (tipo === "url") notaTipo = "El texto no es un enlace único: se analizó como correo o mensaje.";
    tipo = "email";
    parcial = analizarCorreo(texto);
  }
  if (notaTipo) parcial.detalles.unshift(notaTipo);

  const puntaje = Math.min(100, Math.max(0, parcial.puntaje));
  const amenazas = parcial.amenazas;
  const detallesTecnicos = parcial.detalles;

  if (tipo === "email") {
    if (puntaje >= 70) {
      recomendaciones.push("NO hagas clic en ningún enlace ni introduzcas usuarios o contraseñas.");
      recomendaciones.push("Reporta el correo inmediatamente al área de Seguridad Informática o Soporte TI.");
      recomendaciones.push("Si pusiste datos en algún enlace, cambia tu contraseña oficial de inmediato.");
    } else if (puntaje >= 30) {
      recomendaciones.push("Compara la dirección del remitente con correos oficiales conocidos.");
      recomendaciones.push("No descargues archivos adjuntos ni sigas enlaces sin verificar.");
      recomendaciones.push("Contacta a la institución o persona por un canal oficial alterno.");
    } else {
      recomendaciones.push("No se detectaron señales claras de fraude en el correo.");
      recomendaciones.push("Aun así, verifica que el remitente pertenezca al dominio oficial antes de actuar.");
    }
  } else {
    if (puntaje >= 70) {
      recomendaciones.push("NO ingreses ningún usuario, contraseña ni datos de tarjeta en esta página.");
      recomendaciones.push("Cierra la pestaña del navegador inmediatamente.");
      recomendaciones.push("Comprueba que los portales oficiales de tu organización terminen en su dominio oficial (.edu / .gob.mx).");
    } else if (puntaje >= 30) {
      if (parcial.acortador) {
        recomendaciones.push("Los acortadores ocultan el destino: pide el enlace completo o usa un expansor de URLs antes de abrirlo.");
      }
      recomendaciones.push("Verifica minuciosamente la dirección en la barra del navegador antes de continuar.");
      recomendaciones.push("No inicies sesión desde este enlace: entra escribiendo tú mismo la dirección oficial.");
    } else if (parcial.confiable) {
      recomendaciones.push("El enlace corresponde a un dominio oficial o verificado.");
      recomendaciones.push("Aun así, confirma que la dirección esté escrita exactamente igual en tu navegador.");
    } else {
      recomendaciones.push("No se detectaron señales claras de fraude en la dirección.");
      recomendaciones.push("Esto no garantiza que sea seguro: verifica que el dominio sea el oficial de la organización.");
    }
  }

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

function procesarEnvio(e) {
  e.preventDefault();
  const contenido = inputTexto.value.trim();

  if (!contenido) {
    mensajeError.textContent = "Por favor, ingresa contenido para realizar el análisis.";
    mensajeError.style.display = "block";
    return;
  }
  mensajeError.style.display = "none";

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

  setTimeout(function () {
    const resultado = analizarContenido(pestanaActual, contenido);
    resultadoActual = resultado;

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

function mostrarResultados(res) {
  panelVacio.style.display = "none";
  panelCarga.style.display = "none";
  panelResultados.style.display = "flex";

  panelResultados.classList.remove("results-animate-in");
  setTimeout(function () {
    panelResultados.classList.add("results-animate-in");
  }, 50);

  const radio = 42;
  const circunferencia = 2 * Math.PI * radio;
  const desplazamiento = circunferencia - (res.puntaje / 100) * circunferencia;

  circuloMedidor.style.strokeDasharray = circunferencia;
  circuloMedidor.style.strokeDashoffset = desplazamiento;
  puntajeTexto.textContent = res.puntaje;

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

  historial.unshift(nuevoElemento);

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

    const iconoTipo = item.tipo === "email" ? "Correo" : "URL";
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

    fila.querySelector(".history-view-btn").addEventListener("click", function (e) {
      e.stopPropagation();
      mostrarResultados(item.resultadoCompleto);
    });

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
      <title>Reporte de Análisis de Phishing</title>
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
          <h1 style="margin: 0; font-size: 20px;">Reporte Técnico de Seguridad</h1>
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
        <h3 style="border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; font-size: 16px;">Amenazas Encontradas</h3>
        <ul style="padding-left: 20px;">${listaAmenazasHtml}</ul>
      ` : ''}

      ${listaTecnicaHtml ? `
        <h3 style="border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; font-size: 16px; margin-top: 25px;">Registro de Inspección</h3>
        <div style="background: #f1f5f9; padding: 12px; border-radius: 6px;">${listaTecnicaHtml}</div>
      ` : ''}

      <h3 style="border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; font-size: 16px; margin-top: 25px;">Acciones Recomendadas</h3>
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