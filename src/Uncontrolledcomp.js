import { useRef, useState } from "react"

const UncontrolledComp=()=>{
   const name1=useRef();
   //const[name,setName]=useState('')
   //const[data,setData]=useState()

 

 const handleSubmit=(e)=>{
    e.preventDefault()
      console.log(name1.current.value)
  //const name= document.querySelector('#priya').value;
  //console.log(name)
  //setData(name)

 }
 
  return(
    <form onSubmit={handleSubmit}>
    Name:<input type="text" id="priya" ref={name1} />
    <button type="submit">Submit</button>
    </form>
  )
}
export default UncontrolledComp;