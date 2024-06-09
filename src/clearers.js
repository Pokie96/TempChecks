export function clearPageData(){
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
export function clearHourlyDataList(){
    const timeList = document.querySelector('.timeList');
    if(timeList != null){
        timeList.innerHTML = "";
    }
}