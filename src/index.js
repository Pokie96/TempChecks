import "./style.css";

/* 
    getWeather fetches a response containing weather data of a given location and returns it
    as a JavaScript object.
*/
async function getWeather(location){
    try{
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=19be7690d2fb42ce924102105241802&q=${location}`
        );
        const weatherData = await response.json();
        return weatherData;
    }
    catch(error){
        console.log(error);
    }
}

/*
    getUserInput returns the user's input from the text input box.
*/
function getUserInput(){
    const textInput = document.querySelector("#locationInput");
    const userInput = textInput.value;
    return userInput;
}

/*

*/
async function submitInput(){
    if(getUserInput() != ""){
        const data = await getWeather(getUserInput())
        console.log(data);
    } else{
        alert("A location must be entered first!")
    }
}

const inputForm = document.querySelector(".inputForm");

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitInput();
});