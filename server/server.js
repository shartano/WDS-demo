import express from 'express'
import cors from 'cors'
import pool from './db.js'

const app = express();

//would probably have token handled up here

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.status(200).json({
        'message': "Connected to backend"
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));