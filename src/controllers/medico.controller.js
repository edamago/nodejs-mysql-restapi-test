import {pool} from '../db.js'

export const getMedicos = async(req,res) =>{

   try {
        //throw new Error('Mi error')
        const [rows] = await pool.query('select * from medico',)
        //res.json(rows) 
        res.json({ results: rows }); 
   } catch (error) {
        return res.status(500).json({message:'Error en el get'})
   }
   
}
export const getMedico = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[rows] = await pool.query('select * from medico where id=?',[req.params.id])

        if(rows.length<=0) return res.status(404).json({
            message:'Medico no encontrado'
    })

        //res.json(rows[0])
        //res.json({ results: rows[0] });
        res.json({ results: rows});
    //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message: "Error al obtener médico"})
    }
    
}

export const createMedico = async (req,res) => {
    try {
        const {nombre,DNI,direccion,email,celular} =req.body
        const [rows] = await pool.query('insert into medico(nombre,DNI,direccion,email,celular) values(?,?,?,?,?)',[nombre,DNI,direccion,email,celular])
        console.log(req.body)
        res.send({
            id:rows.id,
            nombre,
            DNI,
            direccion,
            email,
            celular
        })    
    } catch (error) {
        return res.status(500).json({message:"Error al crear médico"})
        //return res.status(500).json({error})
    }
    
}

export const deleteMedico = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[result] = await pool.query('delete from medico where id = ?',[req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({message:'Médico no encontrado para eliminar'})

        res.sendStatus(204)
        //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message:"Error al eliminar médico"})
    }
    
}

export const updateMedico = async (req,res) => {
    try {
        const {id} =req.params
        const {nombre,DNI,direccion,email,celular} = req.body

        const [result] = await pool.query('Update medico set nombre = IFNULL(?,nombre), DNI = IFNULL(?, DNI), direccion = IFNULL(?, direccion), email = IFNULL(?, email), celular = IFNULL(?, celular) where id = ?',[nombre,DNI,direccion,email,celular,id])
        
        if(result.affectedRows<=0) return res.status(404).json({message: 'Médico no encontrado no se pudo nodificar'})

        const [rows] = await pool.query('select * from medico where id = ?',[id])

        ////return res.json(rows[0])    
        res.json({ results: rows});
    } catch (error) {
        //console.error("Error al actualizar el registro:", error);
        //return res.status(500).json({message:Error})
        return res.status(500).json({message:"Error al actualizar médico"})
        //return error
    }
    
}