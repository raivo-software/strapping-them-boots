Array.prototype.sum = function () {
  return this.reduce((a,b) => a + b);
}

Array.prototype.average = function () {
  return this.sum() / this.length;
}

Function.prototype.safeCall = function(...params) {
  try {
    return this(...params);
  }
  catch(err) {
    console.log('error occured', err);
  }
}

Array.prototype.findOrDefault = function(predicate, defaultValue) {
  const match = this.find(predicate);
  if(match)
    return match;
  return defaultValue;
}