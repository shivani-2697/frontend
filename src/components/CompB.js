import { CompC } from "./CompC"
import { Store } from "../App"
import { useContext } from "react"
export const CompB=({name})=>{
  const context=useContext(Store)
  return(
    <>
    <h1>Hello {context.fname}</h1>
    <CompC name={name}/>
    </>
  )
}