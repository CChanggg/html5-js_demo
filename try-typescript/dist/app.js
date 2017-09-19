"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// es6？ typescript class 
class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.json({
                message: 'Hello World!'
            });
        });
        this.express.use('/', router);
    }
}
// public attribute
exports.default = new App().express;
//# sourceMappingURL=app.js.map