// Code your solution in this file!
function distanceFromHqInBlocks(street){
    const hq = 42
    
    return Math.abs(street - hq)
}

function distanceFromHqInFeet(street){
    let blocks = distanceFromHqInBlocks(street);

        return blocks * 264;    
}

function distanceTravelledInFeet(start, destination){
    let blocklength = 264;
    1
    return Math.abs(start - destination) * blocklength
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    let fare = 0;

    if (distance < 400){
        fare = 0;

    } else if (distance > 400 && distance <= 2000){
        fare = (distance - 400) * 0.02;

    } else if (distance > 2000 && distance <= 2500){
        fare = 25

    } else{
        fare = "cannot travel that far"
    }

    return fare;

}