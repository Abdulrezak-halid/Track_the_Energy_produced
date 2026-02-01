const WeatherModule = (() => {
  let weatherData = null;

  // Fetch weather data from API
  async function fetchWeather() {
    try {
      const response = await fetch(
        `${CONFIG.weather.apiUrl}?city=${CONFIG.weather.city}`,
        {
          headers: { "X-Api-Key": CONFIG.weather.apiKey },
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      weatherData = await response.json();
      displayWeather();
      return weatherData;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      displayWeatherError();
      return null;
    }
  }

  function displayWeather() {
    const tempElement = document.getElementById("temperature");
    const detailsElement = document.getElementById("weatherDetails");

    if (weatherData) {
      tempElement.innerHTML = `
                <span class="temp-number">${weatherData.temp}</span>
                <span class="temp-unit">°C</span>
            `;

      detailsElement.innerHTML = `
                <div class="weather-detail-item">
                    <i class="fas fa-tint"></i>
                    <span>Humidity: ${weatherData.humidity || "N/A"}%</span>
                </div>
                <div class="weather-detail-item">
                    <i class="fas fa-wind"></i>
                    <span>Wind: ${weatherData.wind_speed || "N/A"} m/s</span>
                </div>
                <div class="weather-detail-item">
                    <i class="fas fa-cloud"></i>
                    <span>Cloud: ${weatherData.cloud_pct || "N/A"}%</span>
                </div>
            `;
    }
  }

  function displayWeatherError() {
    const tempElement = document.getElementById("temperature");
    tempElement.innerHTML = `
            <span class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                Unable to load weather data
            </span>
        `;
  }

  function getWeatherData() {
    return weatherData;
  }

  return {
    fetch: fetchWeather,
    getData: getWeatherData,
  };
})();
