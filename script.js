const currentWeatherAPIData = {
  'coord': {
    'lon': 121.53,
    'lat': 25.05
  },
  'weather': [
    {
      'id': 300,
      'main': 'Drizzle',
      'description': 'light intensity drizzle',
      'icon': '09d'
    }
  ],
  'base': 'stations',
  'main': {
    'temp': 292.22,
    'pressure': 1019,
    'humidity': 88,
    'temp_min': 291.15,
    'temp_max': 293.15
  },
  'visibility': 10000,
  'wind': {
    'speed': 8.7,
    'deg': 90
  },
  'clouds': {
    'all': 75
  },
  'dt': 1513141200,
  'sys': {
    'type': 1,
    'id': 7479,
    'message': 0.0097,
    'country': 'TW',
    'sunrise': 1513117803,
    'sunset': 1513155967
  },
  'id': 1668341,
  'name': 'Taipei',
  'cod': 200
}

const currentWeatherDOM = document.querySelector('.current-weather-container')
const foreWeatherDOM = document.querySelector('.forecast-weather-container')
const curWeatherTitle = document.createElement('h2')
const curWeatherImg = document.createElement('img')
const curWeatherTemp = document.createElement('h2')
const curWeatherDescrip = document.createElement('p')
const curWeatherTime = document.createElement('p')
const curWeatherTable = document.createElement('table')
const curTime = Date()
const trItemWind = document.createElement('tr')
const tdWindName = document.createElement('td')
const tdWindValue = document.createElement('td')

const trItemCloud = document.createElement('tr')
const tdCloudName = document.createElement('td')
const tdCloudValue = document.createElement('td')

const trItemPressure = document.createElement('tr')
const tdPressureName = document.createElement('td')
const tdPressureValue = document.createElement('td')

const trItemHumidity = document.createElement('tr')
const tdHumidityName = document.createElement('td')
const tdHumidityValue = document.createElement('td')

const trItemSunrise = document.createElement('tr')
const tdSunriseName = document.createElement('td')
const tdSunriseValue = document.createElement('td')

const trItemSunset = document.createElement('tr')
const tdSunsetName = document.createElement('td')
const tdSunsetValue = document.createElement('td')

const trItemCoord = document.createElement('tr')
const tdCoordName = document.createElement('td')
const tdCoordValue = document.createElement('td')

const foreWeatherTitle = document.createElement('h2')
const forecastTagMain = document.createElement('p')
const forecastTagDaily = document.createElement('p')
const foreWeatherSubtitle = document.createElement('h2')

curWeatherTitle.className = 'current-weather-title'
curWeatherTitle.textContent = 'Weather in ' + currentWeatherAPIData.name + ',' + currentWeatherAPIData.sys.country
curWeatherImg.src = 'https://openweathermap.org/img/w/' + currentWeatherAPIData.weather[0].icon + '.png'
curWeatherImg.alt = 'weatherIcon'
curWeatherTemp.className = 'current-weather-title inline-block'
curWeatherTemp.textContent = parseInt(currentWeatherAPIData.main.temp - 273.15, 10) + '°C'
curWeatherDescrip.className = 'current-Descrip-Text'
curWeatherDescrip.textContent = currentWeatherAPIData.weather[0].description
curWeatherTime.className = 'current-Descrip-Text'
curWeatherTime.textContent = curTime.substr(16, 5) + curTime.substr(3, 7)
curWeatherTable.className = 'current-weather-table'
trItemWind.className = 'background-color-gray'
trItemPressure.className = 'background-color-gray'
trItemSunrise.className = 'background-color-gray'
trItemCoord.className = 'background-color-gray'
tdWindName.textContent = 'Wind'
tdWindValue.textContent = currentWeatherAPIData.wind.speed + 'm/s,' + currentWeatherAPIData.wind.deg
tdCloudName.textContent = 'Cloudiness'
tdCloudValue.textContent = 'Broken clouds'
tdPressureName.textContent = 'Pressure'
tdPressureValue.textContent = currentWeatherAPIData.main.pressure + ' hpa'
tdHumidityName.textContent = 'Humidity'
tdHumidityValue.textContent = currentWeatherAPIData.main.humidity + ' %'
tdSunriseName.textContent = 'Sunrise'
tdSunriseValue.textContent = new Date(parseInt(currentWeatherAPIData.sys.sunrise + '000')).toString().substr(16, 5)
tdSunsetName.textContent = 'Sunset'
tdSunsetValue.textContent = new Date(parseInt(currentWeatherAPIData.sys.sunset + '000')).toString().substr(16, 5)
tdCoordName.textContent = 'Coord'
tdCoordValue.textContent = '[ ' + currentWeatherAPIData.coord.lat + ', ' + currentWeatherAPIData.coord.lon + ' ]'

foreWeatherTitle.textContent = 'Current weather and forecasts in your city'
foreWeatherTitle.className = 'fore-weather-title'
forecastTagMain.textContent = 'Main'
forecastTagMain.className = 'forecast-tag inline-block'
forecastTagDaily.textContent = 'Daily'
forecastTagDaily.className = 'forecast-tag inline-block'
foreWeatherSubtitle.textContent = 'Weather and forecasts in' + currentWeatherAPIData.name + ',' + currentWeatherAPIData.sys.country
foreWeatherSubtitle.className = 'fore-weather-subtitle'

currentWeatherDOM.appendChild(curWeatherTitle)
currentWeatherDOM.appendChild(curWeatherImg)
currentWeatherDOM.appendChild(curWeatherTemp)
currentWeatherDOM.appendChild(curWeatherDescrip)
currentWeatherDOM.appendChild(curWeatherTime)
currentWeatherDOM.appendChild(curWeatherTable)
trItemWind.appendChild(tdWindName)
trItemWind.appendChild(tdWindValue)
curWeatherTable.appendChild(trItemWind)

trItemCloud.appendChild(tdCloudName)
trItemCloud.appendChild(tdCloudValue)
curWeatherTable.appendChild(trItemCloud)

trItemPressure.appendChild(tdPressureName)
trItemPressure.appendChild(tdPressureValue)
curWeatherTable.appendChild(trItemPressure)

trItemHumidity.appendChild(tdHumidityName)
trItemHumidity.appendChild(tdHumidityValue)
curWeatherTable.appendChild(trItemHumidity)

trItemSunrise.appendChild(tdSunriseName)
trItemSunrise.appendChild(tdSunriseValue)
curWeatherTable.appendChild(trItemSunrise)

trItemSunset.appendChild(tdSunsetName)
trItemSunset.appendChild(tdSunsetValue)
curWeatherTable.appendChild(trItemSunset)

trItemCoord.appendChild(tdCoordName)
trItemCoord.appendChild(tdCoordValue)
curWeatherTable.appendChild(trItemCoord)

currentWeatherDOM.appendChild(curWeatherTable)
foreWeatherDOM.appendChild(foreWeatherTitle)
foreWeatherDOM.appendChild(forecastTagMain)
foreWeatherDOM.appendChild(forecastTagDaily)
foreWeatherDOM.appendChild(foreWeatherSubtitle)

// const result = axios.get('http://api.openweathermap.org/data/2.5/weather?q=Taipei&APPID=9c8dadba0d86fe1e366e1e7781cdfc59')
//   .then(function (rep) {
//     currentWeatherAPIData = rep.data;
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
