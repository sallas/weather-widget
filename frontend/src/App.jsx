import React from 'react';

const App = () => (
  <main className="container">
    <div className="widget" style={{ margin: 10, width: 300 }}>
      <div className="panel panel-info">
        <div className="panel-heading">Weather in <b>Copenhagen</b></div>
        <ul className="list-group">
          <li className="list-group-item">Temperature: <b>5°C</b></li>
          <li className="list-group-item">Humidity: <b>65</b></li>
          <li className="list-group-item">Wind: <b>11 m/s Øst</b></li>
          <li className="list-group-item">
            <form className="form-inline">
              <div className="form-group">
                <input type="text" className="form-control" id="city" placeholder="City" />
              </div>
              <button type="submit" className="btn btn-default">Search</button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  </main>
);

export default App;
