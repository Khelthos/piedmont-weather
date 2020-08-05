import React from "react";
import WeatherCard from "./WeatherCard";

const ListWeather = ({ weathers }) => {
  console.log("ListWeather", weathers);
  return (
    <div>
      {weathers.map((weather, i) => {
        return (
          <WeatherCard
            key={i}
            id={weathers[i].id}
            name={weathers[i].name}
            description={weathers[i].description}
            icon={weathers[i].icon}
            temp={weathers[i].temp}
            mintemp={weathers[i].mintemp}
            maxtemp={weathers[i].maxtemp}
          />
        );
      })}
    </div>
  );
};

export default ListWeather;
