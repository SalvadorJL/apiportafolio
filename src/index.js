import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import emailRoutes from './routes/email.routes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/api/email', emailRoutes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
