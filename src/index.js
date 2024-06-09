import "./style.css";
import { getUserInput, getWeather, getHourlyDataList, getDataObject} from "./getters"
import { renderPage, renderFirstHourlyDataList, fillPageData } from "./renderers";
import { changePageStyle } from "./pageStyler";
import { clearPageData, clearHourlyDataList } from "./clearers";


/*
    submitInput calls the Weather API with the user's input as the argument.
    getWeather is only called if a value has been entered by the user.
*/
async function submitInput(location){
    if(location != ""){
        const data = await getWeather(location); 
        return data;
    } else{
        alert("A location must be entered first!")
        throw new Error("A location must be entered first!")
    }
}


/**
 * pageAction is the main function for the page when the search button 
 * is pressed
 */
async function pageAction(){
    let location = getUserInput();
    await submitInput(location)
    .then((dataObject) => {
        clearPageData();
        clearHourlyDataList();
        return dataObject;
    })
    .then((dataObject) => {
        renderPage();
        fillPageData(dataObject);
        return dataObject;
    })
    .then((dataObject) => {
        changePageStyle(dataObject)
        const hourlyDataList = getHourlyDataList(dataObject);
        renderFirstHourlyDataList(hourlyDataList);
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