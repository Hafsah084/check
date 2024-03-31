function kilometersToMeters(kilometers) {
    return kilometers * 1000;
}

function metersToKilometers(meters) {
    return meters / 1000;
}

function centimetersToMeters(centimeters) {
    return centimeters / 100;
}

function metersToCentimeters(meters) {
    return meters * 100;
}

module.exports = {
    kilometersToMeters,
    metersToKilometers,
    centimetersToMeters,
    metersToCentimeters
};