// console.log("Hello World");

// localStorage.setItem("name","Kavindu");
// localStorage.setItem("age","30");
// localStorage.setItem("address","Colombo");

// localStorage.clear(); this makes so the storage clears itself

// localStorage.removeItem("age"); removes a key from the local storage

//retrive the values of local storage
// let name = localStorage.getItem("name");
// console.log(name);
let customer =[
    {
        name : "Ann",
        age : 18,
        isMarried : false
    },
    {
        name : "Penny",
        age : 22,
        isMarried : false
    },
    {
        name : "Sam",
        age : 17,
        isMarried : false
    }
];
//convert the object to a string
let stringCust = JSON.stringify(customer);
// store string in localstorage
localStorage.setItem("customer",stringCust);
//prints the data as an object
console.log(JSON.parse(stringCust));
