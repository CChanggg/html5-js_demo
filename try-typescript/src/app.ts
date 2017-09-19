import * as express from 'express'
// es6？ typescript class 
class App {
    public express
    constructor () {
        this.express = express()
        this.mountRoutes()
    }
    private mountRoutes (): void {
        const router = express.Router()
        router.get('/', (req, res) => {
            res.json({
                message: 'Hello World!'
            })
        })
        this.express.use('/', router)
    }
}

// public attribute
export default new App().express
