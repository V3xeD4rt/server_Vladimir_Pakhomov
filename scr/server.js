import express from 'express'

const app = express()
const port = 3000

app.use(express.static('scr/pages'))

app.listen(port, () => {
    console.log('Система поиска тарасов активированна')
    console.log('В метре от вас находится '+ port +' тарасов')
})