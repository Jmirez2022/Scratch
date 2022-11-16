// let a = 1;
// let b = 2;
// let c = a + b;
const array1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ]
const copyarray1 = [];
array1.forEach(element => console.log(element));

//expected output: "1"
//expected output: "2"
//expected output: "3"
//expected output: "4"
//expected output: "5"
//expected output: "6"
//expected output: "7"
//expected output: "8"
//expected output: "9"
//expected output: "10"

const array2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `AddTo: ${accumulator}, Value: ${currentValue}, Index: ${index}, Result: ${returns}`,
  );
  return returns;
}

array2.reduce(reducer);
//expected result 
//AddTo: 1, Value: 2, Index: 1, Result: 3
//AddTo: 3, Value: 3, Index: 2, Result: 6
//AddTo: 6, Value: 4, Index: 3, Result: 10
//AddTo: 10, Value: 5, Index: 4, Result: 15
//AddTo: 15, Value: 6, Index: 5, Result: 21
//AddTo: 28, Value: 8, Index: 7, Result: 36
//AddTo: 36, Value: 9, Index: 8, Result: 45
//AddTo: 45, Value: 10, Index: 9, Result: 55

const array3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function isPrime(num) {
  for(let i = 2; num > i; i++) {
    if (num % i === 0){
      return false
    }
  }
  return num >1;
}

console.log(array3.filter(isPrime)); //[2, 3, 5, 7]

const array4 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const map1 = array4.map(x => x * 2);

console.log(map1);
//expected output: array [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

