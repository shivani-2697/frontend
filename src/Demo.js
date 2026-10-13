import { useEffect, useReducer, useState } from 'react';
import './Demo.css'
          


const Demo=({firstName,lastName})=>{
    //let count=0;
    let arr=[3,5,4,7];
const [count,setCount] = useState(0);
const[name,setName]=useState("priya")
const[data,setData]=useState([])
useEffect(()=>{
    getData();
},[])

const getData=async()=>{
 const res=await fetch('https://jsonplaceholder.typicode.com/posts')
 //console.log(res)
   const apiData=await res.json();
   console.log(apiData)
   setData(apiData)
}
    //const arr=["kajal","komal","neha"];
   //const[ka,ko,ne]=arr;
    //console.log(ne)
    /*const obj={
        firstName:"priya",
        lastName:"sawai",
        age:25
    }*/
    //const {firstName,lastName,age}=obj;
    //console.log(firstName)
    //console.log(age)
    //console.log(obj.lastName)
    //console.log(props)
    //console.log(props.firstName)
    /*const SubmitInfo=()=>{
        alert("info submitted successfully")
    }*/                                           
    const age=78;                                 
    function updateCount(){
        setCount(count+1)
    }
    const updateName=()=>{
        setName("priyanka")
    }
    return(
        // fragments
        <>   
        //ternary operator :/* short way of if else statement*/     
        {
            //age>=18?"you can drink alcohol":"you can't alcohol"
        }         
        {/* <h1 className="hhh"> Hiii priya</h1>*/}
        {/* <h2 >{lastName}{5+4}</h2> */}
        {/* <button onClick={SubmitInfo}>Submit</button> */}
        <h1>{count}</h1>
        <button onClick={updateCount}>Count</button>
        {name}
        <button onClick={updateName}>Click</button>
        {/* <h1 style={{color:"pink", backgroundColor:"green"}}>hdah hafbhjdf hjfjhdfs</h1> */}
        {
            data.map((ele,index)=>{
                return(
                    <>
                    <h1>{ele.userId}</h1>
                    <h1>{ele.title}</h1>
                    </>
                )
            })
        }
        </>
    )
}
export default Demo;