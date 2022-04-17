// let url ='https://api.openweathermap.org/data/2.5/weather?q=delhi&appid'




function getData(){
    // console.log('hi')
    let city = document.getElementById('city').value;
    const apiKey = "eeb0908632f2164e3f7c668e2661b3b0";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    fetch(url)
    .then(function(res){
        // console.log(res)
        return res.json();
        
    })
    .then(function(res){

        // console.log(res);
        append(res);
    })
    .catch(function(err){
        console.log(err)

    });

}

function append(data){

    let container=document.getElementById('container');
    
    let map=document.getElementById('gmap_canvas')
    
    container.innerHTML=null;

    let city=document.createElement('p');

    city.innerText=`city: ${data.name}` ;

    let min= document.createElement('p');
    min.innerText=`min temp: ${data.main.temp_min}`;

    let max= document.createElement('p');
    max.innerText=`max temp: ${data.main.temp_max}`;

    let current=document.createElement('p');
    current.innerText=`current temp: ${data.main.temp}`;

    let humidity=document.createElement('p');
    humidity=innerText=`humidity: ${data.main.humidity}`;

    container.append(city,min,max,current,humidity);

    map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`


}

// function getWeather(){
//     navigator.geolocation.getCurrentPosition(success);

//     function success(position){
//     var crd = pos.coords;

//     console.log('Your current position is:');
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude: ${crd.longitude}`);
//     console.log(`More or less ${crd.accuracy} meters.`);


// }

// }


