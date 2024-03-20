import "./style.css";

/* 
    getWeather fetches a response containing weather data of a given location and returns it
    as a JavaScript object.
*/
async function getWeather(location){  
    const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=19be7690d2fb42ce924102105241802&q=${location}`
    );   
    const weatherData = await response.json();
    if(!weatherData.location){
        throw new Error("No location found!")
    }
    return weatherData;
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
        const data = await getWeather(getUserInput()) 
        return data;
    } else{
        alert("A location must be entered first!")
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
    const dataWrapper = document.createElement('div');
    const locationTemp = document.createElement('p');

    //Add class names to the new elements:
    locationName.className = "locationName";
    countryName.className = "countryName";
    dataWrapper.className = "dataWrapper";
    locationTemp.className = "locationTemp";

    //Append weather data to data wrapper:
    dataWrapper.appendChild(locationTemp);

    //Append the new elements to the page:
    contentContainer.appendChild(locationName);
    contentContainer.appendChild(countryName);
    contentContainer.appendChild(dataWrapper);
}

function fillPageData(data){
    const locationName = document.querySelector('.locationName');
    const countryName = document.querySelector('.countryName');
    const locationTemp = document.querySelector('.locationTemp');

    locationName.innerHTML = data.location.name;
    countryName.innerHTML = data.location.country;
    locationTemp.innerHTML = `Current: ${data.current.temp_c}°C`;
}

const inputForm = document.querySelector(`#inputForm`);

async function pageAction(){
    await submitInput()
    .then((resolved) => {
        console.log(resolved);
        renderPage();
        fillPageData(resolved);
    },(rejected) => {
        console.log(rejected);
    })
}

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    pageAction();
});