import { useContext } from "react";
import MyContext from "../context/MyContext";

const Bottom = () => {

    const {data, isThereData} = useContext(MyContext);

    let latitude, longitude, temperature, feels_like, humidity, pressure, wind_speed, sunrise, sunset;

    latitude = longitude = temperature = feels_like = humidity = pressure = wind_speed = sunrise = sunset = null;

    const assignData = () => {
        latitude = data.coord.lat;
        longitude = data.coord.lon;
        temperature = data.main.temp; 
        feels_like = data.main.feels_like; 
        humidity = data.main.humidity;
        pressure = data.main.pressure;
        wind_speed = data.wind.speed; 
        sunrise = new Date(data.sys.sunrise).toLocaleString(); 
        sunset = new Date(data.sys.sunset).toLocaleString();
        return [{latitude}, {longitude}, {temperature}, {feels_like}, {humidity}, {pressure}, {wind_speed}, {sunrise}, {sunset}]
    }

    const dataToMap = isThereData && assignData();
    

    return (
        <div id="forcast">
            {dataToMap && dataToMap.map((item,i)=>(<><span key={i}>{Object.keys(item)[0]+': '+item[Object.keys(item)[0]]}</span><br/></>))}
        </div>
    )
}

export default Bottom;