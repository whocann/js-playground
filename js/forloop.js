const arr = [1,2,3];
for(const e of arr){
  console.log(e);
}

const obj = { a: 1, b: 2 , c: 3}
for(const key in obj){
  console.log(obj[key]);
}

for( const v of Object.values(obj)){
  console.log(v);
}

const map = new Map(
  Object.entries(obj)
)

for(const t of map.values()){
  console.log(t);
}