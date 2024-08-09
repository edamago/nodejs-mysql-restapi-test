import {pool} from '../db.js'

export const getEstadosPosicionPedido = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[rows] = await pool.query('select b.orden, b.descripcion, a.* from t_estado_pedido a join t_estado b on b.id=a.t_estado_id where t_detalle_pedido_id=?',[req.params.id])

        if(rows.length<=0) return res.status(404).json({
            message:'Detalle de posición no encontrada'
    })

        //res.json(rows[0])
        //res.json({ results: rows[0] });
        res.json(rows);
    //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message: "Error al obtener detalle posición"})
    }
    
}

