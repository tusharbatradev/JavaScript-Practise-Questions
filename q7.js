//  5 =5*4*3*2*1 = 120 -- Factorial

function Factorial(num){
    let factorial = 1;

    for(let i=2 ; i<=num ; i++){
        factorial = factorial * i
    }

    console.log(factorial)
}

Factorial(5)