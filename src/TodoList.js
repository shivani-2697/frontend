import { useState } from "react"

export const TodoList=()=>{
   const[inputlist,setInputlist] =useState("")
   const[item,setItem]=useState([])
   
   const arr1=[5,7,8,9];
   const arr2=['gfsdf','fada','fgdsafda'];
   const arr3=[arr1+arr2];
   console.log(arr3)
   console.log([...arr1,...arr2])


  /*const arr1=[5,6,8,9];
  const arr=arr1.map((item,index)=>{
    return item*2;
  })*/
  //console.log(arr)
    
      /*const arr2=arr1.filter((value,index)=>{
        return value>6;
      })
      console.log(arr2)*/

      const textChange=()=>{
        setItem((oldData)=>{
          return [...oldData,inputlist]
        })
        setInputlist("")
      }
        
      const inputChange=(e)=>{
       console.log(e.target.value)
       setInputlist(e.target.value)
      }
      const deleteItem=(index)=>{
          setItem((oldData)=>{
              return oldData.filter((value,i)=>{
                  return index!==i
               })
          })
      }

 return(
  <>
  <h1>TodoList</h1>
  <input type="text" onChange={inputChange} value={inputlist}/>
  <button onClick={textChange}>add</button>
  {
    item.map((itemVal,index)=>{
      return(
        <div>        
        <h1>{itemVal}</h1>
        <button onClick={()=>deleteItem(index)}>remove</button>
        </div>
      )
    })
  }
  </>
 )
}