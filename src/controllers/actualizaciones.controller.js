import {pool} from '../db.js'

export const getActualizaciones = async(req,res) =>{

   try {
        //throw new Error('Mi error')
        const [rows] = await pool.query('select * from t_actualizaciones',)
        //res.json(rows) 
        res.json({ results: rows }); 
   } catch (error) {
        return res.status(500).json({message:'Error en el get'})
   }

   
}

export const getActualizacion = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[rows] = await pool.query('select * from t_actualizaciones where id=? ORDER BY fecha',[req.params.id]) 

        if(rows.length<=0) return res.status(404).json({
            message:'Actualización no encontrada'
    })

        //res.json(rows[0])
        //res.json({ results: rows[0] });
        res.json({ results: rows});
    //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message: "Error al obtener actualización"})
    }
    
}

export const getActualizacionUsuario = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[rows] = await pool.query('select * from t_actualizaciones where T_USUARIO_ID=?',[req.params.id])

        if(rows.length<=0) return res.status(404).json({
            message:'Actualización no encontrada'
    })

        //res.json(rows[0])
        //res.json({ results: rows[0] });
        res.json({ results: rows});
    //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message: "Error al obtener actualización"})
    }
    
}

export const createActualizacion = async (req,res) => {
    try {
        const {titulo, descripcion,fecha,estado,visto,t_usuario_id} =req.body
        const [rows] = await pool.query('insert into t_actualizaciones(titulo, descripcion,fecha,estado,visto,t_usuario_id) values(?,?)',[titulo, descripcion,fecha,estado,visto,t_usuario_id])
        console.log(req.body)
        res.send({
            id:rows.insertId,
            titulo,
            descripcion 
        })    
    } catch (error) {
        return res.status(500).json({message:"Error al crear actualización"})
    }
    
}

export const deleteActualizacion = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[result] = await pool.query('delete from t_actualizaciones where id = ?',[req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({message:'Actualización no encontrado para eliminar'})

        res.sendStatus(204)
        //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message:"Error al eliminar actualización"})
    }
    
}

export const updateActualizacion = async (req,res) => {
    try {
        const {id} =req.params
        const {titulo, descripcion,fecha,estado,visto,t_usuario_id} = req.body

        const [result] = await pool.query('Update t_actualizaciones set titulo = IFNULL(?,titulo), descripcion = IFNULL(?,descripcion), fecha = IFNULL(?,fecha), estado = IFNULL(?, estado), visto = IFNULL(?, visto), t_usuario_id = IFNULL(?, t_usuario_id) where id = ?',[titulo, descripcion,fecha,estado,visto,t_usuario_id])

        if(result.affectedRows<=0) return res.status(404).json({message: 'Actualización no encontrado no se pudo nodificar'})

        const [rows] = await pool.query('select * from t_actualizaciones where id = ?',[id])

        //return res.json(rows[0])    
        res.json({ results: rows});
    } catch (error) {
        return res.status(500).json({message:"Error al actualizar actualización"})
    }
    
}
