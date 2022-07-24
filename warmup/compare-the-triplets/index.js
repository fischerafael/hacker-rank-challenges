// compare two arrays: compare itens on the same index. if the first item is higher, adds one point to the first position. if it is draw, no one gets a point, if the second is higher, the second one receives a point

const compareTriplets = (a, b) => {
  let aResult = 0;
  let bResult = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) {
      bResult++;
    }
    if (a[i] > b[i]) {
      aResult++;
    }
  }
  return [aResult, bResult];
};

console.log(compareTriplets([1, 2, 3], [2, 2, 1]));
