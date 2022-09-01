import mongoose from 'mongoose';

const artistSchema = mongoose.Schema({
    name: {type: String, required: true},
    img: {data: Buffer, contentType: String},
});

const artist = mongoose.model('Artist', artistSchema);

export default artist;