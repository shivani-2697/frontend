import '../App.css'
const Counter=(props)=>{
    const firstname="priyanka"
    const sirname="sawai";
    return(
        <>
        <h1>{props.name}</h1>
        /*template string*/
        <h1 className="demo">{`hiii ${firstname} ${sirname}`}</h1>
        <p id='para'>fdscfdag sdgahfhg bsgdfgs bvsdgf</p>
        <h1 style={{backgroundColor:"pink" ,color:"red"}}>gcfdgcvzxcb</h1>       
        </>
    )
}
export default Counter;
