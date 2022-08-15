const submitbtn = document.getElementById("submitbtn");
const cityname = document.getElementById("cityname");

const errorm = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");
const datahide = document.getElementsByClassName('middle_layer')
submitbtn.addEventListener("click", async (event) => {
    event.preventDefault();
    let cityval = cityname.value;
    if (cityval === "") {
        errorm.innerText = `plz write the name before search`;
         datahide.classList.add("data_hide");
      
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=f8b62c53c099a2cb0e4d454c43159399`;
            const response = await fetch(url);
            const data= await response.json();
            const arrData=[data];
            console.log(arrData)
            temp.innerText=arrData[0].main.temp;
            temp_mood=arrData[0].weather[0].main;
            errorm.innerText=`${arrData[0].name} , ${arrData[0].sys.country}`;
            //condition to check sunny or cloudy
            if(temp_mood==="Clear"){
temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }else if(temp_mood==="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }else if(temp_mood==="Rain"){
                temp_status.innerHTML="<i class='fa-solid fa-cloud-showers-heavy' style='color:#a4b0be;'></i>";
            }else{
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }
           
            
        } catch {
            errorm.innerText = `plz enter city name properly`;
        }
    }
});
datahide.classList.add("data_hide");