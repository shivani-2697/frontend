import { useEffect, useState } from "react";

const FetchApi=()=>{
    const[user,setUser]=useState([]);
    const getData=async()=>{
       /* try{
             fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
           return res.json();
        }).then((data)=>{
          // console.log(data)  
            setUser(data)
        })
        } catch(err){
            console.log(err)
        }*/
       
         try{
        const res=  await fetch("https://jsonplaceholder.typicode.com/posts")
        console.log(res)
        const apiData=  await res.json()
        console.log(apiData)
        setUser(apiData) 
            } 
            catch(err){
              console.log(err)
            }
         }
    useEffect(()=>{
        getData();
    },[])
    return(
        <>
        {
            user.map((users,index)=>
               {
                return(
                 <div key={index}>    
                <h1>{users.id}</h1>
                <h2>{users.title}</h2>
                <h3>{users.body}</h3>
                <h4>{users.userId}</h4>
                 </div>   
                )
               }
            )
        }
        </>
    )
}
export default FetchApi;