const destination = 42;

function distanceFromHqInBlocks (start) {
    if (destination > start) {
        return (destination - start);
    }
    else {
        return (start - destination);
    }
}

function distanceFromHqInFeet (start) {
    return (distanceFromHqInBlocks(start) * 264);
}

function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
        return ((destination - start) * 264);
    }
    else {
        return ((start - destination) * 264);
    }
}

function calculatesFarePrice (start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        return ((distanceTravelledInFeet(start, destination) - 400) * 0.02);
    }
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}
