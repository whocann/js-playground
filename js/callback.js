function getData(data, callback) {
  setTimeout(()=> {
    console.log("reading...");
    callback({data: data});
  },2000)
}

getData(5, function(data){
  console.log(data);
})