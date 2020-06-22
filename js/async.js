const make = async() =>{
  const a = Promise.resolve('a');
  const b = Promise.resolve('b');
  const z = await Promise.all([a,b]);
  return z;
}

make().then(()=> console.log('done'))