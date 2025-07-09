samus-app/
│
├── 📁 src/
│   ├── 📁 config/              # Configuración (DB, .env, sesión, etc.)
│   ├── 📁 routes/              # Enrutadores agrupados por módulo
│   ├── 📁 controllers/         # Controladores que procesan lógica de cada vista
│   ├── 📁 services/            # Lógica de negocio desacoplada
│   ├── 📁 repositories/        # Acceso a base de datos (con SQL o ORM)
│   ├── 📁 models/              # Clases del dominio (Usuario, Estudiante, etc.)
│   ├── 📁 views/               # Archivos EJS / Handlebars agrupados en subcarpetas por módulo
│   │   ├── 📁 layouts/         # Layout base (header, footer)
│   │   ├── 📁 cuestionarios/   # Vistas específicas de cuestionarios
│   │   ├── 📁 usuarios/        # Registro, login, perfil
│   │   └── 📁 resultados/      # Pantallas de resultados
│   ├── 📁 middlewares/         # Autenticación, validaciones, errores
│   ├── 📁 public/              # Archivos estáticos: CSS, JS, imágenes
│   ├── 📁 utils/               # Funciones auxiliares (hash, fecha, etc.)
│   ├── 📁 core/                # Clases base abstractas si necesitas inyección de dependencias
│   ├── app.js                 # Configura Express (vistas, middlewares, rutas)
│   └── server.js              # Levanta el servidor
│
├── 📁 scripts/                # SQL, generación de datos, carga inicial
├── .env                      # Variables de entorno (conexión DB, puerto, etc.)
├── package.json
└── README.md
