exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item)
        return i;
    };
    return -1;
  },

  sum : function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    };
    return sum;
  },

  remove : function(arr, item) {
    if (arr.length == 0) return;
    var i = 0;
    do {
      if (arr[i] == item) {
        arr.splice(i, 1);
      } else i++;
    } while (i < arr.length);

    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    if (arr.length == 0) return;
    var i = 0;
    do {
      if (arr[i] == item) {
        arr.splice(i, 1);
      } else i++;
    } while (i < arr.length);

    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return (arr1.concat(arr2));
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return (arr.filter(function(x) {return x == item}).length);

  },

  duplicates : function(arr) {
    var dupeArr = [], copyArr = [];
    if (arr.length <= 1) return dupeArr;
    //make copy of array
    for (var i = 0; i < arr.length; i++) {
      copyArr[i] = arr[i];
    };
    //sort array. If consecutive elements are identical, save off value to new array (once)
    copyArr.sort();
    var i = 0;
    do {
      if (copyArr[i] == copyArr[i + 1]) {
        copyArr.splice(i, 1);
        if (dupeArr[dupeArr.length - 1] != copyArr[i])
          dupeArr.push(copyArr[i]);
      } else {
        i++;
      };
    } while (i < copyArr.length - 1);
    return dupeArr;
  },

  square : function(arr) {
    arr.forEach(function(value, index, array) { array[index] = value * value; });
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var match = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == target) match.push(i);
    };
    return match;
  }
};
