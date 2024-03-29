let api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric";
let api_key = 'b3c9b03641ada2fdfe017481fa8f911a';
let temp = document.querySelector('.temp');
let cityy = document.querySelector('.cityy');
let hum = document.querySelector('.humidit');
let speedy = document.querySelector('.speedy');
let srchbox = document.querySelector('.up input');
let srchbtn = document.querySelector('.up button');

async function weather(city) {
    let response = await fetch(`${api_url}&q=${city}&appid=${api_key}`);

    if(response.status == 404){
        document.querySelector('.error').style.display = 'flex';
        document.querySelector('.pagedwn').style.display = 'none';
    }else{
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.pagedwn').style.display = 'flex';

        let data = await response.json();
        console.log(data);
        temp.innerHTML = Math.round(data.main.temp)+'°C';
        cityy.innerHTML = data.name;
        hum.innerHTML = data.main.humidity + "%";
        speedy.innerHTML = data.wind.speed + " Km/hr";
        if(data.weather[0].main == 'Rain'){
            document.getElementById('img').src = './assets/rainy-day.png';
        }else if(data.weather[0].main == 'Mist'){
            document.getElementById('img').src = './assets/foggy.png';
        }else if(data.weather[0].main == 'Clear'){
            document.getElementById('img').src = './assets/sun.png';
    
        }else if(data.weather[0].main == 'Haze'){
            document.getElementById('img').src = './assets/foggy.png';
        }else{
            document.getElementById('img').src = './assets/cloudy.png';
        
        }
    }
    
} 

srchbox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        weather(srchbox.value);
    }
});

srchbtn.addEventListener('click', () => {
    weather(srchbox.value);
});

