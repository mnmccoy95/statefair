const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")


export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketBought", event => {
        if ("ticketPurchased" in event.detail) {
            console.log("bleh")
            contentTarget.innerHTML += `
                <div class= "person player"></div>
            `
        }
    })
}

