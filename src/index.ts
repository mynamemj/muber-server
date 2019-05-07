import {Options} from 'graphql-yoga';
import connectionOptions from './ormConfig';
import {createConnection} from 'typeorm';
import app from './app';
const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT : string ='/playground';
const GRAPHQL_ENDPOINT : string = '/graphql';

const appOptions :Options={
    port:PORT,
    playground:PLAYGROUND_ENDPOINT,
    endpoint:GRAPHQL_ENDPOINT
};
createConnection(connectionOptions).then(()=>{
    app.start(appOptions,()=>console.log(`Listening on port ${PORT}`));
});