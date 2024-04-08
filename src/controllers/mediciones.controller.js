import {pool} from '../db.js'

export const getMediciones = async(req,res) =>{

   try {
        //throw new Error('Mi error')
        const [rows] = await pool.query('select * from mediciones',)
        //res.json(rows) 
        res.json({ results: rows }); 
   } catch (error) {
        return res.status(500).json({message:'Error en el get'})
   }
   
}
export const getMedicion = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[rows] = await pool.query('select * from mediciones where id=?',[req.params.id])

        if(rows.length<=0) return res.status(404).json({
            message:'Medición no encontrado'
    })

        //res.json(rows[0])
        //res.json({ results: rows[0] });
        res.json({ results: rows});
    //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message: "Error al obtener medición"})
    }
    
}

export const createMedicion = async (req,res) => {
    try {
        const {fecharesgistro,mesEmbarazo,temperatura,peso,altura,IMC,presionArterial,AlturaUterina,FrecCardiaca,MovFetal,edema,centroAtencion,userId} =req.body
        const [rows] = await pool.query('insert into mediciones(fecharesgistro,mesEmbarazo,temperatura,peso,altura,IMC,presionArterial,AlturaUterina,FrecCardiaca,MovFetal,edema,centroAtencion,userId) values(?,?,?,?,?,?,?,?,?,?,?,?,?)',[fecharesgistro,mesEmbarazo,temperatura,peso,altura,IMC,presionArterial,AlturaUterina,FrecCardiaca,MovFetal,edema,centroAtencion,userId])
        console.log(req.body)
        res.send({
            id:rows.id,
            fecharesgistro,
            mesEmbarazo,
            temperatura,
            peso,
            altura,
            IMC,
            presionArterial,
            AlturaUterina,
            FrecCardiaca,
            MovFetal,
            edema,
            centroAtencion,
            userId
        })    
    } catch (error) {
        return res.status(500).json({message:"Error al crear medición"})
        //return res.status(500).json({error})
    }
    
}

export const deleteMedicion = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[result] = await pool.query('delete from mediciones where id = ?',[req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({message:'Medición no encontrado para eliminar'})

        res.sendStatus(204)
        //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message:"Error al eliminar medición"})
    }
    
}

export const updateMedicion = async (req,res) => {
    try {
        const {id} =req.params
        const {fecharesgistro,mesEmbarazo,temperatura,peso,altura,IMC,presionArterial,AlturaUterina,FrecCardiaca,MovFetal,edema,centroAtencion,userId} = req.body

        const [result] = await pool.query('Update mediciones set fecharesgistro = IFNULL(?,fecharesgistro), mesEmbarazo = IFNULL(?, mesEmbarazo), temperatura = IFNULL(?, temperatura), peso = IFNULL(?, peso), altura = IFNULL(?, altura), IMC = IFNULL(?, IMC), presionArterial = IFNULL(?, presionArterial), AlturaUterina = IFNULL(?, AlturaUterina), FrecCardiaca = IFNULL(?, FrecCardiaca), MovFetal = IFNULL(?, MovFetal), edema = IFNULL(?, edema), centroAtencion = IFNULL(?, centroAtencion), userId = IFNULL(?, userId) where id = ?',[fecharesgistro,mesEmbarazo,temperatura,peso,altura,IMC,presionArterial,AlturaUterina,FrecCardiaca,MovFetal,edema,centroAtencion,userId,id])
        
        if(result.affectedRows<=0) return res.status(404).json({message: 'Medición no encontrado no se pudo nodificar'})

        const [rows] = await pool.query('select * from mediciones where id = ?',[id])

        ////return res.json(rows[0])    
        res.json({ results: rows});
    } catch (error) {
        //console.error("Error al actualizar el registro:", error);
        //return res.status(500).json({message:Error})
        return res.status(500).json({message:"Error al actualizar medición"})
        //return error
    }
    
}