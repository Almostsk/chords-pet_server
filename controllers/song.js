import Song from '../models/Song.js';


export const createSong = async (req, res) => {
    const data = req.body;

    const newSong = new Song({
        ...data,
        createdAt: new Date().toISOString()
    });
    try {
        await newSong.save();
        res.status(200).json(newSong);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};


export const getSong = async (req, res) => {
    const {id} = req.params;

    try {
        const song = await Song.findById(id);
        res.json(song);
    } catch (error) {
        res.json({message: error.message})
    }
};


export const getSongs = async (req, res) => {
    try {
        const songs = await getSongs.find({});
        res.json(songs);
    } catch (error) {
        res.json({message: error.message})
    }
}