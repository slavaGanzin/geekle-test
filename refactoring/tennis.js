'use strict';

const { translateScore } = require('./helpers');

function getScore(P1point, P2point) {
    if (P1point === P2point) {
        return P1point > 2 ? "Deuce" : `${translateScore(P1point)}-All`;
    }

    if (P1point >= 4 || P2point >= 4) {
        const minusResult = P1point - P2point;
        if (minusResult === 1) return "Advantage player1";
        if (minusResult === -1) return "Advantage player2";
        if (minusResult >= 2) return "Win for player1";
        if (minusResult <= -2) return "Win for player2";
    }

    return `${translateScore(P1point)}-${translateScore(P2point)}`;
}

module.exports = getScore;
