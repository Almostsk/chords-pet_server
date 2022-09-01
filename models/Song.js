import mongoose from 'mongoose';

const songSchema = mongoose.Schema({
    name: {type: String, required: true},
    artist: {type: String, required: true},
    template: String,
    createdAt: {type: Date, default: new Date()},
});

const song = mongoose.model('Song', songSchema);

export default song;