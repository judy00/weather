let currentWeatherAPIData = {}
let forecastWeatherAPIData = {}
let chartObjectData = {}

function getWeatherData (inputCityName) {
  function getCurrentWeatherAPIData () {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + inputCityName + '&APPID=9c8dadba0d86fe1e366e1e7781cdfc59'
    return axios.get(url) // eslint-disable-line
  }

  function getforecastWeatherAPIData () {
    const url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + inputCityName + '&APPID=9c8dadba0d86fe1e366e1e7781cdfc59'
    return axios.get(url) // eslint-disable-line
  }

  axios.all([getCurrentWeatherAPIData(), getforecastWeatherAPIData()]) // eslint-disable-line
    .then(axios.spread(function (acct, perms) { // eslint-disable-line
      currentWeatherAPIData = acct.data
      forecastWeatherAPIData = perms.data
      generateCurrentData()
      buildMainChart()
    }))
    .catch(function (error) {
      console.log(error)
    })
}

const forecastTags = [
  {
    text: 'Main', url: '#'
  },
  {
    text: 'Hourly', url: '#'
  }
]

const currentWeatherDOM = document.querySelector('.current-weather-container')
const foreWeatherDOM = document.querySelector('.forecast-weather-container')
const inputCityNameDOM = document.querySelector('.input-city-name')
const searchCityBtnDOM = document.querySelector('.search-city-button')
const curWeatherTitle = document.createElement('h2')
const curWeatherImg = document.createElement('img')
const curWeatherTemp = document.createElement('h2')
const curWeatherDescrip = document.createElement('p')
const curWeatherTime = document.createElement('p')
const curWeatherTable = document.createElement('table')
const curTime = Date()
const foreWeatherTitle = document.createElement('h2')
const foreTagList = document.createElement('ul')
const foreWeatherSubtitle = document.createElement('h2')
const foreWeatherMainDOM = document.createElement('section')
const foreWeatherHourlyDOM = document.createElement('section')
const foreWeatherTable = document.createElement('table')
const foreWeatherMainChartContainer = document.createElement('section')
const foreWeatherMainInfoContainer = document.createElement('section')

function generateCurrentData () {
  removeElement()

  const curDataMap = [
    ['Wind', currentWeatherAPIData.wind.speed + 'm/s,' + currentWeatherAPIData.wind.deg],
    ['Cloudiness', 'Broken clouds'],
    ['Pressure', currentWeatherAPIData.main.pressure + ' hpa'],
    ['Humidity', currentWeatherAPIData.main.humidity + ' %'],
    ['Sunrise', new Date(parseInt(currentWeatherAPIData.sys.sunrise + '000')).toString().substr(16, 5)],
    ['Sunset', new Date(parseInt(currentWeatherAPIData.sys.sunset + '000')).toString().substr(16, 5)],
    ['Coord', '[ ' + currentWeatherAPIData.coord.lat + ', ' + currentWeatherAPIData.coord.lon + ' ]']
  ]

  curDataMap.forEach((item, index) => {
    const col = document.createElement('tr')
    const rowName = document.createElement('td')
    const rowValue = document.createElement('td')
    if (index % 2 === 0) {
      col.className = 'background-color-gray'
    }
    rowName.textContent = item[0]
    rowValue.textContent = item[1]
    col.appendChild(rowName)
    col.appendChild(rowValue)
    curWeatherTable.appendChild(col)
  })

  forecastTags.forEach(item => {
    const tagItem = document.createElement('li')
    const tagLink = document.createElement('a')
    tagItem.className = 'inline-block'
    tagLink.className = 'forecast-tag'
    tagLink.textContent = item.text
    tagLink.href = item.url
    tagItem.appendChild(tagLink)
    foreTagList.appendChild(tagItem)
    tagLink.addEventListener('click', function () { showTagContent(item.text) })
  })

  generateHourlyDateRow(forecastWeatherAPIData.list[0].dt)

  forecastWeatherAPIData.list.forEach((item, index, array) => {
    const colforecast = document.createElement('tr')
    const rowTimeAndIcon = document.createElement('td')
    const rowHourlyInfo = document.createElement('td')
    const foreHour = document.createElement('span')
    const foreImg = document.createElement('img')
    const forTempAndDescrip = document.createElement('p')
    const foreTemp = document.createElement('span')
    const foreDescrip = document.createElement('em')
    const forWindCloudHpa = document.createElement('p')

    foreHour.textContent = new Date(parseInt(item.dt + '000')).toString().substr(16, 5)
    foreImg.src = 'https://openweathermap.org/img/w/' + item.weather[0].icon + '.png'
    foreImg.alt = 'weatherIcon'
    foreTemp.textContent = parseFloat(item.main.temp - 273.15, 10).toFixed(1) + ' °C'
    foreDescrip.textContent = item.weather[0].description
    forWindCloudHpa.textContent = item.wind.speed + ', m/s   ' + 'clouds: ' + item.clouds.all + '%,  ' + item.main.pressure + ' hpa'
    rowTimeAndIcon.className = 'fore-hourly-info-td'
    rowHourlyInfo.className = 'fore-hourly-info-td'
    foreTemp.className = 'forecast-temp'

    rowTimeAndIcon.appendChild(foreHour)
    rowTimeAndIcon.appendChild(foreImg)
    forTempAndDescrip.appendChild(foreTemp)
    forTempAndDescrip.appendChild(foreDescrip)
    rowHourlyInfo.appendChild(forTempAndDescrip)
    rowHourlyInfo.appendChild(forWindCloudHpa)
    colforecast.appendChild(rowTimeAndIcon)
    colforecast.appendChild(rowHourlyInfo)
    foreWeatherTable.appendChild(colforecast)

    if (index < forecastWeatherAPIData.list.length - 1) {
      const currItemDate = new Date(parseInt(array[index].dt + '000')).toString().substr(8, 3)
      const nextItemDate = new Date(parseInt(array[index + 1].dt + '000')).toString().substr(8, 3)

      if (nextItemDate !== currItemDate) {
        const nextItemDT = array[index + 1].dt
        generateHourlyDateRow(nextItemDT)
      }
    }
  })

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
  foreTagList.className = 'fore-tag-list'
  foreWeatherTitle.textContent = 'Current weather and forecasts in your city'
  foreWeatherTitle.className = 'fore-weather-title'
  foreWeatherSubtitle.textContent = 'Weather and forecasts in' + currentWeatherAPIData.name + ',' + currentWeatherAPIData.sys.country
  foreWeatherSubtitle.className = 'fore-weather-subtitle'
  foreWeatherMainDOM.className = 'Main tag-content tag-content-show'
  foreWeatherHourlyDOM.className = 'Hourly tag-content tag-content-hidden'
  foreWeatherMainChartContainer.className = 'fore-main-chart-container'
  foreWeatherMainChartContainer.id = 'container'
  foreWeatherMainInfoContainer.className = 'fore-main-info-container'

  function generateHourlyDateRow (date) {
    const colDate = document.createElement('tr')
    const rowDate = document.createElement('td')
    const dateWord = document.createElement('strong')
    if (date === forecastWeatherAPIData.list[0].dt) {
      dateWord.textContent = new Date(parseInt(date + '000')).toString().substr(0, 15) + ' Today'
    } else {
      dateWord.textContent = new Date(parseInt(date + '000')).toString().substr(0, 15)
    }
    rowDate.className = 'fore-hourly-date-td'
    rowDate.colSpan = '2'
    rowDate.appendChild(dateWord)
    colDate.appendChild(rowDate)
    foreWeatherTable.appendChild(colDate)
  }

  function showTagContent (text) {
    const allTagSection = document.querySelectorAll('.tag-content')

    allTagSection.forEach((item, index) => {
      item.className = item.className.replace('tag-content-show', 'tag-content-hidden')
    })

    const selectedSection = document.querySelector('.' + text)
    selectedSection.className = selectedSection.className.replace('tag-content-hidden', 'tag-content-show')
  }

  chartObjectData = {
    chart: {
      renderTo: 'container',
      type: 'column'
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: []
    },
    yAxis: [{
      title: {
        text: ''
      },
      opposite: true,
      tickInterval: 2,
      tickAmount: 4,
      labels: {
        formatter: function () {
          return Math.round(this.value) + '°C'
        },
        style: {
          color: '#0000ff'
        }
      }
    }, {
      title: {
        text: ''
      },
      opposite: true,
      tickAmount: 4,
      labels: {
        formatter: function () {
          return Math.round(this.value) + 'mm'
        },
        style: {
          color: '#889bbe'
        }
      }
    }],
    tooltip: {
      shared: true,
      borderColor: '#a0a0a0'
    },
    legend: {
      layout: 'vertical',
      align: 'center',
      verticalAlign: 'top',
      x: 120,
      y: 8,
      floating: true,
      itemMarginTop: 2,
      itemMarginBottom: 2,
      backgroundColor: '#ffffff'
    },
    series: [{
      type: 'column',
      yAxis: 1,
      name: 'Precipitation',
      zIndex: 2,
      color: '#a0a0a0',
      data: []
    }, {
      type: 'spline',
      yAxis: 0,
      name: 'Temperature',
      zIndex: 10,
      color: '#0000ff',
      data: []
    }],
    exporting: {
      buttons: {
        contextButton: {
          text: 'Export',
          x: 4,
          y: 19,
          theme: {
            'stroke-width': 1,
            stroke: '#c8c8c8',
            r: 3,
            states: {
              hover: {
                fill: '#fd8b19'
              },
              select: {
                stroke: '#0000ff',
                fill: '#0fd0ae'
              }
            }
          }
        }
      }
    }
  }

  for (let i = 0; i < 10; i++) {
    chartObjectData.xAxis.categories.push(new Date(parseInt(forecastWeatherAPIData.list[i].dt + '000')).toString().substr(16, 5))
    chartObjectData.series[1].data.push(parseFloat((forecastWeatherAPIData.list[i].main.temp - 273.15).toFixed(1), 10))
    if (forecastWeatherAPIData.list[i].hasOwnProperty('rain')) {
      for (let item in forecastWeatherAPIData.list[i].rain) {
        chartObjectData.series[0].data.push(forecastWeatherAPIData.list[i].rain[item].toFixed(3) * 1000)
      }
    } else {
      chartObjectData.series[0].data.push(0)
    }
  }

  for (let i = 0; i < 10; i++) {
    const foreWeatherMainInfo = document.createElement('section')
    const foreMainImg = document.createElement('img')
    const foreMainTemp = document.createElement('p')
    const foreMainWind = document.createElement('p')
    const foreMainHpa = document.createElement('p')
    foreMainImg.src = 'https://openweathermap.org/img/w/' + forecastWeatherAPIData.list[i].weather[0].icon + '.png'
    foreMainTemp.textContent = parseFloat((forecastWeatherAPIData.list[i].main.temp - 273.15).toFixed(1), 10) + ' °C'
    foreMainWind.textContent = forecastWeatherAPIData.list[i].wind.speed + ' m/s'
    foreMainHpa.textContent = forecastWeatherAPIData.list[i].main.pressure
    foreMainTemp.className = 'fore-main-temp'
    foreMainHpa.className = 'color-light-gray'
    foreWeatherMainInfo.className = 'fore-main-icon-section inline-block'
    foreWeatherMainInfo.appendChild(foreMainImg)
    foreWeatherMainInfo.appendChild(foreMainTemp)
    foreWeatherMainInfo.appendChild(foreMainWind)
    foreWeatherMainInfo.appendChild(foreMainHpa)
    foreWeatherMainInfoContainer.appendChild(foreWeatherMainInfo)
  }
  currentWeatherDOM.appendChild(curWeatherTitle)
  currentWeatherDOM.appendChild(curWeatherImg)
  currentWeatherDOM.appendChild(curWeatherTemp)
  currentWeatherDOM.appendChild(curWeatherDescrip)
  currentWeatherDOM.appendChild(curWeatherTime)
  currentWeatherDOM.appendChild(curWeatherTable)
  foreWeatherHourlyDOM.appendChild(foreWeatherTable)
  foreWeatherMainDOM.appendChild(foreWeatherMainChartContainer)
  foreWeatherMainDOM.appendChild(foreWeatherMainInfoContainer)
}

foreWeatherDOM.appendChild(foreWeatherTitle)
foreWeatherDOM.appendChild(foreTagList)
foreWeatherDOM.appendChild(foreWeatherSubtitle)
foreWeatherDOM.appendChild(foreWeatherHourlyDOM)
foreWeatherDOM.appendChild(foreWeatherMainDOM)

function buildMainChart () {
  Highcharts.chart('container', chartObjectData) // eslint-disable-line
}

function getCityName () {
  let inputCityName = inputCityNameDOM.value
  if (inputCityName === inputCityName.toLocaleLowerCase()) {
    inputCityName = inputCityName.substr(0, 1).toLocaleUpperCase() + inputCityName.substr(1)
  }
  getWeatherData(inputCityName)
}

function showTempSwitchBtn () {
  const switchBtn = document.querySelector('.switch-temp-btn')
  if (switchBtn.style.display === 'none') {
    switchBtn.style.display = 'block'
  }
}

function tempSwitch () {
  const foreTempList = document.querySelectorAll('.forecast-temp')
  const foreMainTempList = document.querySelectorAll('.fore-main-temp')

  if (curWeatherTemp.textContent.indexOf('°C') > 0) {
    curWeatherTemp.textContent = parseInt(currentWeatherAPIData.main.temp * 9 / 5 - 459.67, 10) + '°F'
    foreTempList.forEach((item, index) => {
      item.textContent = parseFloat(forecastWeatherAPIData.list[index].main.temp * 9 / 5 - 459.67, 10).toFixed(1) + ' °F'
    })
    chartObjectData.series[1].data = []
    chartObjectData.yAxis[0].labels.formatter = ''
    chartObjectData.yAxis[0].labels.formatter = function () {
      return Math.round(this.value) + '°F'
    }
    for (let i = 0; i < 10; i++) {
      chartObjectData.series[1].data.push(parseFloat((forecastWeatherAPIData.list[i].main.temp * 9 / 5 - 459.67).toFixed(1), 10))
      foreMainTempList[i].textContent = parseFloat((forecastWeatherAPIData.list[i].main.temp * 9 / 5 - 459.67).toFixed(1), 10) + ' °F'
    }
  } else {
    curWeatherTemp.textContent = parseInt(currentWeatherAPIData.main.temp - 273.15, 10) + '°C'
    foreTempList.forEach((item, index) => {
      item.textContent = parseFloat(forecastWeatherAPIData.list[index].main.temp - 273.15, 10).toFixed(1) + ' °C'
    })
    chartObjectData.series[1].data = []
    chartObjectData.yAxis[0].labels.formatter = ''
    chartObjectData.yAxis[0].labels.formatter = function () {
      return Math.round(this.value) + '°C'
    }
    for (let i = 0; i < 10; i++) {
      chartObjectData.series[1].data.push(parseFloat((forecastWeatherAPIData.list[i].main.temp - 273.15).toFixed(1), 10))
      foreMainTempList[i].textContent = parseFloat((forecastWeatherAPIData.list[i].main.temp - 273.15).toFixed(1), 10) + ' °C'
    }
  }
}

function removeElement () {
  while (currentWeatherDOM.firstChild) {
    currentWeatherDOM.removeChild(currentWeatherDOM.firstChild)
  }
  while (curWeatherTable.firstChild) {
    curWeatherTable.removeChild(curWeatherTable.firstChild)
  }
  while (foreWeatherHourlyDOM.firstChild) {
    foreWeatherHourlyDOM.removeChild(foreWeatherHourlyDOM.firstChild)
  }
  while (foreWeatherTable.firstChild) {
    foreWeatherTable.removeChild(foreWeatherTable.firstChild)
  }
  while (foreWeatherMainDOM.firstChild) {
    foreWeatherMainDOM.removeChild(foreWeatherMainDOM.firstChild)
  }
  while (foreWeatherMainInfoContainer.firstChild) {
    foreWeatherMainInfoContainer.removeChild(foreWeatherMainInfoContainer.firstChild)
  }
  while (foreTagList.firstChild) {
    foreTagList.removeChild(foreTagList.firstChild)
  }
}

function onload () {
  searchCityBtnDOM.addEventListener('click', getCityName)
  searchCityBtnDOM.addEventListener('click', showTempSwitchBtn)
  const tempCheckBox = document.querySelector('.temp-check-box')
  tempCheckBox.addEventListener('click', tempSwitch)
}

window.addEventListener('load', onload)
