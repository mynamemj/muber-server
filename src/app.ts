import {GraphQLServer} from 'graphql-yoga';
// Helmet을 이용하면 HTTP 헤더를 적절히 설정하여 몇 가지 잘 알려진 웹 취약성으로부터 앱을 보호할 수 있습니다.
import helmet from 'helmet';

import logger from 'morgan';
// SPA(Single Page Application)의 경우에는, RESTful API를 기반으로 비동기 네트워크 통신을 하기 때문에 API 서버와 웹 페이지 서버가 다를 수 있다. 이런 경우에 API 서버로 요청을 할 시에 CORS 제한이 걸리게 된다.
import cors from 'cors';
import schema from'./schema';

class App {
    public app:GraphQLServer;
    constructor(){
        //서버는 사용될 스키마를 가지고 있어야 함 (타입스키마,리솔버)
        this.app=new GraphQLServer({schema});
        this.middlewares();
    }
    private middlewares = ():void =>{
        this.app.express.use(helmet(),logger("dev"),cors());
    }
}

export default new App().app;