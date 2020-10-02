const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")


export const ShowTicketHolders = () => {
    eventHub.addEventListener("showTicketBought", event => {
        if ("ticketPurchased" in event.detail) {
            contentTarget.innerHTML += `
                <div class= "person gawker"></div>
            `
        }
    })
}