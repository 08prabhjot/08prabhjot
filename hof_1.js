const even = function (n) {
    return n % 2 === 0
  }
  
  const odd = function(n) {
    return n % 2 !== 0
  }
  
  const above = function(min) {
    return function (n) {
      return n > min
    }
  }
  
  const repeatedValue = function(value, index, arr) {
    return index !== arr.indexOf(value)
  }
  
  const filter = (array, callback) => {
    let filtered = []
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        filtered.push(array[i])
      }
    }
    return filtered
  }
  
  console.log(filter([1,2,2,3,4,5,6], repeatedValue))