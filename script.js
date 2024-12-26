async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = "4eba71194af0a200e5fc3b062483fa7c"; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (!city) {
      alert("Please enter a city name.");
      return;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data); // Debugging line to check response

      if (data.cod === 200) {
        document.getElementById('city-name').innerText = `Weather in ${data.name}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').innerText = `Condition: ${data.weather[0].description}`;
      } else {
        document.getElementById('city-name').innerText = "City not found.";
        document.getElementById('temperature').innerText = "";
        document.getElementById('description').innerText = "";
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      document.getElementById('city-name').innerText = "An error occurred.";
      document.getElementById('temperature').innerText = "";
      document.getElementById('description').innerText = "";
    }
  }
