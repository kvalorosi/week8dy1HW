console.log('hello world from ts');
// Homework Exercises I just made the correctons I thought were necessary, if this is incorrect let me know.

// 1. For each of these values, what type will the TypeScript compiler infer?
let a: number = 118;
// A: number

let b: string = 'Thieves';
// A:  string

let c: boolean[] = [true, false, false];
// A: boolean

let d: {age:number};
// A: 

let e: number[] = [3]
// A: 

let f: any;
// A: 

let g: any = []
// A: 



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself',
    releaseYear: 0
};
// A:

let prices: number[] = [100, 200, 300];
prices[0] = 100;
// A:

function myFunc(a: number, b: number): number {
    return a;
}
// A:

//Codewars

//Switch/Case-Bug Fixing #6

function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b;
    break;
    case'-': result = value.a - value.b;
    break;
    case'/': result = value.a / value.b;
    break;
    case'*': result = value.a * value.b;
    break;
    case'%': result = value.a % value.b;
    break;
    case'^': result = Math.pow(value.a, value.b);
  }
  return result;
}


//Sum of positive
function positiveSum(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] >= 0) sum += arr[i];
    }
    return sum;
  }
  