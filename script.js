function fetch_Data()
{
    var cityname=pname.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=8172d5af1eed1d9409ffcace3f092302&units=metric`).
    then(res=>
        {
            if(res.ok)
            {
                return res.json()
            }
            else
            {
                throw new Error("Failed to get data")
            }
        }).then(data=>displayValue(data)).catch(err=>console.log(err.message))
}
function displayValue(data)
{
let temp=data.main.temp;
let locationName= data.name
let minTemp= data.main.temp_min;
let maxTemp= data.main.temp_max
let weatherType= data.weather[0].main;
let windspeed= data.wind.speed;
html_data=`<div class="card" style="width: 19rem;">
<img src="./img1.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${locationName}</h5>
  <h5 class="card-title">${temp}</h5
  
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Minimum Temperature - ${minTemp}</li>
  <li class="list-group-item">Maximun Temperature - ${maxTemp}</li>
  <li class="list-group-item">Weather Type - ${weatherType}</li>
  <li class="list-group-item">Windspeed - ${windspeed}</li>

</ul>

</div>`
document.querySelector("#result").innerHTML=html_data
}