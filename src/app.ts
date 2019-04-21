import {GraphQLServer} from 'graphql-yoga';
import helmet from 'helmet';
import logger from 'morgan';
import cors from 'cors';
import schema from'./schema';

class App {
    public app:GraphQLServer;
    constructor(){
        this.app=new GraphQLServer({schema});
        this.middlewares();
    }
    private middlewares = ():void =>{
        this.app.express.use(helmet(),logger("dev"),cors());
    }
}

export default new App().app;