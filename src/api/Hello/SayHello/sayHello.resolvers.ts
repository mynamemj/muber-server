import { SayHelloQueryArgs, SayHelloResponse } from "src/types/graph";

const resolvers ={
    Query:{
        sayHello: (__:any,args:SayHelloQueryArgs):SayHelloResponse=>{
         return {
            error:false,
            text:`I'm ${args.name}`
        }}
    }
}

export default resolvers;