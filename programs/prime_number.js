// check weather the number is prime or not

function primeNo(m) {
    let c = 0
    for (let i = 2; i < m; i++) {
        if (m % i == 0) {
            console.log(i)
            c = 1
            break
        }
    }

    if (c == 1) {
        // console.log('No')
        return false
    }
    else {
        // console.log('yes')
        return true

    }
}

let sol = primeNo(3)
console.log(sol)
// primeNo(7)
// primeNo(11)
// primeNo(14)
// primeNo(3)

// check for the user input number
// let B = 50
// let count = 0
// let sum = 0
// for(let i=2;i<=B;i++){
//     if(primeNo(i)){
//         console.log(i)
//         count++
//         sum+=i
//     }
// }
// console.log(count,sum)