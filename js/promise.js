const prom = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve(200);
  }, 2000);
});

prom.then( data => {
  console.log(`promise: ${data}`);
})


let prom1 = () => {
  return new Promise((resolve, reject) => {
    resolve("prom1");
  });
}
let prom2 = () => {
  return new Promise((resolve, reject) => {
    resolve("prom2");
  });
}
let prom3 = () => {
  return new Promise((resolve, reject) => {
    resolve("prom3");
  });
}

prom1().then(() => prom2())
       .then(() => prom3())
       .then(() => console.log("fin"));

const p1 = Promise.resolve('hello');
const p2 = 10;
const p3 = new Promise((r,_) => setTimeout(r, 2000, 'goodbye'));

Promise.all([p1,p2,p3]).then( () => console.log('done'));