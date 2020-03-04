import {useHos} from "./hosDataProvider.js"
import {hosHTML} from "./hos.js"


const contentElement = document.querySelector(".dialog__hos")

export const hosList = () => {
    let hosObjectArray = useHos()
    for (const hosObject of hosObjectArray) {
        const hosHTMLrep = hosHTML(hosObject)
        contentElement.innerHTML += hosHTMLrep
        
    }
}