import mongoose from 'mongoose';

const chordSchema = mongoose.Schema({
    type: {type: String, required: true},
    root: {type: String, required: true},
    img: {data: Buffer, contentType: String},
    createdAt: {type: Date, default: new Date()},
});

const chord = mongoose.model('Chord', chordSchema);

export default chord;