import { useContext } from "react"
import { Store } from "../App"
import { Store1 } from "../App"
export const CompC=({name})=>{
const context=useContext(Store)
const context1=useContext(Store1);
  return(
    <>
    <h1>hiii {context.fname}  {context.lname} {context1.age}</h1>
    
    </>
  )
}