
exports.min = function min (array) {
  if (!Array.isArray(array)){
    return 0;
  }else {
  return array.filter(elem => typeof elem === 'number').length === 0 ? 0 : Math.min(...array);
  };
};

exports.max = function max (array) {
  if (!Array.isArray(array)){
    return 0;
  }else {
  return array.filter(elem => typeof elem === 'number').length === 0 ? 0 : Math.max(...array);
  };
};

exports.avg = function avg (array) {
  if (!Array.isArray(array)){
    return 0;
  }else {
    return (array.filter(elem => typeof elem === 'number').length === 0) ? 0 : array.reduce((a, b) => a + b)/array.length;
  };
};
