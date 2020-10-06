const Dinosaur = require("./dinosaur");

const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = []
};

Park.prototype.add = function(dino) {
    this.dinosaurs.push(dino);
};

Park.prototype.remove = function(dino) {
    let index = this.dinosaurs.indexOf(dino);
    this.dinosaurs.splice(index, 1);
};

Park.prototype.findMostAttractiveDinosaur = function() {
    let best = this.dinosaurs[0];
    for (dino of this.dinosaurs) {
        if (dino.guestsAttractedPerDay > best.guestsAttractedPerDay) {
            best = dino;
        }
    }
    return best;
}

Park.prototype.calculateAverageVisitorsPerDay = function() {
    let total = 0
    for (visitors of this.dinosaurs) {
        total += visitors.guestsAttractedPerDay;
    }
    return total;
};

Park.prototype.calculateAverageVisitorsPerYear = function() {
    let daily = this.calculateAverageVisitorsPerDay();
    let yearly = daily * 365;
    return yearly
}

Park.prototype.calculateAverageYearlyRevenue = function() {
    let revenue = this.calculateAverageVisitorsPerYear() * this.ticketPrice;
    return revenue
};

Park.prototype.findBySpecies = function(type) {
    let speciesList = [];
    for (dino of this.dinosaurs) {
        if (dino.species == type) {
            speciesList.push(dino);
        }
    }
    return speciesList;
}

module.exports = Park;