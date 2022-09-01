import express from 'express';

import { createChord, getChords, getChord } from '../controllers/chords.js';

import auth from '../middleware/auth.js';
import upload from '../middleware/fileUpload.js';

const router = express.Router();

router.post('/create',upload.single('img'), createChord);
router.get('/', getChords);
router.get('/:id', getChord);





export default router;