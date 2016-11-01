function tickets(ticketArgs, sortingAlgorithm) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];
    for (let ticket of ticketArgs) {
        let args = ticket.split('|');
        tickets.push(new Ticket(args[0], Number(args[1]), args[2]));
    }

    if (sortingAlgorithm == 'destination') {
        tickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sortingAlgorithm == 'price') {
        tickets = tickets.sort((a, b) => a.price - b.price);
    } else {
        tickets = tickets.sort((a, b) => a.status.localeCompare(b.status));
    }

    return tickets;
}