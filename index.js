import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'



const app = express();
dotenv.config();


app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

// app.use('/posts', postsRoutes);
// app.use('/user', userRoutes)

app.get('/', (req, res) => {
    res.send('Helloo here !')
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
    }))
    .catch((err) => {
        console.log(err)
    });