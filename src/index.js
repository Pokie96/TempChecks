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
 * getHourlyDataList assigns the list of all of the hourly readings for a locations temperatures 
 * to a variable and returns it
 */
async function getHourlyDataList(location){
    const weatherData = await getWeather(location);
    const hourlyDataList = weatherData.forecast.forecastday[0].hour;
    return hourlyDataList;
}

/**
 * renderFirstHourlyDataList renders the first half of the hourly data list on to the page and adds 
 * a navigation button with an event listener to render the second half of the hourly data list.
 */
async function renderFirstHourlyDataList(){
    let startingHour = 0;
    const timeList = document.querySelector(".timeList");
    const hourlyDataList = await getHourlyDataList(location);
    const navButton = await createDownwardNavigationButton(renderSecondHourlyDataList);
    for(let i = startingHour; i < startingHour + 12 && i < 24; i++){
        //Create the hour element for each hour:
        const hourElement = document.createElement("li");
        const hourTime = document.createElement("p");
        const hourData = document.createElement("p");

        //Add classes to the elements:
        hourElement.className = "hourElement";
        hourTime.className = "hourTime";
        hourData.className = "hourData";

        //Fill each element with each hour of the day:
        if(i < 10){
            hourTime.innerHTML = `0${i}:00`;
        } 
        else{
            hourTime.innerHTML = `${i}:00`;
        }

        //Add the weather data to each hour element:
        hourData.innerHTML = `${hourlyDataList[i].temp_c}°C`

        //Append the hour time and hour data elements to the hour container element:
        hourElement.appendChild(hourTime);
        hourElement.appendChild(hourData);

        //Append the whole hour element to the time list:
        timeList.appendChild(hourElement);
    }
    timeList.appendChild(navButton);
}

/**
 * renderSecondHourlyDataList renders the second half of the hourly data list on to the page and adds 
 * a navigation button with an event listener to render the first half of the hourly data list.
 */
async function renderSecondHourlyDataList(){
    let startingHour = 12;
    const timeList = document.querySelector(".timeList");
    const hourlyDataList = await getHourlyDataList(location);
    const navButton = await createUpwardNavigationButton(renderFirstHourlyDataList);
    timeList.appendChild(navButton);
    for(let i = startingHour; i < startingHour + 12 && i < 24; i++){
        //Create the hour element for each hour:
        const hourElement = document.createElement("li");
        const hourTime = document.createElement("p");
        const hourData = document.createElement("p");

        //Add classes to the elements:
        hourElement.className = "hourElement";
        hourTime.className = "hourTime";
        hourData.className = "hourData";

        //Fill each element with each hour of the day:
        if(i < 10){
            hourTime.innerHTML = `0${i}:00`;
        } 
        else{
            hourTime.innerHTML = `${i}:00`;
        }

        //Add the weather data to each hour element:
        hourData.innerHTML = `${hourlyDataList[i].temp_c}°C`

        //Append the hour time and hour data elements to the hour container element:
        hourElement.appendChild(hourTime);
        hourElement.appendChild(hourData);

        //Append the hour element and the navigation button to the time list:
        timeList.appendChild(hourElement);
        
    }
}

function clearPageData(){
    const contentContainer = document.querySelector('.renderedContentContainer');
    if(contentContainer != null){
        const locationName = document.querySelector(".locationName");
        const countryName = document.querySelector(".countryName");
        const dateTime = document.querySelector('.dateTime');
        const dataWrapper = document.querySelector('.dataWrapper');
        const timeList = document.querySelector('.timeList');

        locationName.remove();
        countryName.remove();
        dateTime.remove();
        dataWrapper.remove();
        timeList.remove();
    }
}

/**
 * clearHourlyDataList clears the list element containing all of the hourly data.
 */
function clearHourlyDataList(){
    const timeList = document.querySelector('.timeList');
    if(timeList != null){
        timeList.innerHTML = "";
    }
}

/**
 * createNavigationButton creates and returns a button with an event listener attached to it.
 * When clicked the button first clears the hourly data list before rendering one of the halfs 
 * of the list depending on the function given to the parameter. 
 */
async function createDownwardNavigationButton(renderDataList){
    const navButton = document.createElement('button');
    navButton.className = 'navButton';
    navButton.innerHTML = '&#x21E9';
    navButton.addEventListener('click', () => {
        clearHourlyDataList();
        renderDataList(getHourlyDataList(location));
    });
    
    return navButton;
}

async function createUpwardNavigationButton(renderDataList){
    const navButton = document.createElement('button');
    navButton.className = 'navButton';
    navButton.innerHTML = '&#x21E7';
    navButton.addEventListener('click', () => {
        clearHourlyDataList();
        renderDataList(getHourlyDataList(location));
    });
    
    return navButton;
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
async function submitInput(location){
    if(getUserInput() != ""){
        const data = await getWeather(location); 
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

async function changePageStyle(location){
    let weatherCondition = null;
    const data = await getWeather(location)
    .then((data) => {
        weatherCondition = data.current.condition.text
        changeBackground(weatherCondition);
        changeTextColour(weatherCondition);
    },
    (rejected) => {
        throw new Error(rejected);
    })
}

function changeBackground(weatherCondition){
    const body = document.querySelector('body');
    console.log(weatherCondition);
    switch(weatherCondition){
        case "Sunny":
            body.style.backgroundImage = 'url(../src/images/SunBackground.jpg)';
            break;
        case "Rainy":
            body.style.backgroundImage = 'url(../src/images/RainBackground.jpg)';
            break;
        case "Partly cloudy":
            body.style.backgroundImage = 'url(../src/images/PartlyCloudyBackground.jpg)';
            break;
        case "Clear":
            body.style.backgroundImage = 'url(../src/images/ClearSkiesBackground.jpg)';
            break;
        case "Overcast":
            body.style.backgroundImage = 'url(../src/images/OvercastBackground.jpg)';
    }
}

function changeTextColour(weatherCondition){
    const all = document.querySelector('.renderedContentContainer');
    switch(weatherCondition){
        case "Sunny":
            
            break;
        case "Rainy":
            
            break;
        case "Partly cloudy":
            
            break;
        case "Clear":
            all.style.color = 'red';
            break;
    }
}

let location = null;

/**
 * pageAction is the main function for the page when the search button 
 * is pressed
 */
async function pageAction(){
    location = getUserInput();
    await submitInput(location)
    .then((resolved) => {
        clearPageData();
        clearHourlyDataList();
        renderPage();
        fillPageData(resolved);
    })
    .then(() => {
        changePageStyle(location)
    })
    .then(() => {
        renderFirstHourlyDataList(getHourlyDataList(location))
    })
    .catch((rejected) => {
        console.log(rejected);
    })
}

/**
 * Event listener to initialise the main event of the page
 */
const inputForm = document.querySelector(`#inputForm`);
inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    pageAction();
});