function forLoop(array) {
  for (let i = 0; i < 25; i++) {
      if (i === 1) {
        console.log("I am 1 strange loop.");
  }
  else {
    console.log(`I am ${i} strange loop.`);
  }
}
return array;
}

function whileLoop(n) {
  let countdown = 50;
  while (countdown > 0) {
    console.log(--countdown);
  }
  return n, "done";
}

function doWhileLoop(array) {
  function maybeTrue() {
  return Math.random() >= 0.5;
}
do {
  (array);
}
while (array.length > 0 && maybeTrue());
return array;
}

