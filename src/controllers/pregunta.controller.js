import {pool} from '../db.js'

export const getPreguntas = async(req,res) =>{

   try {
        //throw new Error('Mi error')
        const [rows] = await pool.query('select * from t_pregunta',)
        //res.json(rows) 
        res.json({ results: rows }); 
   } catch (error) {
        return res.status(500).json({message:'Error en el get'})
   }

   
}

export const getPregunta = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[rows] = await pool.query('select * from t_pregunta where id=?',[req.params.id])

        if(rows.length<=0) return res.status(404).json({
            message:'Pregunta no encontrada'
    })

        //res.json(rows[0])
        //res.json({ results: rows[0] });
        res.json({ results: rows});
    //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message: "Error al obtener pregunta"})
    }
    
}

export const getPreguntaUsuario = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[rows] = await pool.query('select * from t_pregunta where T_USUARIO_ID=?',[req.params.id])

        if(rows.length<=0) return res.status(404).json({
            message:'Pregunta no encontrada'
    })

        //res.json(rows[0])
        //res.json({ results: rows[0] });
        res.json({ results: rows});
    //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message: "Error al obtener pregunta"})
    }
    
}

export const createPregunta = async (req,res) => {
    try {
        const {descripcion,fecha,estado,activo,t_usuario_id} =req.body
        const [rows] = await pool.query('insert into t_pregunta(descripcion,fecha,estado,activo,t_usuario_id) values(?,?)',[descripcion,fecha,estado,activo,t_usuario_id])
        console.log(req.body)
        res.send({
            id:rows.insertId,
            nombre,
            salario 
        })    
    } catch (error) {
        return res.status(500).json({message:"Error al crear pregunta"})
    }
    
}

export const deletePregunta = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[result] = await pool.query('delete from t_pregunta where id = ?',[req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({message:'Pregunta no encontrado para eliminar'})

        res.sendStatus(204)
        //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message:"Error al eliminar pregunta"})
    }
    
}

export const updatePregunta = async (req,res) => {
    try {
        const {id} =req.params
        const {descripcion,fecha,estado,activo,t_usuario_id} = req.body

        const [result] = await pool.query('Update t_pregunta set descripcion = IFNULL(?,descripcion), fecha = IFNULL(?,fecha), estado = IFNULL(?, estado), activo = IFNULL(?, activo), t_usuario_id = IFNULL(?, t_usuario_id) where id = ?',[descripcion,fecha,estado,activo,t_usuario_id])

        if(result.affectedRows<=0) return res.status(404).json({message: 'Pregunta no encontrado no se pudo nodificar'})

        const [rows] = await pool.query('select * from t_pregunta where id = ?',[id])

        //return res.json(rows[0])    
        res.json({ results: rows});
    } catch (error) {
        return res.status(500).json({message:"Error al actualizar pregunta"})
    }
    
}