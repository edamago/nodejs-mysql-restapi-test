import {pool} from '../db.js'

export const getEmployees = async(req,res) =>{

   try {
        //throw new Error('Mi error')
        const [rows] = await pool.query('select * from employee',)
        //res.json(rows) 
        res.json({ results: rows }); 
   } catch (error) {
        return res.status(500).json({message:'Error en el get'})
   }

   
}

export const getEmployee = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[rows] = await pool.query('select * from employee where id=?',[req.params.id])

        if(rows.length<=0) return res.status(404).json({
            message:'Empleado no encontrado'
    })

        //res.json(rows[0])
        //res.json({ results: rows[0] });
        res.json({ results: rows});
    //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message: "Error al obtener empleado"})
    }
    
}

export const createEmployee = async (req,res) => {
    try {
        const {nombre, salario} =req.body
        const [rows] = await pool.query('insert into employee(nombre, salario) values(?,?)',[nombre, salario])
        console.log(req.body)
        res.send({
            id:rows.insertId,
            nombre,
            salario 
        })    
    } catch (error) {
        return res.status(500).json({message:"Error al crear empleado"})
    }
    
}

export const deleteEmployee = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[result] = await pool.query('delete from employee where id = ?',[req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({message:'Empleado no encontrado para eliminar'})

        res.sendStatus(204)
        //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message:"Error al eliminar empleado"})
    }
    
}

export const updateEmployee = async (req,res) => {
    try {
        const {id} =req.params
        const {nombre, salario} = req.body

        const [result] = await pool.query('Update employee set nombre = IFNULL(?,nombre), salario = IFNULL(?, salario) where id = ?',[nombre, salario, id])

        if(result.affectedRows<=0) return res.status(404).json({message: 'Empleado no encontrado no se pudo nodificar'})

        const [rows] = await pool.query('select * from employee where id = ?',[id])

        return res.json(rows[0])    
    } catch (error) {
        return res.status(500).json({message:"Error al actualizar empleado"})
    }
    
}