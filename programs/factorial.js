// here we check the factorial 
/*
10!
10*9*8*7*6*5*4*3*2*1
*/

function fact(m){
    let sv = 1
    for(let i=m;i>=1;i--){
        sv = sv*i
    }
    console.log(sv)
}

fact(10)
fact(5)
fact(3)

//  another method

function recur(n){
    if(n<=1){
        return n
         
    }
    
    return n*recur(n-1)
}

// recur(6)
let sol = recur(5)
console.log(sol)
