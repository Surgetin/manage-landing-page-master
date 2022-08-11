// speed limit = 70
// 5 -> 1 point
// 12 points -> suspended
// Math.floor (1.6)

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  const maxPoints = 12;
  if (speed < speedLimit + kmPerPoint) {
    console.log("ok");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= maxPoints) {
    console.log("License suspended");
  } else {
    console.log("Points:", points);
  }
}

const array = [0, null, 2, 3, 34252, 2352, undefined, 123];

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

const message = countTruthy(array);
console.log(message);
