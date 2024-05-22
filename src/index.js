import "./style.css";



/* 
    getWeather fetches a response containing weather data of a given location and returns it
    as a JavaScript object.
*/
async function getWeather(location){  
    const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=19be7690d2fb42ce924102105241802&q=${location}`
    );   
    const weatherData = await response.json();
    if(!weatherData.location){
        throw new Error("No location found!")
    }
    return weatherData;
}

/**
 * populateTimeList populates the time list of the page with the temperatures 
 * for each hour throughout the day of the searched location using the data 
 * received from the weather API 
 */
async function populateTimeList(data){
    const timeList = document.querySelector(".timeList");
    const hourArray = data.forecast.forecastday[0].hour;
    let hour = 0;
    for(let i = 0; i < hourArray.length; i++){
        //Create the hour element for each hour:
        const hourElement = document.createElement("li");
        const hourTime = document.createElement("p");
        const hourData = document.createElement("p");

        //Fill each element with each hour of the day:
        if(hour < 10){
            hourTime.innerHTML = `0${hour}:00`;
        } 
        else{
            hourTime.innerHTML = `${hour}:00`;
        }

        //Add the weather data to each hour element:
        hourData.innerHTML = `${hourArray[i].temp_c}°C`

        //Append the hour time and hour data elements to the hour container element:
        hourElement.appendChild(hourTime);
        hourElement.appendChild(hourData);

        //Append the whole hour element to the time list:
        timeList.appendChild(hourElement);

        //Increment the hour
        hour++;
    }
}



/*
    getUserInput returns the user's input from the text input box.
*/
function getUserInput(){
    const textInput = document.querySelector("#input");
    const userInput = textInput.value;
    return userInput;
}



/*
    submitInput calls the Weather API with the user's input as the argument.
    getWeather is only called if a value has been entered by the user.
*/
async function submitInput(){
    if(getUserInput() != ""){
        const data = await getWeather(getUserInput()); 
        return data;
    } else{
        alert("A location must be entered first!")
        throw new Error("A location must be entered first!")
    }
}



/*
    renderPage renders the new layout of the page once a submission of 
    the form is made.
*/
function renderPage(){
    //Change existing elements:
    const contentContainer = document.querySelector("#contentContainer");
    const pageTitle = document.querySelector("#pageTitle");
    const inputForm = document.querySelector("#inputForm");
    const input = document.querySelector("#input");
    const searchButton = document.querySelector("#searchButton");

    //Change layout of the page:
    contentContainer.className = "renderedContentContainer";
    pageTitle.className = "renderedPageTitle";
    inputForm.className = "renderedInputForm";
    input.className = "renderedInput";
    searchButton.className = "renderedSearchButton";

    //Create new elements for the page:
    const locationName = document.createElement('h3');
    const countryName = document.createElement('h4');
    const dateTime = document.createElement('h4');
    const dataWrapper = document.createElement('div');
    const timeList = document.createElement('ul');
    const locationTemp = createWeatherElement("Current Temperature: ", "locationTemp");
    const feelsLikeTemp = createWeatherElement("Feels Like: ", "feelsLikeTemp");
    const rainChance = createWeatherElement("Chance Of Rain: ", "rainChance");
    const humidity = createWeatherElement("Humidity: ", "humidity");
    const uvIndex = createWeatherElement("UV Index: ", "uvIndex");

    //Add class names to the new elements:
    locationName.className = "locationName";
    countryName.className = "countryName";
    dateTime.className = "dateTime";
    dataWrapper.className = "dataWrapper";
    timeList.className = "timeList";

    //Append weather data to data wrapper:
    dataWrapper.appendChild(locationTemp);
    dataWrapper.appendChild(feelsLikeTemp);
    dataWrapper.appendChild(rainChance);
    dataWrapper.appendChild(humidity);
    dataWrapper.appendChild(uvIndex);

    //Append the new elements to the page:
    contentContainer.appendChild(locationName);
    contentContainer.appendChild(countryName);
    contentContainer.appendChild(dateTime);
    contentContainer.appendChild(dataWrapper);
    contentContainer.appendChild(timeList);
}


/**
 * fillPageData receives the data from the API, selects the weather
 * elements and puts the pieces of data into the corresponding weather 
 * elements.
 */
function fillPageData(data){
    const locationName = document.querySelector('.locationName');
    const countryName = document.querySelector('.countryName');
    const dateTime = document.querySelector('.dateTime');
    const locationTemp = document.querySelector('.locationTemp');
    const feelsLikeTemp = document.querySelector('.feelsLikeTemp');
    const rainChance = document.querySelector('.rainChance');
    const humidity = document.querySelector('.humidity');
    const uvIndex = document.querySelector('.uvIndex');

    locationName.innerHTML = data.location.name;
    countryName.innerHTML = data.location.country;
    dateTime.innerHTML = data.location.localtime;
    locationTemp.innerHTML = `${data.current.temp_c}°C`;
    feelsLikeTemp.innerHTML = `${data.current.feelslike_c}°C`;
    rainChance.innerHTML = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    humidity.innerHTML = `${data.current.humidity}%`;
    uvIndex.innerHTML = `${data.current.uv}`;
}


/**
 * createWeatherElement is a helper function that will create an element 
 * containing a single piece of data, along with the key annotating the 
 * piece of data.
 * weatherKey parameter is what the key will display.
 * weatherValClass parameter is the name of the class given 
 * to the value element for later access.
 */
function createWeatherElement(weatherKey, weatherValClass){
    //Create the elements:
    const div = document.createElement('div');
    const divKey = document.createElement('p');
    const divVal = document.createElement('p');

    //Apply the text to applicable elements:
    divKey.innerHTML = weatherKey;

    //Apply the class name to the value element for later access:
    divVal.className = weatherValClass;

    //Append the elements to the div:
    div.appendChild(divKey);
    div.appendChild(divVal);

    //Return the created weather element
    return div;
}



/**
 * pageAction is the main function for the page when the search button 
 * is pressed
 */
async function pageAction(){
    await submitInput()
    .then((resolved) => {
        console.log(resolved);
        renderPage();
        fillPageData(resolved);
        populateTimeList(resolved);
    },(rejected) => {
        console.log(rejected);
    })
}


/**
 * Event listener and selector for the input form, 
 * granting functionality to the page.
 */

const inputForm = document.querySelector(`#inputForm`);

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    pageAction();
});