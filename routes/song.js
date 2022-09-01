import express from 'express';
import { createSong, getSong, getSongs } from '../controllers/song.js';
import multer from 'multer';



const upload = multer();
const router = express.Router();

router.post('/create', upload.none(), createSong);
router.get('/:id', getSong);
router.get('/', getSongs);


export default router;