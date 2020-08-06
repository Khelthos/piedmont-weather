import React from "react";
// import { CardDeck, Row } from "reactstrap";
import WeatherCard from "./WeatherCard";

const ListWeather = ({ weathers }) => {
  //console.log("ListWeather", weathers);
  return weathers.map((weather, i) => {
    return (
      <WeatherCard
        key={i}
        id={weathers[i].id}
        name={weathers[i].name}
        description={weathers[i].weather[0].description}
        icon={weathers[i].weather[0].icon}
        temp={weathers[i].main.temp}
        mintemp={weathers[i].main.temp_min}
        maxtemp={weathers[i].main.temp_max}
      />
    );
  });
};

export default ListWeather;
