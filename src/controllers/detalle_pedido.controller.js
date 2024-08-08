import {pool} from '../db.js'

export const getPosiciones = async(req,res) =>{

   try {
        //throw new Error('Mi error')
        const [rows] = await pool.query('select a.*, b.atencion,c.descripcion from t_detalle_pedido a join t_pedido b on b.id=a.t_pedido_id join t_producto c on c.id=a.t_producto_id',)
        //res.json(rows) 
        res.json(rows ); 
   } catch (error) {
        return res.status(500).json({message:'Error en el get'})
   }

   
}

export const getPosicionesPedido = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[rows] = await pool.query('select * from t_detalle_pedido where t_pedido_id=?',[req.params.id])

        if(rows.length<=0) return res.status(404).json({
            message:'Posiciones no encontradas'
    })

        //res.json(rows[0])
        //res.json({ results: rows[0] });
        res.json(rows);
    //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message: "Error al obtener posiciones"})
    }
    
}