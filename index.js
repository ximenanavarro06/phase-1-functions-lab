// Code your solution in this file!

function distanceFromHqInBlocks(number) {
    if (number > 42) {
        return number - 42 
    } 
    else if (number < 42) {
        return 42 - number
    }
} 

function distanceFromHqInFeet(number) {
    if (number > 42) {
        return (number - 42)*264 
    } 
    else if (number < 42) {
        return (42 - number)*264
    }
} 

function distanceTravelledInFeet(start, end) {
    if ( start > end) {
        return (start - end)*264
    }
    else if (start < end) {
        return (end - start)*264
    }
}

function calculatesFarePrice(start, end) {
    const distance = distanceTravelledInFeet(start, end);
        if (distance <= 400) {
            return (0) 
        }
        else if (distance <= 2000) {
            return (0.02*(distance - 400))
        }
        else if (distance < 2500) {
            return (25)
        }
        else (distance > 2500) 
            return (`cannot travel that far`)
        
}