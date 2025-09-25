import express from 'express';
const router = express.Router();
import pool from '../db.js';

router.get('/key/:key', async (req, res) => {
    const {key} = req.params;
    console.log('key:', key);
    try{
        const response = await pool.query('SELECT * FROM Numbs WHERE key=$1;', [key])

        if(response.rows.length > 0 ){
            res.status(200).json({
                message:"Successful Query",
                value:response.rows[0].value
            })
        }else{
            res.status(404).json({message:"Number not found"})
        }
    }catch(err){
        console.error(err);
        res.status(500).json({error:"Database error"})
    }
})

router.get('/', async (req, res) => {
    try{
        const response = await pool.query("SELECT * FROM Numbs;");
        
        res.status(200).json({
            message:"Successful query",
            "numbs":response.rows,
        })
    }catch(err){
        console.error(err);
        res.status(500).json({message:"Internal service error"})
    }
})

export default router;
