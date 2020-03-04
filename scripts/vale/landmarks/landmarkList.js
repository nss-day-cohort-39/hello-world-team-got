import {useLandmark} from "./landmarkDataProvider.js"
import {landmarksHTML} from "./landmarks.js"



const contentElement = document.querySelector(".dialog__landmarks")

export const landmarkList = () => {

    let landmarkObjectArray = useLandmark()

    for (const landmarkObject of landmarkObjectArray) {
        const landmarkHTMLrep = landmarksHTML(landmarkObject)
        contentElement.innerHTML += landmarkHTMLrep
        
    }
 }