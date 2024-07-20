import { useEffect, useState } from "react";
import { LuSunMedium } from "react-icons/lu";
import { GiDrop } from "react-icons/gi";

const WEATHER_API =
  "https://api.open-meteo.com/v1/forecast?latitude=49.8383&longitude=24.0232&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [forecastDaysCount, setForecastDaysCount] = useState("3");

  useEffect(() => {
    // console.log("effect");
    fetch(
      `${WEATHER_API}${forecastDaysCount === "3" ? "&forecast_days=3" : ""}`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((e) => console.log("error :>> ", e));
  }, [forecastDaysCount]);

  return (
    <>
      <button onClick={() => setForecastDaysCount("3")}>3</button>
      <button onClick={() => setForecastDaysCount("7")}>7</button>
      <table>
        <caption>Прогноз погоди на {forecastDaysCount} днів</caption>
        <thead>
          <tr>
            {weather?.daily?.time.map((t) => (
              <th key={t}>{t}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {weather?.daily?.temperature_2m_max.map((tempmax, index) => (
              <td key={index}>{tempmax}</td>
            ))}
          </tr>
          <tr>
            {weather?.daily?.temperature_2m_min.map((tempmin, index) => (
              <td key={index}>{tempmin}</td>
            ))}
          </tr>
          <tr>
            {weather?.daily?.precipitation_sum.map((p, index) => (
              <td key={index}>
                {p > 0 ? (
                  <GiDrop color="lightblue" />
                ) : (
                  <LuSunMedium color="yellow" />
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Weather;
