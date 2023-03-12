function getPrecipitation(lat,long) {
  var data = {};
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    data = JSON.parse(this.responseText);
  }
  xhttp.open("GET", `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&hourly=temperature_2m,precipitation`, false);
  xhttp.send()
  return data;
}
var obj = getPrecipitation("51.509865","-0.118092");
var actualPrecipitation = obj.hourly.precipitation[obj.hourly.time.indexOf(obj.current_weather.time)];
console.log(actualPrecipitation)
