import {
  REQUEST_METEO_PENDING,
  REQUEST_METEO_SUCCESS,
  REQUEST_METEO_FAILED,
} from "./constants";

// const ids = {
  //   India: 2867714,
  //   Canada: 2643743,
  //   California: 4350049,
  // };
  // 3165523,3172189,3183299,6539606,3173180,3177700,3164565,3182043,6539800,6540662,3180208,6541441,686581,6457398,6538144,3180496,6536440,6536452,6538052,6539572

  // Object.values(ids).map((e) =>
  //     fetch(
  //       `https://api.openweathermap.org/data/2.5/forecast?id=${e}&appid=` // here you put your token key
  //     ).then((e) => e.json())
// Destrutturalizzare il response come segue e poi passare il payload per campo
// .then(res => res.json())
//     .then(data => console.log("Data List Loaded", data.list))
export const requestWeather = () => (dispatch) => {
  dispatch({
    type: REQUEST_METEO_PENDING,
  });
  fetch("http://api.openweathermap.org/data/2.5/group?id=3165523&units=metric&appid=efebe6c3114eb91696ed1f3d62e7566b")
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_METEO_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: REQUEST_METEO_FAILED, payload: error }));
};
