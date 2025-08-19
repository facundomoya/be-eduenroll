import express from "express"; //para crear el router
import { readdirSync } from "fs"; //para leer el nombre de los archivos y directorios
import { fileURLToPath } from "url"; //para convertir import.meta.url en una ruta usable con node
import { dirname } from "path"; //para obtener el nombre del directorio

const __filename = fileURLToPath(import.meta.url); //convertir el url en una ruta usable
const __dirname = dirname(__filename); //obtenemos el nombre del directorio

const route = express.Router(); //creamos el router

const apiFolders = readdirSync(__dirname, {
    withFileTypes: true
}).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name); //leemos los directorios y filtramos los que no son directorios o el index.js

apiFolders.forEach(async folder => {
    const routes = await import(`./${folder}/${folder}.js`); //importamos el archivo de la carpeta
    route.use(routes.default); //usamos el router de la carpeta
});

export const router = route;
