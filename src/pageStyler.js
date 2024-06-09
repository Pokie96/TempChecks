export function changePageStyle(dataObject){
    let weatherCondition = dataObject.current.condition.text;
    changeBackground(weatherCondition); // Change Back!!
    changeTextColour(weatherCondition);
}

function changeBackground(weatherCondition){
    const body = document.querySelector('body');
    switch(weatherCondition){
        case "Sunny":
            body.style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(../src/images/SunBackground.jpg)'
            body.style.backgroundRepeat = 'no-repeat';
            body.style.backgroundPosition = 'center center';
            body.style.backgroundSize = '100% 100%';
            break;
        case "Rainy":
            body.style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../src/images/RainBackground.jpg)'
            body.style.backgroundRepeat = 'no-repeat';
            body.style.backgroundPosition = 'center center';
            body.style.backgroundSize = '100% 100%';
            break;
        case "Partly cloudy":
            body.style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(../src/images/PartlyCloudyBackground.jpg)'
            body.style.backgroundRepeat = 'no-repeat';
            body.style.backgroundPosition = 'center center';
            body.style.backgroundSize = '100% 100%';
            break;
        case "Clear":
            body.style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../src/images/ClearSkiesBackground.jpg)'
            body.style.backgroundRepeat = 'no-repeat';
            body.style.backgroundPosition = 'center center';
            body.style.backgroundSize = '100% 100%';
            break;
        case "Overcast":
            body.style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(../src/images/OvercastBackground.jpg)'
            body.style.backgroundRepeat = 'no-repeat';
            body.style.backgroundPosition = 'center center';
            body.style.backgroundSize = '100% 100%';
            break;
        case "Moderate or heavy rain shower" :
            body.style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(../src/images/HeavyRainBackground2.jpg)'
            body.style.backgroundRepeat = 'no-repeat';
            body.style.backgroundPosition = 'center center';
            body.style.backgroundSize = '100% 100%';
            break;
        case "Moderate rain":
            body.style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(../src/images/HeavyRainBackground2.jpg)'
            body.style.backgroundRepeat = 'no-repeat';
            body.style.backgroundPosition = 'center center';
            body.style.backgroundSize = '100% 100%';
            break;
        case "Light rain":
    }
}

function changeTextColour(weatherCondition){
    const all = document.querySelector('.renderedContentContainer');
    switch(weatherCondition){
        case "Sunny":
            all.style.color = "white";
            break;
        case "Rainy":
            all.style.color = "rgb(204, 217, 228)";
            break;
        case "Partly cloudy":
            all.style.color = "white";
            break;
        case "Clear":
            all.style.color = "rgb(204, 217, 228)";
            break;
        case "Moderate or heavy rain shower":
            all.style.color = "rgb(204, 217, 228)";
            break;
    }
}