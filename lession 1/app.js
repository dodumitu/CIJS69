//  const number = [1, 8, 3, 2, 5, 0, 10, 11, 20, 22]
// cach 1 // let array = []
// // for (let i = 0; i < number.length; i++) {
// //     if(number[i]%2 == 0){
// //        array.push(number[i]);
// //     }}
// //     console.log(array);
// cach 2 let numbers =[]
// numbers.filter((number)=>{
//     return number%2 == 0
// });
// array method: filter, indexOf, includes, find, concat, some, every
// filter
const numbers = [1, 8, 3, 2, 5, 0, 10, 11, 20, 22]
let res = numbers.filter(function (numbers){
    return numbers % 2 == 0 
})
// // arrow: let res = numbers.filter((numbers) => numbers % 2 == 0)
// lay so nho hon 10:
console.log(res);
let less = numbers.filter((numbers) => numbers < 10 )
console.log(less);
// map
let mapRes = numbers.map((numbers) => numbers + 2)
console.log(mapRes);
const values = [1, true, {}, "", [], "1"];
let type = values.map((values) => typeof values)
console.log(type);
// indexOf:
// includes
// concat
// some
let someRes = numbers.some((numbers) => numbers % 2 == 0 )
console.log(someRes);
// every
let everyRes = numbers.every((numbers) => numbers % 2 == 0 )
console.log(everyRes);

const input = [1,2,3,4,5,6,7,8,9]
let output = input.reverse()
console.log(output);
const str= 'abc'
let rts = str.split('').reverse().join('') /*dao nguoc abc*/
console.log(rts);
const arr1 = [1, 2, 3]
const arr2 = [100, 2, 1, 10]
let arr = arr1.filter(function(obj) { return arr2.indexOf(obj) == -1; });
console.log(arr);
