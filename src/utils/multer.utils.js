import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import UserPdf from '../models/user_pdf.model.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const uploadFolder = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolder);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname, ext);
    const timestamp = Date.now();
    cb(null, `${base}-${timestamp}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Solo se permiten archivos PDF'), false);
  }
};

const uploadMiddleware = multer({ 
  storage, 
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } 
}).single('archivo');

const upload = (req, res, next) => {
  uploadMiddleware(req, res, async (err) => {
    if (err) {
      if (err.message === 'Solo se permiten archivos PDF') {
        return res.status(400).json({ error: err.message });
      }
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: 'El archivo es demasiado grande (máx 5MB)' });
      }
      return res.status(500).json({ error: `Error al procesar el archivo: ${err.message}` });
    }
    if (!req.file) {
      return res.status(400).json({ error: 'No se proporcionó ningún archivo' });
    }

    const userId = req.body.userId;
    if (!userId) {
      return res.status(400).json({ error: 'Falta el userId en el cuerpo de la solicitud' });
    }
    try {
      const newPdf = await UserPdf.create({
        pdf_name: req.file.originalname,
        userId: userId
      });

      res.status(201).json({ message: 'Archivo PDF subido y registrado correctamente', pdf: newPdf });
    } catch (dbError) {
      console.error('Error al guardar en la base de datos:', dbError);
      return res.status(500).json({ error: 'Error al guardar el archivo en la base de datos' });
    }
  });
};

export default upload;
