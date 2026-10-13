import React from "react";
const Child=()=>{
    let count1=0;
    console.log(count1+1)
  return(
    <>
    <h1>this is child component </h1>
    </>
  )
}
export default React.memo(Child);