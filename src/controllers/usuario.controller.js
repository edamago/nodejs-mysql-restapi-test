import {pool} from '../db.js'

export const getUsuarios = async(req,res) =>{

   try {
        //throw new Error('Mi error')
        const [rows] = await pool.query('select * from t_usuario',)
        //res.json(rows) 
        res.json(rows ); 
   } catch (error) {
        return res.status(500).json({message:'Error en el get'})
   }

   
}

export const getUsuario = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[rows] = await pool.query('select * from t_usuario where id=?',[req.params.id])

        if(rows.length<=0) return res.status(404).json({
            message:'Usuario no encontrado'
    })

        //res.json(rows[0])
        //res.json({ results: rows[0] });
        res.json(rows);
    //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message: "Error al obtener usuario"})
    }
    
}


export const createUsuario = async (req,res) => {
    try {
        const {nombre,correo,estado,password,activo,nomusuario} =req.body
        const [rows] = await pool.query('insert into t_usuario(nombre,correo,estado,password,activo,nomusuario) values(?,?,?,?,?,?)',[nombre,correo,estado,password,activo,nomusuario])
        console.log(req.body)
        res.send({
            id:rows.insertId,
            nombre,
            correo,
            estado,
            password,
            activo,
            nomusuario 
        })    
    } catch (error) {
        return res.status(500).json({message:"Error al crear usuario"})
    }
    
}

export const deleteUsuario = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[result] = await pool.query('delete from t_usuario where id = ?',[req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({message:'Usuario no encontrado para eliminar'})

        res.sendStatus(204)
        //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message:"Error al eliminar usuario"})
    }
    
}

export const updateUsuario = async (req,res) => {
    try {
        const {id} =req.params
        const {nombre,correo,estado,password,activo,nomusuario} = req.body

        const [result] = await pool.query('Update t_usuario set nombre = IFNULL(?,nombre), correo = IFNULL(?,correo), estado = IFNULL(?, estado), password = IFNULL(?, password) , activo = IFNULL(?, activo), nomusuario = IFNULL(?, nomusuario) where id = ?',[nombre,correo,estado,password,activo,nomusuario])

        if(result.affectedRows<=0) return res.status(404).json({message: 'Usuario no encontrado no se pudo nodificar'})

        const [rows] = await pool.query('select * from t_usuario where id = ?',[id])

        //return res.json(rows[0])    
        res.json({ results: rows});
    } catch (error) {
        return res.status(500).json({message:"Error al actualizar usuario"})
    }
    
}
