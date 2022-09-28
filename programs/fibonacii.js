// ficnoacii series
// like this...
// 0 1 1 2 3 5 8 13 21 .....so on

let x= 10
let a=0,b=1
console.log(a)
console.log(b)

// for(let i=2;i<=x;i++){
//     let c=a+b
//     console.log(c)
//     a=b
//     b=c

// }

// write by using the function

function fabno(x){
    let a=0,b=1
    console.log(a)
    console.log(b)
    for(let i=0;i<=x;i++){
        let c=a+b
        console.log(c)
        a=b
        b=c
    }
}

fabno(10)
fabno(15)