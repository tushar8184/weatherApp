const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

searchBtn.addEventListener("click", () => {
  const city = searchInput.value.trim();
  if (city) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=e03d6fb10f204aed97460203242506&q=${city}&aqi=no`;
    axios
      .get(apiUrl)
      .then((response) => {
        const cityName = response.data.location.name;
        const tempC = Math.round(response.data.current.temp_c);
        const hmdtPer = response.data.current.humidity;
        const windKmph = response.data.current.wind_kph;
        const conditionIcon = response.data.current.condition.icon;
        document.querySelector(".city").innerHTML = `${cityName}`;
        document.querySelector(".temprature").innerHTML = `${tempC}°c`;
        document.querySelector(".humdity").innerHTML = `${hmdtPer}%`;
        document.querySelector(".wind").innerHTML = `${windKmph} km/h`;
        document.querySelector(".weather").style.display = "flex";
        document.querySelector(".weather-icon").src = `${conditionIcon}`;
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        alert("Could not fetch weather data. Please try again.");
      });
  } else {
    alert("Please enter a city name.");
  }
});
