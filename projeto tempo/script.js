document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault();

    let input = document.querySelector('#searchinput').value;
    if(input !=='') 

        clearInfo();
        showWarning("Carregando...")


    let url=""

        let results = await fetch(url);
        let json =  awalt results.json();
     
        if(json.cod---200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windspeed: json.wind.speed,

                descri: json.weather[0].description,
            }
            );
        }
        else{
         clearInfo();
         showWarning("Não encontramos essa localização");

    }else{ 
    clearInfo();

    }
})
    function showInfo(json){
    showwarning('');
    document.querySelector('.resultado').style.display= 'block";
    document.querySelector('.titulo').innerHTML=  ${json.name), ${json.country)
    document.querySelector('.temperatura'). InnerHTML $(json.temp) <sup>C</sup>";
    document.querySelector('.ventoInfo').innerHTML $(json.windSpeed) <span>km/h</span>"; document.querySelector(".tempInfo").innerHTML- $(json.descri);
    document.querySelector('.informacoes img').setAttribute(src','./img/ ${json.tempIcon}.gif);
    }
    
    function showWarning(msg) {
        document.querySelector('.aviso').innerHTML = msg;
    }
    
    function clearInfo() {
        showWarning('');
        document.querySelector('.resultado').style.display = 'none';
    }
    
    async function Curitiba() {
        let input = 'Curitiba';
        if (input != '') {
            showWarning('carregando...');
    
            let url = https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=ef60a79c9c359f2edf9dbadb3&units=metric&lang=pt_br;
    
            let results = await fetch(url);
            let json = await results.json();
    
            if (json.cod == 200) {
                showWarning('');
                let name = json.name;
                let country = json.sys.country;
                let temp = json.main.temp;
                let tempIcon = json.weather[0].icon;
                let windSpeed = json.wind.speed;
                let windAngle = json.wind.deg;
                let desc = json.weather[0].description;
    
            } else {
                clearInfo();
                showWarning('Não encontramos essa localização');
            }
        } else {
            clearInfo();
        }
    }
    
    Curitiba();