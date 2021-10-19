import 'dotenv/config'
import cors from 'cors'

import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

import { AppRouter } from './routes/App.routes'
import { GitHubRouter } from './routes/GitHub.routes'

const app = express()
app.use(cors())

const serverHttp = http.createServer(app)
const io = new Server(serverHttp, {
  cors: {
    origin: '*',
  },
})

io.on('connection', socket => {
  console.log(`👨 Usuário conectado via socket: ${socket.id}`)
})

app.use(express.json())
app.use(AppRouter)
app.use(GitHubRouter)

export { serverHttp, io }
