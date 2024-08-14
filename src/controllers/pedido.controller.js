import {pool} from '../db.js'


export const getPedidosCliente = async (req,res) =>{
    try {
        //console.log(req.params.id)
        const[rows] = await pool.query('select * from t_pedido where t_cliente_id=?',[req.params.id])

        if(rows.length<=0) return res.status(404).json({
            message:'Pedidos no encontradas'
    })

        //res.json(rows[0])
        //res.json({ results: rows[0] });
        res.json(rows);
    //res.send('Obtener empleado por id')    
    } catch (error) {
        return res.status(500).json({message: "Error al obtener pedidos"})
    }
    
}