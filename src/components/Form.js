import { useState } from "react"
import "../Form.css";
const Form=()=>{
  
     const[input,setInput]=useState({
      fname:"",
      email:"",
      address:""
     })

     const ggg=(e)=>{
      e.preventDefault();
      alert("input form submitted")
      //console.log(e.target.value)
     }
     const textInput=(e)=>{
        // console.log(e.target.value)
        setInput((preValue)=>{
          const name=e.target.name;
          const value=e.target.value;
          const placeholder=e.target.placeholder
          console.log(name,value,placeholder)
          if(name==="fname"){
            return(
              {            
              fname:value,
              email:preValue.email,
              address:preValue.address
              }
            )
          }
          else if(name==="email"){
            return(
              {
                fname:preValue.fname,
                email:value,
                address:preValue.address
              }
            )
          }
          else if(name==="address"){
            return(
              {
              fname:preValue.fname,
              email:preValue.email,
              address:value
              }
            )
          }
       })   
     }
    
    return(
        <>
        <h1>{input.fname}{input.email}{input.address}</h1>
       <form onSubmit={ggg}>        
         <h4>Fill the Detials</h4>
       Name: <input type="text" onChange={textInput} placeholder="Name" name="fname"/>
       Email: <input type="email"  onChange={textInput} placeholder="Name@xyz.com" name="email"/>
       Address: <input type="text" onChange={textInput} placeholder="abc" name="address"/>
       {/* Mobile No.: <input type="number"placeholder="987654321"/> */}
       {/* Pincode: <input type="number" placeholder="123456"/> */}
      <button type="submit">Submit</button>
       </form>
        </>
    )
}
export default Form;