import City from "./City.js";
import { useCity } from "./CitiesDataProvider.js";

const contentTarget = document.querySelector(".cityList")
const CityList = () => {
    
let cityObjectsArray = useCity() 
let entireHTML = ""
    entireHTML+=`<dialog id="dialog--cities">`

    for (const cityObject of cityObjectsArray) {
        const cityHTMLRepresentation = City(cityObject)
        entireHTML += cityHTMLRepresentation
    }
    entireHTML+=`<button class="button--close">Close Dialog</button></dialog>`

contentTarget.innerHTML = entireHTML

}

export default CityList