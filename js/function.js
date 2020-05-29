function by(sProperty, sValue) {
    return function(mEntity) {
      return mEntity[sProperty] === sValue;
    }
  }
  //or 
  //Create a helper function that will produce a function that can be used as a filter predicate.
  by = (p, v) => x => x[p] == v;  
  
  
  function countOf(sProperty) {
    return function(t, mEntity) {
      return t + mEntity[sProperty];
    }
  }
  or 
  sumOf = p => (a, x) => a + x[p]
  
  aEntities
    .filter(by("namespace", "sap.ui.core"))
    .reduce(countOf("sampleCount"), 0)
  
  
  aEntities.map(function(mEntity) {
    return {
      id : mEntity.id,
      sampleCount : mEntity.sampleCount,
      uc_category : mEntity.category.toUpperCase()
    };
  })
   same
  aEntities.map(function(mEntity) {
    return ["id", "sampleCount"].reduce(function(m, sProperty) {
      m[sProperty] = mEntity[sProperty]; return m;
    }, { uc_category : mEntity.category.toUpperCase() })
  })
  
  //	Bonus: The reduce function is often used to turn an array into a scalar value, like we've used reduce thus far. But it doesn't have to. Write an expression to compute the number of entities in each namespace, ending up with a map:
  aEntities.reduce((a, x) => {
    a[x.namespace] = (a[x.namespace] || 0) + 1;
    return a;
  }, {})
  
  
  aEntities.reduce((a, x) => {
    a[x.namespace] = (a[x.namespace] || 0) + 1;
    return a;
  }, {})
  
  
  let oEntry = aCartEntries.find(
      x => x.ProductId === oProduct.ProductId
  );
  
  
  const array1 = [{name: "kevin", age: 30}, {name: "carol",age: 40}];
  
  let array2 = array1.map( array =>         
            ["name","age"].reduce( (acc, curr) => { acc[curr] = array[curr]; return acc; } , {} )                     
                                 );
  console.log(array2);
  
  
  
  const contains = xs => x => xs.indexOf(x) >= 0
    const isInB = contains(b)
    return sameLength(a, b) && a.every(isInB)
  
  