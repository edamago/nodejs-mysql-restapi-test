import {pool} from '../db.js'

export const getDiarios = async(req,res) =>{

   try {
        //throw new Error('Mi error')
        const [rows] = await pool.query('select * from Diario',)
        //res.json(rows) 
        res.json({ results: rows }); 
   } catch (error) {
        return res.status(500).json({message:'Error en el get'})
   }
   
}
export const getDiario = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[rows] = await pool.query('select * from Diario where id=?',[req.params.id])

        if(rows.length<=0) return res.status(404).json({
            message:'Dario no encontrado'
    })

        //res.json(rows[0])
        //res.json({ results: rows[0] });
        res.json({ results: rows});
    //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message: "Error al obtener Diario"})
    }
    
}

export const createDiario = async (req,res) => {
    try {
        const {fechaRegistro,sintomas,userId} =req.body
        const [rows] = await pool.query('insert into Diario(fechaRegistro,sintomas,userId) values(?,?,?)',[fechaRegistro,sintomas,userId])
        console.log(req.body)
        res.send({
            id:rows.id,
            fechaRegistro,
            sintomas,
            userId
        })    
    } catch (error) {
        return res.status(500).json({message:"Error al crear diario"})
        //return res.status(500).json({error})
    }
    
}

export const deleteDiario = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[result] = await pool.query('delete from diario where id = ?',[req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({message:'Dario no encontrado para eliminar'})

        res.sendStatus(204)
        //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message:"Error al eliminar diario"})
    }
    
}

export const updateDiario = async (req,res) => {
    try {
        const {id} =req.params
        const {fechaRegistro,sintomas,userId} = req.body

        const [result] = await pool.query('Update registro set fechaRegistro = IFNULL(?,fechaRegistro), sintomas = IFNULL(?, sintomas), userId = IFNULL(?, userId) where id = ?',[fechaRegistro,sintomas,userId,id])
        
        if(result.affectedRows<=0) return res.status(404).json({message: 'Registro no encontrado no se pudo nodificar'})

        const [rows] = await pool.query('select * from diario where id = ?',[id])

        ////return res.json(rows[0])    
        res.json({ results: rows});
    } catch (error) {
        //console.error("Error al actualizar el registro:", error);
        //return res.status(500).json({message:Error})
        return res.status(500).json({message:"Error al actualizar diario"})
        //return error
    }
    
}