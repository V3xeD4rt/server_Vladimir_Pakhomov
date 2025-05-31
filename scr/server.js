import express from 'express'

const app = express()
const port = 3000

app.use(express.static('scr/pages'))

app.listen(port, () => {
    console.log('Сервер запущен. Порт: '+ port)
})