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