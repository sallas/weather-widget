import React from 'react';
import { connect } from "react-redux";
import request from 'superagent';
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

const mapStateToProps = ({
  theReducer: { city, humidity, temperature, wind, newCity }
}) => ({
  city,
  humidity,
  temperature,
  wind,
  newCity,
});

const myFetchFunction = (query = '') => {
  return request.get(`http://localhost:3001/${query}`);
};

const asyncAction = (newCity) => (dispatch, getState) => {
  const query = newCity ? `?city=${newCity}` : undefined;

  return myFetchFunction(query)
    .then(response => {
      dispatch({ type: "FETCHING_SUCCESS", payload: { data: response.body } })
      history.push(query);
    });
};

const mapDispatchToProps = dispatch => ({
  handleCityNameChanged: (e) => dispatch({ type: "CITY_INPUT_CHANGED", payload: { city: e.target.value} }),
  handleButtonClick: (newCity) => dispatch(asyncAction(newCity))
});

const App = ({ city, temperature, humidity, wind, newCity, handleButtonClick, handleCityNameChanged}) => (
  <main className="container">
    <div className="widget" style={{ margin: 10, width: 300 }}>
      <div className="panel panel-info">
        <div className="panel-heading">Weather in <b>{city}</b></div>
        <ul className="list-group">
          <li className="list-group-item">Temperature: <b>{temperature}</b></li>
          <li className="list-group-item">Humidity: <b>{humidity}</b></li>
          <li className="list-group-item">Wind: <b>{wind}</b></li>
          <li className="list-group-item">
            <div className="form-inline">
              <div className="form-group">
                <input type="text" value={newCity} onChange={handleCityNameChanged} className="form-control" id="city" placeholder="City" />
              </div>
              <button onClick={() => handleButtonClick(newCity)} className="btn btn-default">Search</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
