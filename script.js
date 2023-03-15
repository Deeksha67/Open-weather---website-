link = "https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=bf8d15a80c89aa4f4c82ad6cbb3f5ac5";
  var request = new XMLHttpRequest();
  request.open('GET', link, true);
  request.onload = function () {
    var obj = JSON.parse(this.response);
    console.log(obj);

    document.getElementById('weather').innerHTML = obj.weather[0].description;
    document.getElementById('location').innerHTML = obj.name;
document.getElementById('temp').innerHTML = (obj.main.temp - 273.15).toFixed(1);

    document.getElementById('icon').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";

    if (request.status >= 200 && request.status < 400) {
      var temp = obj.main.temp;
    }
    else {
      console.log("The city doesn't exist! Kindly check");
    }
  }
  request.send();