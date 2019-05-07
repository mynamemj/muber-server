import {ConnectionOptions} from 'typeorm';

const connectionOptions:ConnectionOptions = {
    type:'postgres',
    database:'muber',
    synchronize:true,
    logging:true,
    entities:['entities/**/*.*'],
    port:5432,
    host:process.env.DB_ENDPOINT||'localhost',
    username:process.env.DB_USERNAME ||'postgres',
    password:process.env.DB_PASSWORD ||'1234'

};
export default connectionOptions