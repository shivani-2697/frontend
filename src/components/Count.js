import { useReducer} from "react";
import "./Count.css";
import  Child  from "./child";
const reducer=(state,action)=>{
    if(action.type==="Increment"){
         return state+1;
    }
    if(action.type==="Decrement"){
        return state-1;
    }
    if(action.type==="Reset"){
        return state=0;
    }
  return state;
}
const Count=()=>{ 
    
 //const[count,setCount] = useState(0);
    const[count,dispatch]=useReducer(reducer,0)
    console.log(useReducer())
     /*const increment=()=>{
       setCount(count+1)
     }*/
     /*const decrement=()=>{
       if(count<=0){
        setCount(0)
       }
       else{
        setCount(count-1)
       }
     }

     const reset=()=>{
       setCount(0)
     }*/
    return(
        <>
        <p className="container">
        <h1>Counter</h1>
        <h2>{count}</h2>
        <>
        <p className="button1">
          <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
          <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
          <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
        </p>
        </>
        </p>
       <Child/>
       {/* <button onClick={reset}>Reset</button> */}
        </>
    )
}
export default Count;