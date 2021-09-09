// Design a system to reserve and buy tickets

class TicketSystem {
  constructor(params) {
    this.numOfTickets = params;
    this.reservations = 0;
    this.reservationIds = {};
  }

  reserveTicket(user, ticketCount) {
    // error checking: input, availability

    // validate input type
    if (isNaN(ticketCount)) {
      console.error('Invalid number of tickets');
    }
    // if user's id is in reservationIds, update the ticket count
  }

  buyTicket(user) {

  }
}

const system1 = new TicketSystem(3);

