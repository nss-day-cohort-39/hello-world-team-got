import {useCity} from "./cityDataProvider.js"
import {cityHTML} from "./city.js"

const contentElement = document.querySelector(".dialog__cities")

export const cityList = () => {
  
    let cityObjectArray = useCity()

for (const cityObject of cityObjectArray){
    const cityHTMLRep = cityHTML(cityObject)
    contentElement.innerHTML += cityHTMLRep
  }
}