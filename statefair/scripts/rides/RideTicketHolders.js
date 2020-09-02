const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")


export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketBought", event => {
        if ("ticketPurchased" in event.detail) {
            console.log("bleh")
            contentTarget.innerHTML += `
                <div class= "person rider"></div>
            `
        }
    })
}

