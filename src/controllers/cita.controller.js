import {pool} from '../db.js'

export const getCitas = async(req,res) =>{

   try {
        //throw new Error('Mi error')
        const [rows] = await pool.query('select a.id,a.fechaCita,a.especialidad,a.sede,a.medicoId,b.nombre medico,a.userId,r.nombre paciente  from Cita a join medico b on b.id=a.medicoId join registro r on r.userId=a.userId',)
        //res.json(rows) 
        res.json({ results: rows }); 
   } catch (error) {
        return res.status(500).json({message:'Error en el get'})
   }
   
}