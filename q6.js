// Given Number is prime or not
function PrimNumberChecker(num){
    let divisibleCounter = 1;

    for(let i=2 ; i<=num ; i++){
        if(num%i === 0){
            divisibleCounter ++
        }
    }

    if(divisibleCounter === 2){
        console.log('The number is Prime Number')
    } else {
        console.log('The number is not a Prime Number')
    }
}

PrimNumberChecker(21)