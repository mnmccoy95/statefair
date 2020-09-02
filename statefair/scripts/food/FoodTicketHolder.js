const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")


export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketBought", event => {
        if ("ticketPurchased" in event.detail) {
            console.log("bleh")
            contentTarget.innerHTML += `
                <div class= "person eater"></div>
            `
        }
    })
}