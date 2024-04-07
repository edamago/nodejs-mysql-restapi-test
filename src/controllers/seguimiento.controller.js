import {pool} from '../db.js'

export const getSeguimientos = async(req,res) =>{

   try {
        //throw new Error('Mi error')
        const [rows] = await pool.query('select * from Seguimiento',)
        //res.json(rows) 
        res.json({ results: rows }); 
   } catch (error) {
        return res.status(500).json({message:'Error en el get'})
   }
   
}
export const getSeguimiento = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[rows] = await pool.query('select * from Seguimiento where id=?',[req.params.id])

        if(rows.length<=0) return res.status(404).json({
            message:'Seguimiento no encontrado'
    })

        //res.json(rows[0])
        //res.json({ results: rows[0] });
        res.json({ results: rows});
    //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message: "Error al obtener seguimiento"})
    }
    
}

export const createSeguimiento = async (req,res) => {
    try {
        const {fechaCita,ultimaRegla,fpp,semanaGestacion,citaMedica,userId} =req.body
        const [rows] = await pool.query('insert into Seguimiento(fechaCita,ultimaRegla,fpp,semanaGestacion,citaMedica,userId) values(?,?,?,?,?,?)',[fechaCita,ultimaRegla,fpp,semanaGestacion,citaMedica,userId])
        console.log(req.body)
        res.send({
            id:rows.id,
            fechaCita,
            ultimaRegla,
            fpp,
            semanaGestacion,
            citaMedica,
            userId
        })    
    } catch (error) {
        return res.status(500).json({message:"Error al crear seguimiento"})
        //return res.status(500).json({error})
    }
    
}

export const deleteSeguimiento = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[result] = await pool.query('delete from Seguimiento where id = ?',[req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({message:'Seguimiento no encontrado para eliminar'})

        res.sendStatus(204)
        //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message:"Error al eliminar seguimiento"})
    }
    
}

export const updateSeguimiento = async (req,res) => {
    try {
        const {id} =req.params
        const {fechaCita,ultimaRegla,fpp,semanaGestacion,citaMedica,userId} = req.body

        const [result] = await pool.query('Update Seguimiento set nombre = IFNULL(?,nombre), DNI = IFNULL(?, DNI), direccion = IFNULL(?, direccion), email = IFNULL(?, email), celular = IFNULL(?, celular), clave = IFNULL(?, clave) where userId = ?',[nombre,DNI,direccion,email,celular,clave,id])
        
        if(result.affectedRows<=0) return res.status(404).json({message: 'Seguimiento no encontrado no se pudo nodificar'})

        const [rows] = await pool.query('select * from Seguimiento where id = ?',[id])

        ////return res.json(rows[0])    
        res.json({ results: rows});
    } catch (error) {
        //console.error("Error al actualizar el registro:", error);
        //return res.status(500).json({message:Error})
        return res.status(500).json({message:"Error al actualizar seguimiento"})
        //return error
    }
    
}