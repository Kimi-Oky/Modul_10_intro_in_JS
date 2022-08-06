const arr = [1, 2, 3, 5, 0];
let nulCount = 0;
let oddCount = 0;
let evenCount = 0;
let b;
let anotheCount = 0;
for (let i = 0; i < arr.length; i++){
  b = arr[i]%2;
  if (arr[i] === 0) {nulCount = ++;} 
  else if (b === 0) {evenCount = ++;} 
  else if (b == 1) {oddcount = ++;} 
  else {anotheCount = ++;}
}
 console.log("нулей: ${nulCount}, четных: ${evenCount}, нечетных: ${oddCount}, другие элементы: ${anotheCount}")