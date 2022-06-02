let i;
function getData(){
    
    let city = document.getElementById("city").value
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=2e1683d02ba292c42a0df7a8cc64295b`


var cityName=document.getElementById("cityName").innerText


cityName.innerText=`---${city}---`

fetch(url)
.then(res => res.json())

.then(data => 
{
    console.log(data)

    
    for( i=0; i<7; i++)
    {
        document.getElementById("day"+(i+1)+"Min").innerHTML=`${+(data.list[i].main.temp_min-273.15).toFixed(1)} °`
    }
    for( i=0; i<7; i++)
    {
        document.getElementById("day"+(i+1)+"Max").innerHTML=`${+(data.list[i].main.temp_max-273.15).toFixed(1)} °`
    }
    
    for( i=0; i<7; i++)
    {
        document.getElementById('img'+(i+1)).src =" http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon +"@2x.png"
    }
    
    
        
})
.catch(function(err)
    {
        console.log('Error')
    })

}


var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

for(i = 0; i<7; i++){
    document.getElementById("day" +(i+1)).innerHTML = weekday[CheckDay(i)];
}

