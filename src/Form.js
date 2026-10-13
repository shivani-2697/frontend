import { useState } from "react";

const Form = () => {
  const[data,setData]=useState({
    fname:"",
    email:"",
    address:""
  })

  //spread operator
  //const arr1=[2,3,4,5];
  //const arr2=['gsf','shgs','sgfs'];
  //const arr4=['gfh','gfdsafd']
  //const arr3=[...arr1,...arr2]
  //console.log(arr3)
  //console.log(...arr4)
  const[input,setInput]=useState()
  const textChange = (e) => {
    const value=e.target.value;
    const name=e.target.name;
   // const placeholder=e.target.placeholder
    console.log(name,value)
    setData((prevData)=>{
      //console.log(...prevData)
        return{
          ...prevData,
          [name]:value
        }

      /*if(name==="fname"){
        return {
          fname:value,
          email:prevData.email,
          address:prevData.address
        }
      }
      else if(name==="email"){
        return {
          fname:prevData.fname,
          email:value,
          address:prevData.address
        }
      }
      else if(name==="address"){
        return{
          fname:prevData.fname,
          email:prevData.email,
          address:value
        }
      }*/
    })
  };
 

const handleSubmit = (e) => {
  e.preventDefault();

alert(
  `Form Submitted Successfully!

Name: ${data.fname}
Email: ${data.email}
Address: ${data.address}`
);
};
  return (
    <>
    <form onSubmit={handleSubmit}>    
      <h1>{data.fname}{data.email}{data.address}</h1>
      Name: <input type="text" onChange={textChange} placeholder="Name"  name="fname"/>
      Email:<input type="email" onChange={textChange} placeholder="Email"  name="email"/>
      Address:<input type="text" onChange={textChange} placeholder="Address" name="address"/>
      <button type="submit" >Submit</button>
    </form>      
      
    </>
  );
};

export default Form;

//make forms ...........