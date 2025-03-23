import {pool} from '../db.js'

export const getComentarios = async(req,res) =>{

   try {
        //throw new Error('Mi error')
        const [rows] = await pool.query('select * from t_comentario',)
        //res.json(rows) 
        res.json({ results: rows }); 
   } catch (error) {
        return res.status(500).json({message:'Error en el get'})
   }

   
}

export const getComentario = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[rows] = await pool.query('select * from t_comentario where id=?',[req.params.id])

        if(rows.length<=0) return res.status(404).json({
            message:'Comentario no encontrado'
    })

        //res.json(rows[0])
        //res.json({ results: rows[0] });
        res.json({ results: rows});
    //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message: "Error al obtener comentario"})
    }
    
}

export const getComentarioUsuario = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[rows] = await pool.query('select * from t_comentario where T_USUARIO_ID=?',[req.params.id])

        if(rows.length<=0) return res.status(404).json({
            message:'Comentario no encontrada'
    })

        //res.json(rows[0])
        //res.json({ results: rows[0] });
        res.json({ results: rows});
    //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message: "Error al obtener comentario"})
    }
    
}

export const createComentario = async (req,res) => {
    try {
        const {descripcion,fecha,estado,activo,califica,t_usuario_id} =req.body
        const [rows] = await pool.query('insert into t_comentario(descripcion,fecha,estado,activo,califica,t_usuario_id) values(?,?,?,?,?,?)',[descripcion,fecha,estado,activo,califica,t_usuario_id])
        console.log(req.body)
        res.send({
            id:rows.insertId,
            descripcion,
            fecha,
            estado,
            activo,
            califica,
            t_usuario_id 
        })    
    } catch (error) {
        return res.status(500).json({message:"Error al crear comentario"})
    }
    
}

export const deleteComentario = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[result] = await pool.query('delete from t_comentario where id = ?',[req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({message:'Comentario no encontrado para eliminar'})

        res.sendStatus(204)
        //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message:"Error al eliminar comentario"})
    }
    
}

export const updateComentario = async (req,res) => {
    try {
        const {id} =req.params
        const {descripcion,fecha,estado,activo,califica,t_usuario_id} = req.body

        const [result] = await pool.query('Update t_comentario set descripcion = IFNULL(?,descripcion), fecha = IFNULL(?,fecha), estado = IFNULL(?, estado), activo = IFNULL(?, activo), califica = IFNULL(?, califica), t_usuario_id = IFNULL(?, t_usuario_id) where id = ?',[descripcion,fecha,estado,activo,califica,t_usuario_id])

        if(result.affectedRows<=0) return res.status(404).json({message: 'Comentario no encontrado no se pudo nodificar'})

        const [rows] = await pool.query('select * from t_comentario where id = ?',[id])

        //return res.json(rows[0])    
        res.json({ results: rows});
    } catch (error) {
        return res.status(500).json({message:"Error al actualizar comentario"})
    }
    
}