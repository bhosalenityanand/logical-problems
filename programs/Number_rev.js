// here we see th reverse of the number

let num =[2,2,5,4,5,5,4,9]

let leng = num.length
console.log(leng)

// for(let i=0;i<=leng/2;i++){
//     let temp =num[i]
//     num[i]=num[leng-i-1]
//     num[leng-i-1]=temp
// }
// console.log(num)

// for(let i=leng-1;i>=leng/2;i--){
//     let temp =num[i]
//     num[i]=num[leng-i-1]
//     num[leng-i-1]=temp
// }

// console.log(num)

// by function we can also write

function revNum(x){     // we have alwys change the (length/2) as odd or even
    let l =x.length

    for(let i=0;i<=l/3;i++){
        let temp =x[i]
        x[i]=x[l-i-1]
        x[l-i-1]=temp
    }
    console.log(x)
}

// revNum([5,15,46,75,48,46,2])
// revNum([10,20,45,48,56,26,469,452,6])

// by using the row and coloum as i and j

// let a= [5,8,40,10,25,3,8,6,5]
// let l =a.length
// console.log(l)

// for(let i=0,j=l-1;i<=l/2,j>=l/2;i++,j--){

//     let temp =a[i]
//     a[i]=a[l-i-1]
//     a[l-i-1]=temp
// }

// console.log(a)

// write the same in function

function revrNum(a){
    let len =a.len
    for(let i=0,j=len-1;i<=len/3,j>=len/3;i++,j--){
        let t= a[i]
        a[i]=a[len-i-1]
        a[len-i-1]=t
    }
    console.log(a)
    
}

// revNum([5,9,7,15,45,25,52,45])

// swaping of an arry

let arr = [12,18,5,46,25,12,11]
let ll =arr.length-1

for(let i=0,j=ll;i<=ll/2,j>=ll/2;i++,j--){
    let c = arr[i]
    arr[i] = arr[j]
    arr[j] = c
}

console.log(arr)
