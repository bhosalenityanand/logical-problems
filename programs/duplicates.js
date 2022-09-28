// write the program for the remove duplicte number in arry

let arr= [1,5,6,1,4,8,2,8,4,6,2,5,2]

let dup = new Set(arr)
console.log(dup)
// check its has duplicate or not

if(arr.length == dup.length){
    console.log("there is no duplicate element in the arry")
}

else{
    console.log("there is duplicate element in the arry")
}

// check for the string
let str = "Nityanand"
let arr2 = str.split('')

let nm = new Map()
for(let i=0;i<arr2.length;i++){
    nm.set(arr2[i],0)
}

for(let i=0;i<arr2.length;i++){
    let rt = nm.get(arr2[i])
    rt++

    nm.set(arr2[i],rt)
    if(rt>1){
        console.log("duplicate letters "+arr2[i]+"=> "+rt)
    }
    else{
        // console.log("original letter "+arr2[i])
    }
}
console.log(nm)

let dupli = new Set(arr2)
console.log(dupli)


if(arr2.length == dupli.length){
    console.log('there is no duplicate element in the string')
}
else{
    console.log('there is duplicate element in the string')
}