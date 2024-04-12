import {pool} from '../db.js'

export const getCitas = async(req,res) =>{

   try {
        //throw new Error('Mi error')
        const [rows] = await pool.query('select * from Cita',)
        //res.json(rows) 
        res.json({ results: rows }); 
   } catch (error) {
        return res.status(500).json({message:'Error en el get'})
   }
   
}