// Declaration
    var a = 10;
    console.log("Initial a =", a); // 10

    // Re-declaration allowed
    var a = 20; 
    console.log("After redeclaration a =", a); // 20

    // Not block scoped
    if (true) {
      var a = 30;
      console.log("Inside block a =", a); // 30
    }
    console.log("Outside block a =", a); // 30 → same variable


     let b = 50;
    console.log("Initial b =", b); // 50

    // Re-assignment is allowed
    b = 60;
    console.log("After reassignment b =", b); // 60

    // ❌ Re-declaration in same scope gives error
    // let b = 70;  // Uncomment → SyntaxError

    // Block scope
    if (true) {
      let b = 80; // new variable only inside block
      console.log("Inside block b =", b); // 80
    }
    console.log("Outside block b =", b); // 60

     const c = 100;
    console.log("Initial c =", c); // 100

    // ❌ Re-assignment not allowed
    // c = 200; // Uncomment → TypeError

    // ❌ Re-declaration not allowed
    // const c = 300; // Uncomment → SyntaxError

    // BUT: for objects/arrays, contents can be changed
    const obj = { name: "Alice" };
    console.log("Initial obj =", obj); // { name: "Alice" }

    obj.name = "Bob"; // property can be updated
    console.log("After property change obj =", obj); // { name: "Bob" }


    for (let i = 1; i <= 5; i++) {
  console.log("For loop iteration:", i);
}
let count = 1;
while (count <= 5) {
  console.log("While loop iteration:", count);
  count++;
}

let num = 1;
do {
  console.log("Do...while iteration:", num);
  num++;
} while (num <= 5);


function greet(name){
  return "Hello, "+name+"!";
}

console.log(greet("Narendar"))
console.log(greet("Vishnu"))




const greet=(name,role)=>{
  return `Hey, i am ${name} my role is ${role}`;
  
}
console.log(greet("Narendar","Trainer"))
console.log(greet("Surya","ldm"))

const arr=[10,20,30,40]
const arr1=new Array(1,2,3,4,5)
const arr3=[1,"two",true,["four","five"],{six:6}]
console.log(arr3)