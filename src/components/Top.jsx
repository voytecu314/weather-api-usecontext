import { useContext } from "react";
import MyContext from "../context/MyContext";

const Top = () => {

    const {data, setQuery} = useContext(MyContext);

    const submitHandler = (e) => {
        e.preventDefault();                                   
        setQuery(e.target.firstChild.value);                 
      }   

    return (
        <div id='head'>
        <h1>{data?data.name:'Type city name '}</h1> 
        <form onSubmit={submitHandler}>
          <input type="text" id='input'/>
          <button>Search</button>
        </form>
        </div>
    )
}

export default Top;