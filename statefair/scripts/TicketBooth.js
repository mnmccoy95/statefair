// debugger
const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div id="ticketBooth">
            <button value="rideTicket">Ride Ticket</button>
            <button value="foodTicket">Food Ticket</button>
            <button value="gameTicket">Game Ticket</button>
            <button value="sideshowTicket">Sideshow Ticket</button>
            <button value="allTicket">Full Package Ticket</button>
        </div>
    `
}

eventHub.addEventListener("click", event => {
    if (event.target.value === "rideTicket") {
        const rideButton = new CustomEvent("rideTicketBought", {
            detail: {
                ticketPurchased: "ride"
            }
        })
        eventHub.dispatchEvent(rideButton)
    }
    if (event.target.value === "foodTicket") {
        const foodButton = new CustomEvent("foodTicketBought", {
            detail: {
                ticketPurchased: "food"
            }
        })
        eventHub.dispatchEvent(foodButton)
    }
    if (event.target.value === "gameTicket") {
        const gameButton = new CustomEvent("gameTicketBought", {
            detail: {
                ticketPurchased: "game"
            }
        })
        eventHub.dispatchEvent(gameButton)
    }
    if (event.target.value === "sideshowTicket") {
        const showButton = new CustomEvent("showTicketBought", {
            detail: {
                ticketPurchased: "show"
            }
        })
        eventHub.dispatchEvent(showButton)
    }
    if (event.target.value === "allTicket") {
        const allButton = new CustomEvent("allTicketBought", {
            detail: {
                ticketPurchased: "all"
            }
        })
        eventHub.dispatchEvent(allButton)
    }
})

const allTarget = document.getElementsByClassName("people")



export const allTicketHolders = () => {
    eventHub.addEventListener("allTicketBought", event => {
        if ("ticketPurchased" in event.detail) {
            for (let i = 0; i < allTarget.length; i++){
                allTarget[i].innerHTML += `
                        <div class="person bigSpender"></div>
                        `
                
            }}
                
})}

const customerTarget = document.querySelector(".customers")

let increaseMe = 0
export const InitialRenderCount = () => {
    customerTarget.innerHTML = `Total Tickets Purchased: ${increaseMe}`
}


const customerCount = () => {
    increaseMe++
    console.log(increaseMe)
    customerTarget.innerHTML = `Total Tickets Purchased: ${increaseMe}`
}




eventHub.addEventListener("allTicketBought", customerCount)
eventHub.addEventListener("showTicketBought", customerCount)
eventHub.addEventListener("gameTicketBought", customerCount)
eventHub.addEventListener("foodTicketBought", customerCount)
eventHub.addEventListener("rideTicketBought", customerCount)