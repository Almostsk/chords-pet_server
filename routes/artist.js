import express from 'express';

import { createArtist, getArtist, getArtists } from '../controllers/artist.js';

import upload from '../middleware/fileUpload.js';

const router = express.Router();

router.post('/create', upload.single('img'), createArtist);
router.get('/:id', getArtist);
router.get('/', getArtists);





export default router;