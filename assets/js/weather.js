const WeatherModule = (() => {
  let weatherData = null;

  // Fetch weather data from API
  async function fetchWeather() {
    try {
      const url = `${CONFIG.weather.apiUrl}?lat=${CONFIG.weather.lat}&lon=${CONFIG.weather.lon}`;
      console.log("Fetching weather from:", url);
      console.log("Location:", CONFIG.weather.city, `(${CONFIG.weather.lat}, ${CONFIG.weather.lon})`);
      console.log("Using API Key:", CONFIG.weather.apiKey ? "✓ Set" : "✗ Missing");
      
      const response = await fetch(url, {
        headers: { "X-Api-Key": CONFIG.weather.apiKey },
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API Error Response:", errorText);
        throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
      }

      weatherData = await response.json();
      console.log("Weather data received:", weatherData);
      displayWeather();
      return weatherData;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      console.error("Error details:", {
        message: error.message,
        stack: error.stack
      });
      displayWeatherError(error);
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

  function displayWeatherError(error) {
    const tempElement = document.getElementById("temperature");
    const errorMsg = error ? error.message : "Unknown error";
    tempElement.innerHTML = `
            <span class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                Unable to load weather data
            </span>
        `;
    console.log("Check console for detailed error information");
  }

  function getWeatherData() {
    return weatherData;
  }

  return {
    fetch: fetchWeather,
    getData: getWeatherData,
  };
})();
