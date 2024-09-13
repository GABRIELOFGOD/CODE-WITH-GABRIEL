// =================================== ("WELCOME TO LOOPS AND EVENTLISTENERS") =========================== //

const fruits = [
  {
    id: 1,
    name: "Apple",
    color: "red",
    quantity: 3,
  },
  {
    id: 2,
    name: "Pineapple",
    color: "yellow",
    quantity: 2,
  },
  {
    id: 3,
    name: "Berry",
    color: "maroon",
    quantity: 20,
  },
  {
    id: 4,
    name: "Mango",
    color: "yellow",
    quantity: 5
  },
  {
    id: 5,
    name: "Orange",
    color: "orange",
    quantity: 7
  }
];

// console.log(fruits[2])

for(let fruit in fruits){
  // console.log("My "+fruits[fruit]);
}

for(let i=0; i<fruits.length; i++){
  // console.log("Running fruit "+fruits[i]);
}

const fruitFinder = fruits.find((fruit)=>{
  return fruit.color == "yellow"
});

const fruitFilter = fruits.filter((fruit)=>{
  return fruit.color == "yellow"
});

// console.log(fruitFilter);

const myContainer = document.querySelector(".container");

const myBtn = document.querySelector(".btn");

myBtn.addEventListener("click", function(){
  console.log("Btn clicked");
});

const newItem = fruits.map((fruit)=>{
  return `<div class="box" style="background: ${fruit.color};">
            <div class="title">${fruit.name}</div>
            <p class="number">${fruit.quantity}</p>
          </div>`
})

myContainer.innerHTML=newItem;
