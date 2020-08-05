import React from "react";
import "./weathercard.css";

const WeatherCard = ({ name, description, icon, temp, mintemp, maxtemp }) => {
  return (
    <div class="mdl-card--horizontal-2">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">{name}</h2>
        <div class="mdl-card__subtitle-text">{description}</div>
        <div class="mdl-card__subtitle-text">
          {temp} - {mintemp} : {maxtemp}
        </div>
      </div>
      <div class="mdl-card__media">
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="img"
        />
      </div>
    </div>
  );
};

export default WeatherCard;
