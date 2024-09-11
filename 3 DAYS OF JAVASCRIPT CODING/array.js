// const myArray = new Array("Gabriel", "Ayodele");

let age = 12;
let marrital_status = "On God";

const theArray = ["Gabriel", "Ayodele", age, marrital_status];
theArray[-1]

// ============= ARRAY METHODS ================ //
// push()
theArray.push("Solomon", 17);

// pop()
theArray.pop();

// shift()
const firstItem = theArray.shift();

// slice()
// existingArray = ["Ayodele", age, marrital_status, "Solomon"]
const myString = "newStringt";
const slicedArray = myString.slice(1, 6);

// indexOf();
const indexOfItem = theArray.indexOf("Solomon");

// ============== HIGHER ORDER METHODS ================ //
const numberList = [1, 2, 3, 4, 5, 6]

// forEach()
numberList.forEach((deal)=>{
  // console.log(deal*2);
});

// filter()
const countries = [
  'Nigeria',
  'UK',
  'Netherlands',
  'Canada',
  'USA',
  'Norway',
]

const NCountries = countries.filter((deal)=>{
  return deal.startsWith("U");
});
console.log(NCountries);

