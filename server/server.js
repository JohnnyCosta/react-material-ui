const jsonServer = require('json-server')

const data = () => {
    const data = { users: [] }
    for (let i = 0; i < 1000; i++) {
        data.users.push({ id: i, name: `user${i}` })
    }
    return data
}

const server = jsonServer.create()
const router = jsonServer.router(data())
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('/api', router)

server.listen(3001, () => {
    console.log('JSON Server is running')
})
