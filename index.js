// Import stylesheets
import './style.css';
var main =document.querySelector("main");

window.getWeather=function(){

const cityName=document.getElementById('cityName');
const nod=document.getElementById('inputGroupSelect01');
if(cityName.value=='')alert("Enter the City Name");
else{

getWeatherDetails(cityName.value,nod.value);


}
console.log(cityName.value);
console.log(nod.value);
// getWeatherDetails();
}



const getWeatherDetails = (cityName,nod)=> {
   //main= document.querySelector("main");
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = response => {
   
    var data = response.target;
    if (data.readyState == 4 && data.status == 200) {
      const weatherDetails = JSON.parse(data.responseText);
      console.log(weatherDetails);   
       
//       usersList.forEach(item => {
//    hairStyleGenerator(item);
// });






main.innerHTML= "";
main= document.querySelector("main");


      const div = document.createElement("div");
      const h4 = document.createElement("h4");
      div.append(h4);
      main.append(div);
      const city=weatherDetails.location.name;
      const region=weatherDetails.location.region;
      const country=weatherDetails.location.country;
      h4.innerHTML=city+", "+region+", "+country;
      
      const div1 = document.createElement("div");
      div1.setAttribute('class','d-inline p-2 bg-none text-dark curr');
      const img = document.createElement("img");
      img.setAttribute('src',weatherDetails.current.condition.icon);
      div1.append(img);
      const p = document.createElement("p");
      p.setAttribute('class','condition')
      p.innerHTML=weatherDetails.current.condition.text;
      div1.append(p);
      //div1.append(img);
      //main.append(div1);
const div2 = document.createElement("div");
      div2.setAttribute('class','currDetail');
     const p1 = document.createElement("p");
      p1.innerHTML="Precipitation : "+weatherDetails.current.precip_mm+" mm";
      const p2 = document.createElement("p");
      p2.innerHTML="Wind : "+weatherDetails.current.wind_kph+" kmph";
      const p3 = document.createElement("p");
      p3.innerHTML="Humidity : "+weatherDetails.current.humidity+" %";

      div2.append(p1);div2.append(p2);div2.append(p3);
      //main.append(div2);
const div3 = document.createElement("div");
 div3.setAttribute('class','d-inline p-2 bg-none  currTemp');
 div3.innerHTML=weatherDetails.current.temp_c+ ' &deg;C';

      const div4=document.createElement("div");
      div4.setAttribute('class','d-flex justify-content-between');
div4.append(div1);
div4.append(div3);
div4.append(div2);
main.append(div4);
var date = new Date(weatherDetails.forecast.forecastday[0].date);
//console.log(getWeekDay(date));



    }
  };

   const url="https://api.weatherapi.com/v1/forecast.json?key=d536bb89e8a24d87873140853200610&q="+cityName+"&days="+parseInt(nod);

  xhttp.open("GET",url);
  xhttp.send();

}



// getWeatherDetails();



function getWeekDay(date){
    
    var weekdays = new Array(
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    );
    
    var day = date.getDay();
   
    return weekdays[day];
}