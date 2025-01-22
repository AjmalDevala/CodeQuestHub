// The Array object is used to store multiple values in a single variable.
const cars = ["Saab", "Volvo", "BMW",2,5,5.5,7.1,{name:"ajmal",age:50 } ,true , null ,undefined];  // string ,number,integer ,object , Booleans ,null , undifiend 

// basic filter
const a = [
  {
    name: "ajmal",
    Amount: "30",
  },
  {
    name: "hisham",
    Amount: "50",
  },
  {
    name: "ajith",
    Amount: "60",
  },
];

let b = a.filter(a=>a.name!=="ajmal") // filter the rest of the data
// let b = a.filter(a=>a.name =="ajmal") //return the same array but you need just the object use find
// let c = a.find(a=>a.name =="ajmal") //return only the object

console.log(a)

const D = [1, 2, 3, 4, true, false, "ajmal", { name: "ajmal" }]; // filter the type
// console.log(
//   D.filter((a) => ["boolean", "string", "object"].includes(typeof a))
// );



const totalSum = a.reduce((sum, invoice) => sum + parseInt(invoice.Amount), 0); //  in the case where the array contains numbers as strings, use the parseInt() method to convert them to numbers
// console.log(totalSum);


const aa = [1, 2, 5];
const bb = [1, 4, 6, 5];
let c = aa.filter((a) => bb.includes(a));
// console.log(c);



let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i=0; i <test.length; i++){
    // console.log(test[i] % 4, test[i] % 4 < 2) //1 2 3 0 1 2 3 0 1 2 3 0  1 false true true false false true true 
}

 // flat  arr.flat(depth) more than 2 nested array you can use this or arr.flat() eg:[1,2,3,[1,2],3]
let flat =[1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(flat.flat())