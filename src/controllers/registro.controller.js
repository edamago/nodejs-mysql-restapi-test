import {pool} from '../db.js'

export const getRegistros = async(req,res) =>{

   try {
        //throw new Error('Mi error')
        const [rows] = await pool.query('select * from registro',)
        //res.json(rows) 
        res.json({ results: rows }); 
   } catch (error) {
        return res.status(500).json({message:'Error en el get'})
   }
   
}
export const getRegistro = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[rows] = await pool.query('select * from registro where userId=?',[req.params.id])

        if(rows.length<=0) return res.status(404).json({
            message:'Registro no encontrado'
    })

        //res.json(rows[0])
        //res.json({ results: rows[0] });
        res.json({ results: rows});
    //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message: "Error al obtener registro"})
    }
    
}

export const createRegistro = async (req,res) => {
    try {
        const {userId,nombre,DNI,direccion,email,celular,clave} =req.body
        const [rows] = await pool.query('insert into registro(userId,nombre,DNI,direccion,email,celular,clave) values(?,?,?,?,?,?,?)',[userId,nombre,DNI,direccion,email,celular,clave])
        console.log(req.body)
        res.send({
            userId:rows.userId,
            nombre,
            DNI,
            direccion,
            email,
            celular,
            clave
        })    
    } catch (error) {
        return res.status(500).json({message:"Error al crear registro"})
        //return res.status(500).json({error})
    }
    
}

export const deleteRegistro = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[result] = await pool.query('delete from registro where userId = ?',[req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({message:'Registro no encontrado para eliminar'})

        res.sendStatus(204)
        //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message:"Error al eliminar registro"})
    }
    
}

export const updateRegistro = async (req,res) => {
    try {
        const {id} =req.params
        const {nombre,DNI,direccion,email,celular,clave} = req.body

        const [result] = await pool.query('Update registro set nombre = IFNULL(?,nombre), DNI = IFNULL(?, DNI), direccion = IFNULL(?, direccion), email = IFNULL(?, email), celular = IFNULL(?, celular), clave = IFNULL(?, clave) where userId = ?',[nombre,DNI,direccion,email,celular,clave,id])
        
        if(result.affectedRows<=0) return res.status(404).json({message: 'Registro no encontrado no se pudo nodificar'})

        const [rows] = await pool.query('select * from registro where userId = ?',[id])

        ////return res.json(rows[0])    
        res.json({ results: rows});
    } catch (error) {
        //console.error("Error al actualizar el registro:", error);
        //return res.status(500).json({message:Error})
        return res.status(500).json({message:"Error al actualizar registro"})
        //return error
    }
    
}