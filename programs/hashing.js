// write the program for hashing

let arr = [1,1,1,2,2,2,3,3,3,5,5,6,6,4,4,9,8,8,]

let max =arr[0]

for(let i=0;i<arr.length;i++){
    if(max <= arr[i]){
        max = arr[i]
    }
}

// take the empty arry

let b= []
for(let i=0;i<=max;i++){
    b.push(0)
}
console.log(b)

for(let i=0;i<arr.length;i++){
    b[arr[i]]++
}

for(let i=0;i<b.length;i++){
    if(b[i] != 0){
        console.log(i,'->',b[i])
    }
}

//  Differenec of the time
console.log("-----------------------------------------------")

let a = 15, d = 65
let e = 10 , f = 70

// hh / mm

let i = a*60 + d
let j = e*60 + f
console.log(i,j)

let ans = 0

if(i<=j){
    ans = j - i 
}

else if(i>j){
    let total = 24*60
    ans = total -(i-j)
}

console.log(ans)

let hour = Math.floor(ans/60)
let rem = ans/60

console.log(hour,':',rem)


// write program into function 

function timeDiff(p,q,r,s){
    let i= p*60+q
    let j =r*60+s

    let ans =0

    if(i<=j){
        ans = j-i
    }
    else if(i>j){
        let total = 24*60
        ans = total-(i-j)
    }

    let hour = Math.floor(ans/60)
    let rem = ans/60

    console.log(hour,':',rem)
}

timeDiff(10,00,20,45)