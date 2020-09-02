// Import and invoke the ticket booth component function
import {TicketBooth} from './TicketBooth.js'
import {RideTicketHolders} from './rides/RideTicketHolders.js'
import {FoodTicketHolders} from './food/FoodTicketHolder.js'
import { GameTicketHolders } from './games/GameTicketHolders.js'
import { ShowTicketHolders } from './sideshows/SideshowTicketHolders.js'
import {allTicketHolders} from './TicketBooth.js'

TicketBooth()
RideTicketHolders()
FoodTicketHolders()
GameTicketHolders()
ShowTicketHolders()
allTicketHolders()