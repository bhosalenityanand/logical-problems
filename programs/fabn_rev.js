// write th program for the fabonacii number

// let n = 10
// let a=0,b=1
// console.log(a)
// console.log(b)

// for(let i=3;i<=n;i++){
//     let c=a+b
//     console.log(c)
//     a=b
//     b=c
// }

//  again

let a1=0,b1=1
console.log(a1)
console.log(b1)

let c1 = a1+b1
let n1 = 15
for(let i=3;i<=n1;i++){
    let c1= a1+b1
    console.log(c1)
    a1=b1
    b1=c1
    
    if(i==n1){
        console.log(c1)
    }
}


// reverse the arry

let arr = [1,5,3,4,9,7,6,6,2,3]

// let rev= arr.reverse()     // this is simple method
// console.log(rev)

// let l = arr.length
// for(let i=0;i<l/2;i++){
//     let tem = arr[i]
//     arr[i] = arr[l-i-1]
//     arr[l-i-1] = tem
// }

// console.log(arr)

// by another one method

let l2 = arr.length

for(let i=0,j=l2-1;i<l2/2,j>l2/2;i++,j--){
    let temp = arr[i]
    arr[i]=arr[l2-i-1]
    arr[l2-i-1]=temp
}

console.log(arr)

