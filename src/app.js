import express  from "express"
import employeesRoutes from './routes/employees.routes.js'
import registrosRoutes from './routes/registro.routes.js'
import seguimientosRoutes from './routes/seguimiento.routes.js'
import diariosRoutes from './routes/diario.routes.js'
import medicionesRoutes from './routes/mediciones.routes.js'
import medicosRoutes from './routes/medico.routes.js'
import citasRoutes from './routes/cita.routes.js'
import notificacionesroutes from './routes/notificacion.routes.js'
import recordatoriosroutes from './routes/recordatorio.router.js'
import preguntasroutes from './routes/pregunta.routes.js'
import comentariosroute from './routes/comentario.routes.js'

//import indexRoutes from './routes/index.routes.js'

const app=express() 



app.use(express.json())

//app.use(indexRoutes) jala rutas
app.use('/api',citasRoutes)
app.use('/api',employeesRoutes)
app.use('/api',registrosRoutes)
app.use('/api',seguimientosRoutes)
app.use('/api',diariosRoutes)
app.use('/api',medicionesRoutes)
app.use('/api',medicosRoutes)
app.use('/api',notificacionesroutes)
app.use('/api',recordatoriosroutes)
app.use('/api',preguntasroutes)
app.use('/api',comentariosroute)

app.use((req,res,next)=>{
    res.status(404).json({message:"Ruta no encontrada"})
})

export default app