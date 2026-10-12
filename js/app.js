console.log("Hello World");

localStorage.setItem("name","Kavindu");
localStorage.setItem("age","30");
localStorage.setItem("address","Colombo");

// localStorage.clear(); this makes so the storage clears itself

// localStorage.removeItem("age"); removes a key from the local storage

//retrive the values of local storage
let name = localStorage.getItem("name");
console.log(name);
