function insertionSortReverse(arr) {
    for(var i = arr.length-2; i >=0; i--) {
        var val = arr[i];
        var j;
        for(j = i; j < arr.length && val > arr[j+1]; j++) {
          arr[j] = arr[j+1];
        }
        arr[j] = val;
      }
      return arr;
}
