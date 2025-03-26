import {pool} from '../db.js'

export const getNotificaciones = async(req,res) =>{

   try {
        //throw new Error('Mi error')
        const [rows] = await pool.query('select * from t_notificaciones',)
        //res.json(rows) 
        res.json({ results: rows }); 
   } catch (error) {
        return res.status(500).json({message:'Error en el get'})
   }

   
}

export const getNotificacion = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[rows] = await pool.query('select * from t_notificaciones where id=?',[req.params.id])

        if(rows.length<=0) return res.status(404).json({
            message:'Notificacion no encontrada'
    })

        //res.json(rows[0])
        //res.json({ results: rows[0] });
        res.json({ results: rows});
    //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message: "Error al obtener notificacion"})
    }
    
}

export const getNotificacionUsuario = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[rows] = await pool.query('select * from t_notificaciones where T_USUARIO_ID=? and visto=0',[req.params.id])

        if(rows.length<=0) return res.status(404).json({
            message:'Notificacion no encontrada'
    })

        //res.json(rows[0])
        //res.json({ results: rows[0] });
        res.json({ results: rows});
    //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message: "Error al obtener notificacion"})
    }
    
}

export const getNotificacionUsuarioHistorial = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[rows] = await pool.query('select * from t_notificaciones where T_USUARIO_ID=?',[req.params.id])

        if(rows.length<=0) return res.status(404).json({
            message:'Notificacion no encontrada'
    })

        //res.json(rows[0])
        //res.json({ results: rows[0] });
        res.json({ results: rows});
    //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message: "Error al obtener notificacion"})
    }
    
}

export const createNotificacion = async (req,res) => {
    try {
        const {descripcion,estado,visto,t_usuario_id} =req.body
        const [rows] = await pool.query('insert into t_notificaciones(descripcion,estado,visto,t_usuario_id) values(?,?,?,?)',[descripcion,estado,visto,t_usuario_id])
        console.log(req.body)
        res.send({
            id:rows.insertId,
            descripcion,
            estado,
            visto,
            t_usuario_id
        }) 
           
    } catch (error) {
        return res.status(500).json({message:"Error al crear notificacion"})
    }
    
}

export const deleteNotificacion = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[result] = await pool.query('delete from t_notificaciones where id = ?',[req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({message:'Notificacion no encontrada para eliminar'})

        res.sendStatus(204)
        //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message:"Error al eliminar notificacion"})
    }
    
}

export const updateNotificacion = async (req,res) => {
    try {
        const {id} =req.params
        const {descripcion,estado,visto,t_usuario_id} = req.body

        const [result] = await pool.query('Update t_notificaciones set descripcion = IFNULL(?,descripcion), estado = IFNULL(?, estado), visto = IFNULL(?, visto), t_usuario_id = IFNULL(?, t_usuario_id) where id = ?',[descripcion,estado,visto,t_usuario_id,id])

        if(result.affectedRows<=0) return res.status(404).json({message: 'Notificacion no encontrado no se pudo nodificar'})

        const [rows] = await pool.query('select * from t_notificaciones where id = ?',[id])

        //return res.json(rows[0])    
        res.json({ results: rows});
    } catch (error) {
        return res.status(500).json({message:"Error al actualizar notificacion"})
    }
    
}

export const updateNotificacionVisto = async (req,res) => {
    try {
        const {id} =req.params
        const {visto} = req.body

        const [result] = await pool.query('Update t_notificaciones set visto = IFNULL(?, visto) where id = ?',[visto,id])

        if(result.affectedRows<=0) return res.status(404).json({message: 'Notificacion no encontrado no se pudo nodificar'})

        const [rows] = await pool.query('select * from t_notificaciones where id = ?',[id])

        //return res.json(rows[0])    
        res.json({ results: rows});
    } catch (error) {
        return res.status(500).json({message:"Error al actualizar notificacion"})
    }
    
}