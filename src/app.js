import express from 'express'
import cors from 'cors';
import routes from './routes';
import "./database"                           


class App{
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
        this.server.use('/.netlify/functions/api', routes)
    }

    middlewares(){
        this.server.use(express.json())
        this.server.use(cors())
    }

    routes(){
        
        this.server.use(routes);

    }


}



export default new App().server

