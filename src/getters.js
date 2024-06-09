let dataObject = null;

/* 
    getWeather fetches a response containing weather data of a given location and returns it
    as a JavaScript object.
*/
export async function getWeather(locationInput){  
    const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=19be7690d2fb42ce924102105241802&q=${locationInput}`
    );   
    const weatherData = await response.json();
    if(!weatherData.location){
        throw new Error("No location found!")
    }
    dataObject = weatherData;
    return weatherData;
}

export function getDataObject(){
    return dataObject;
}

/**
 * getHourlyDataList assigns the list of all of the hourly readings for a locations temperatures 
 * to a variable and returns it
 */
export function getHourlyDataList(dataObject){
    const hourlyDataList = dataObject.forecast.forecastday[0].hour;
    return hourlyDataList;
}

/*
    getUserInput returns the user's input from the text input box.
*/
export function getUserInput(){
    const textInput = document.querySelector("#input");
    const userInput = textInput.value;
    return userInput;
}
