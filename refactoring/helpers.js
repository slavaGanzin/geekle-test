// helpers.js
function translateScore(score) {
    switch (score) {
        case 0: return "Love";
        case 1: return "Fifteen";
        case 2: return "Thirty";
        case 3: return "Forty";
        default: return "";
    }
}


module.exports = {translateScore}