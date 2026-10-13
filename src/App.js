import { createContext, useState } from "react";
import Demo from "./Demo";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Count from "./components/Count";
import { CompA } from "./components/CompA";
import { Home } from "./router/Home";
import { About } from "./router/About";
import { Contact } from "./router/Contact";
import { Routes,Route } from "react-router-dom";
import { Error } from "./router/Error";
import FetchApi from "./FetchApi";
 const Store=createContext();
 const Store1=createContext();
const App=()=>{
  return(
    <>   
    {/* <Store.Provider value={{fname:"shivani",lname:"kale"}}> */}
      {/* <Store1.Provider value={{age:29}}> */}
        {/* <CompA/>   */}
      {/* </Store1.Provider>        */}
    {/* </Store.Provider> */}
    <Routes>
      {/* <Route path="/" element={<Home/>}/> */}
      {/* <Route path="/about" element={<About/>}/> */}
      {/* <Route path="/contact" element={<Contact/>}/> */}
      {/* <Route path="*" element={<Error/>}/> */}
    </Routes>
       
    {/* <Demo firstName="shivani" lastName="mohod"/> */}
    {/* <Counter name="priya" sirname="mohod"/> */}
    {/* <Form/> */}
    {/* <Count/> */}
    {/* <CompA name={"kajal"} /> */}
    <FetchApi/>
    </>

  )
}
export default App;
export {Store,Store1};