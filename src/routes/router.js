import express from "express";
import { readdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path"; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const route = express.Router();

const apiFolders = readdirSync(__dirname, {
    withFileTypes: true
}).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name); 

apiFolders.forEach(async folder => {
    const routes = await import(`./${folder}/${folder}.js`);
    route.use(routes.default);
});

export const router = route;
