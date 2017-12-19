"use strict";

class Player {

    constructor () {
        this.token = "",
        this.counts = [];
    }

    getToken () {
        return this.token;
    }

    getCountOf (face) {
        return this.counts[face];
    }

    setCountOf (face, number) {
        this.counts[face] = number;
    }

    getCountTotal () {
        return this.counts.reduce((total, number, face) => total + number * face, 0);
    }

    getCountBonus() {
        return this.getCountTotal() > 63 ? 35 : 0
    }

};

module.exports = Player;
