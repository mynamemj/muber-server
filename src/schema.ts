// 사용할 리솔버와 스키마를 통합
import {makeExecutableSchema} from 'graphql-tools';

import {fileLoader,mergeResolvers,mergeTypes} from 'merge-graphql-schemas';
import path from 'path';
//fileLoader :path에 있는 파일 load
const allTypes:any[]=fileLoader(
    //조건에 맞는 모든 path가져옴
    path.join(__dirname,'./api/**/*.graphql')
);

const allResolvers:any[]=fileLoader(
    path.join(__dirname,'./api/**/*.resolvers.*')
);

const mergedTypes = mergeTypes(allTypes);
const mergedResolvers=mergeResolvers(allResolvers);

const schema=makeExecutableSchema({
    typeDefs:mergedTypes,
    resolvers:mergedResolvers
});

export default schema;