const weather_data = [
  {
    id: 0,
    country: "Cloudy",
    weatherInCelcium: "20°",
    weatherStatus: "Cloudy",
    data: "Mon 21 Jan 2021",
    background: "Clouds.png"
  },
  {
    id: 1,
    country: "Raining",
    weatherInCelcium: "18°",
    data: "Mon 21 Jan 2021",
    background: "Group8.png"
  },
  {
    id: 2,
    country: "Sunny",
    weatherInCelcium: "23°",
    data: "Mon 21 Jan 2021",
    background: "Sun.png"
  },
  {
    id: 3,
    country: "Thunderstorm",
    weatherInCelcium: "25°",
    data: "Mon 21 Jan 2021",
    background: "Group 22.png",
    backgroundcolor: " rgba(12, 11, 1, 0.57)"
  },
  {
    id: 4,
    country: "Clear",
    weatherInCelcium: "40°",
    data: "Mon 21 Jan 2021",
    background: "Moon.png",
    backgroundcolor: " rgba(12, 11, 1, 0.57)"
  },
]
async function getData() {

   
      const html = weather_data.map((item) => {
          return `
          <div class="box">
            <div class="card1" style="background-color: ${item.backgroundcolor};">
                <p class="number">${item.weatherInCelcium}</p>
                <p class="Cloudy">${item.country}</p>
                <button class="web">West jakarta</button>
                <div class="bulut" style="background-image: url('${item.background}')"></div>
                <div class="border"></div>
                <p class="kunlar">${item.data}</p>
            </div>
        </div>
          `
      })
      document.querySelector('.container').innerHTML = html
  }


getData()