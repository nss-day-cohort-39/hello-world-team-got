import HOS from "./HOS.js";
import { useHOS } from "./HOSDataProvider.js";

const contentTarget = document.querySelector(".HOSList")
const HOSList = () => {
    
let HOSObjectsArray = useHOS() 
let entireHTML = ""
    entireHTML+=`<dialog id="dialog--HOS">`

    for (const HOSObject of HOSObjectsArray) {
        const HOSHTMLRepresentation = HOS(HOSObject)
        entireHTML += HOSHTMLRepresentation
    }
    entireHTML+=`<button class="button--close">Close Dialog</button></dialog>`

contentTarget.innerHTML = entireHTML

}


export default HOSList