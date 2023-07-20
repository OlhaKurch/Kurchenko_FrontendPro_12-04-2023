
const input = document.querySelector('button');
let responseData;
let icon;
input.addEventListener('click', function() {
      let place = document.querySelector('input').value; 
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&APPID=5d066958a60d315387d9492393935c19`
      let xhr = new XMLHttpRequest();
      xhr.open('GET', API, true);
      xhr.onreadystatechange = function() {
            if(xhr.status === 200 && xhr.readyState === 4) {
                  responseData = JSON.parse(xhr.responseText)                  
                  giveInfo();
                  console.log(responseData)
                  icon = responseData.weather[0].icon
                  giveIcon()
            } else {
                  console.log(`error, status ${xhr.status}`)
            }
      }      
      xhr.send();
      
})
function giveInfo() {
      let city = document.createElement('h4')
      document.querySelector('div').appendChild(city)
      city.innerHTML = `місто ${responseData.name}` 
      let temp = document.createElement('h4')
      document.querySelector('div').appendChild(temp)
      temp.innerHTML = `температура ${responseData.main.temp}` 
      let pressure = document.createElement('h4')
      document.querySelector('div').appendChild(pressure)
      pressure.innerHTML = `тиск ${responseData.main.pressure}` 
      let description = document.createElement('h4')
      document.querySelector('div').appendChild(description)
      description.innerHTML = `опис ${responseData.weather[0].description}` 
      let humidity = document.createElement('h4')
      document.querySelector('div').appendChild(humidity)
      humidity.innerHTML = `вологість ${responseData.main.humidity}` 
      let speed = document.createElement('h4')
      document.querySelector('div').appendChild(speed)
      speed.innerHTML = `швидкість вітру ${responseData.wind.speed}` 
      let deg = document.createElement('h4')
      document.querySelector('div').appendChild(deg)
      deg.innerHTML = `напрям у градусах ${responseData.wind.deg}` 
}    

function giveIcon() {
      const iconAPI = `http://openweathermap.org/img/w/${icon}.png`                    
      let picture = document.createElement('img')
      document.querySelector('div').appendChild(picture)
      picture.setAttribute(
            'src',
            `${iconAPI}`,
            );
}