import dotenv from "dotenv";
import { Command, Option } from "commander";

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Crear una nueva instancia de Commander
const programa = new Command();

// Agregar una opción para especificar el modo de ejecución (dev o prod)
programa.addOption(new Option("-m --mode <MODE>", "Modo de ejecución del Script").choices(["dev", "prod"]).default("dev"));

// Parsear los argumentos de la línea de comandos
programa.parse();
const opts = programa.opts();

// Obtener el modo de ejecución (dev o prod) de las opciones
const mode = opts.mode;


// Configurar el archivo .env a utilizar según el modo de ejecución
dotenv.config({
    path: mode === "prod" ? "./.env.prod" : "./.env.dev",
    override: true
});


// Exportar las variables de configuración
export const config = {
    PORT: process.env.PORT || 8080, // Puerto predeterminado 8080 si no se especifica
    MENSAJE: process.env.MENSAJE || "Hola mundo", // Mensaje predeterminado "Hola mundo" si no se especifica
    MONGO_URL: process.env.MONGO_URL, // URL de MongoDB
    DB_NAME: process.env.DB_NAME || "turbitoweb", // Nombre de la base de datos predeterminado "turbitoweb" si no se especifica
    PRUEBA_PORT: process.env.PRUEBA_PORT || 7070, // Puerto de prueba predeterminado 7070 si no se especifica
    SECRET: process.env.SECRET,
    SECRET_KEY_MONGO: process.env.SECRET_KEY_MONGO,
    USERNAME: process.env.USERNAME,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL
};

