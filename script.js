function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");

  if (city === "") {
    result.innerHTML = "Please enter a city name";
    return;
  }

  result.innerHTML = `Showing weather for <b>${city}</b><br>Temperature: 25°C<br>Condition: Clear Sky`;
}
