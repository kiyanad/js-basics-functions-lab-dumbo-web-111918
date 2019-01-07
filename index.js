// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
      return `${someValue}` - 42
      }
    else {
      return 42 - `${someValue}`
    }
}

function distanceFromHqInFeet(someValue) {
  if (someValue > 42) {
    return (`${someValue}`- 42)*264
    }
  else {
    return (42 - `${someValue}`)*264
  }
}

function distanceTravelledInFeet(firstValue, secondValue) {
  if (firstValue > secondValue) {
    return (`${firstValue}` - `${secondValue}`)*264
  }
  else {
    return (`${secondValue}` - `${firstValue}`)*264
  }
}


function calculatesFarePrice(start, destination) {
  let distance

  if (start > destination) {
    distance = (`${start}` - `${destination}`)*264
  }
  else {
    distance = (`${destination}` - `${start}`)*264
  }

  if (distance < 400) {
    return 0

  }
  else if (distance > 400 && distance < 2000) {
  return (`${distance}`- 400) * .02
    }
    else if  (distance > 2000 && distance < 2500) {
      return 25
    }
    else {
    return `cannot travel that far`
  }
}
