const initializeDetailButtonEvents = () => {

    const allDetailButtons = document.querySelectorAll("button[id^='button--']")
    for (const btn of allDetailButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const buttonId = theEvent.target.id.split("--")
                const buttonString = buttonId[1]
                const theDialog = document.querySelector(`#dialog--${buttonString}`)
                theDialog.showModal()
            }
        )
    }

    const allCloseButtons = document.querySelectorAll("button[class^='button--']")
    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
}

export default initializeDetailButtonEvents;