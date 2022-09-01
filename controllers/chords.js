import Chord from '../models/Chord.js';
import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();

export const createChord = async (req, res) => {
    const data = req.body;

    const newChord = new Chord({
        type: data.type,
        root: data.root,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        },
        createdAt: new Date().toISOString()
    });

    try {
        await newChord.save();
        res.status(200).json(newChord)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};

export const getChord = async (req, res) => {
    const {id} = req.params;
    try {
        const chord = await Chord.findById(id);

        res.status(200).json(chord);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};

export const getChords = async(req, res) => {
    try {
        const chords = await Chord.find({});

        res.status(200).json(chords);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};