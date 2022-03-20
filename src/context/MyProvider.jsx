import MyContext from "./MyContext";
import { useState, useEffect } from "react";


const MyProvider = ( {children} ) => {
   
const [data, setData] = useState(null);  
const [query, setQuery] = useState('');    


const isThereData = data && data.cod==200;
const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`;

useEffect(()=>{

  fetch(url)
  .then(response=>response.json())
  .then(results=>{setData(results);console.log(results);});
  
},[url]);  

    return (
    <MyContext.Provider value={ {data, isThereData, setQuery} }>
        {children}
    </MyContext.Provider>
    )
}

export default MyProvider;