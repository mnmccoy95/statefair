const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")


export const ShowTicketHolders = () => {
    eventHub.addEventListener("showTicketBought", event => {
        if ("ticketPurchased" in event.detail) {
            console.log("bleh")
            contentTarget.innerHTML += `
                <div class= "person gawker"></div>
            `
        }
    })
}