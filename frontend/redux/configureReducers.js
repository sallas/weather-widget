import { combineReducers } from "redux";

const initialState = {
  city: 'Copenhagen',
  temperature: '5',
  humidity: '65',
  wind: '11',
  newCity: '',
};

export const theReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SOMETHING_HAPPENING":
      return { ...state, city: "Odense" };
    case "FETCHING_SUCCESS":
      return {
        ...state,
        city: action.payload.data.name,
        humidity: action.payload.data.main.humidity,
        temperature: action.payload.data.main.temp,
        wind: action.payload.data.wind.speed,
        newCity: '',
      }
    case "CITY_INPUT_CHANGED":
      return {...state, newCity: action.payload.city}
    default:
      return state;
  }
};

const configureReducers = () =>
  combineReducers({
    theReducer
  });

export default configureReducers;
