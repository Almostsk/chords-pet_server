import Artist from '../models/Artist.js';
import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();

export const createArtist = async (req, res) => {
    const data = req.body;

    const newArtist = new Artist({
        name: data.name,
        img: req.file ? {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        } : null
    });
    try {
        await newArtist.save();
        res.status(200).json(newArtist);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};


export const getArtist = async (req, res) => {
    const {id} = req.params;

    try {
        const artist = await Artist.findById(id);

        res.status(200).json(artist);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};

export const getArtists = async(req, res) => {
    try {
        const artists = await Artist.find({});

        res.status(200).json(artists);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};