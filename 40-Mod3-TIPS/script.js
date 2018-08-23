var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

// 1. Get max and min number for each array (iterate through each array)
// 2. For each array, subtract max-min, to get check sum for the row
// 3. Add together all checksums (store in a variable, checksum or totalSum)

function getCheckSum(data){
  let checkSum = 0;
  // 1. iterate through data
  // data.forEach(row => {
  for(let i = 0; i<data.length; i++){
    checkSum += (getMax(data[i]) - getMin(data[i]))
  }
  // })
  // 2. get the max and min
  // 3. subtract min from max
  // 4. add that value to check sum
  return checkSum;
}

// function getSortedArray(row){
//   return row.sort((a, b) => {
//     return a - b;
//   })
// }

function getMax(row){
  //return max value
  // let max = Math.max(...row)
  let max = row[0];
  for(let i=0; i<row.length; i++){
    let curr = row[i]
    if(curr > max){
      max = curr
    }
  }
  return max
}

function getMin(row){
  //return min value
  // let min = Math.min(...row)
  let min = row[0];
  for(let i=0; i<row.length; i++){
    let curr = row[i]
    if(curr < min){
      min = curr
    }
  }
  return min
}
