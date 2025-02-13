// function func1(){
//     return 2
// }
// function func2(){
//     return 4
// }
// let a = (func1(), func2());
// console.log(a);

// const arr = ["one", "two", "three"];
// const str = "Hello";

// let res = arr.includes("on");
// let anotherVar = arr.includes("onetwo");
// let variable = str.includes("ll");
// console.log(res, anotherVar, variable);

// console.log(1 === "1");

// let a = 10;
// let b = new Number(10);
// let c = 10;

// console.log(a === b);


// let a = {
//     name : 'Adarsh'
// }
// let z = {...a};
// z.name = 'Adil';

// console.log(a)

// console.log(+true)
// console.log(!"xyz")

// str1='Hello';
// str2="World";
// result = 'HWeolrllod'

function mergeTwoString(str1, str2) {
    let result = [];
    let str1Split = str1.split('');
    let str2Split = str2.split('');
    
    for (let i = 0; i < str1.length; i++) {
      result.push(str1Split[i]); 
      if (i < str2.length) {
        result.push(str2Split[i]); 
      }
    }
    console.log(result.join(''));
  }
  
  mergeTwoString('Hello', 'World 123');  
  