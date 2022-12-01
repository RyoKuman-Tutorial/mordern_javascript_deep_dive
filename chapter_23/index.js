const x = 1;

function foo() {
  const y = 2;

  function bar() {
    const z = 3; // z = 3
    console.log(x + y + z);
  }
  bar();
}

foo();
