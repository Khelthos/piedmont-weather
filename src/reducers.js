import {
  REQUEST_METEO_PENDING,
  REQUEST_METEO_SUCCESS,
  REQUEST_METEO_FAILED,
} from "./constants";

const initialStateWeather = {
  isPending: false,
  weathers: {},
  error: "",
};

export const requestWeather = (state = initialStateWeather, action = {}) => {
  switch (action.type) {
    case REQUEST_METEO_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_METEO_SUCCESS:
      return Object.assign({}, state, {
        weathers: action.payload,
        isPending: false,
      });
    case REQUEST_METEO_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};
