import Landmark from "./Landmark.js";
import { useLandmark } from "./LandmarkDataProvider.js";

const contentTarget = document.querySelector(".landmarkList")
const LandmarkList = () => {
    
let landmarkObjectsArray = useLandmark() 
let entireHTML = ""
    entireHTML+=`<dialog id="dialog--landmarks">`

    for (const landmarkObject of landmarkObjectsArray) {
        const landmarkHTMLRepresentation = Landmark(landmarkObject)
        entireHTML += landmarkHTMLRepresentation
    }
    entireHTML+=`<button class="button--close">Close Dialog</button></dialog>`

contentTarget.innerHTML = entireHTML

}



export default LandmarkList