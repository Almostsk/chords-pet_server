import Artist from '../models/Artist.js';
import Song from '../models/Song.js';

export const search = async (req, res, next) => {
    const {term} = req.query;

    try {
        const resultArtist = await Artist.find({'name' : { '$regex' : term, '$options' : 'i' } });
        const resultSong = await Song.find({'name' : { '$regex' : term, '$options' : 'i' } });
        
        res.status(200).json({artist: resultArtist, song: resultSong});
    } catch (error) {
        res.status(404).json({message: error.message}) 
    }
};

