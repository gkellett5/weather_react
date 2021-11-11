import WeatherSearch from "./WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="border">
        <div className="container">
          <WeatherSearch />
        </div>{" "}
      </div>{" "}
      <div id="source-code"> <a href="https://github.com/gkellett5/weather_react">
        Open-Source Code </a> by Gemma Kellett
      </div>
    </div>
  );
}

export default App;
