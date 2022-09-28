// write th program for the prime number

let num = 23
let a= 0 

for(let i=2;i<num;i++){
    if(num%i==0){
        a = 1
    }
}

if(a==1){
    console.log("given number is not prime")
}
else{
    console.log("given number is prime")
}

// prime numbers between the user input
// first make the function
let n= 25
let count=0

function prmNo(n){
    let a= 0
    for(let i=2;i<n;i++){
        if(n%2==0){
            a = 1
            count++
            break;
        }
    }

    if(a==1){
        return false
    }
    else{
        return true
    }
}

for(let j=2;j<=n;j++){
    if(prmNo(j)){
        console.log(j)   
    }
}
if(prmNo(25)){
    console.log('prime')
}
else{
    console.log('not prime')
}
console.log(count)

// factorial of given number

let x = 10
let ans = 1
for(let i=1;i<=x;i++){
    ans = ans*i
}
console.log(ans)


