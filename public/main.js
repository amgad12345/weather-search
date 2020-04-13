const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

let cityTyped = document.getElementById('type').value

const getweahtercity = async () => {
  console.log('going out to api')
  document.querySelector('.weather').textContent = ''

  const cityTyped = document.getElementById('type').value
  console.log('this is cityTyped ' + cityTyped)
  const response = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      cityTyped +
      '&appid=13b9ac9059c3eb9dd65f0abf25700a1c'
  )

  console.log('back from api')
  console.log(response)
  cityWEATHER = await response.json()
  console.log(cityWEATHER.main)
  const tempreture = cityWEATHER.main.temp
  const celsius = tempreture - 273
  const fahrenheit = Math.floor(celsius * (9 / 5) + 32)
  console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)
  document.querySelector('.weathercity').textContent = `The temperature in ${cityTyped} is ${fahrenheit} degrees fahrenheit.`
}

document.querySelector('.search').addEventListener('click', getweahtercity)

document.addEventListener('DOMContentLoaded', main)
