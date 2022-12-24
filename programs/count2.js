//W R P for repeating arry numbers


// let arry = [2,4,3,2,6,4,2,3,5,1,2,6,4]
// let nw = new Map()

// for(let i =0; i<arry.length; i++){
//     nw.set(arry[i],0)
// }

// for(let i=0; i<arry.length; i++){
//     let cnt = nw.get(arry[i])
//     cnt++

//     nw.set(arry[i],cnt)
// }
// console.log(nw)
// let sol = nw.forEach(function(num,val){
//     console.log("Number "+val+" comes "+ num+" times")
// })

// console.log(sol)

// another on e way 

// function count(){
//     let arr = arry
    // arr.sort()

//     var current = null
//     var cnt = 0
//     var totl =0
     
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] != current ){
//             if(cnt > 0){
//                 totl = "Number "+ current+ " Comes "+cnt + "  Times"
//                 console.log(totl)
//             }

//             current = arr[i]
//             cnt = 1
//         }else{
//             cnt++
//         }
//     }
//     if(cnt > 0 ){
//         totl = "Number "+ current+ " Comes "+cnt + "  Times"
//         console.log(totl)
//     }

// }

// count()

// function aler(name){
//     console.log(`Hello ${name}`)
// }

// function display (){
//     let name = prompt('Enter the name');
//      aler(name)
// }

// display(aler)

function count(arr){
    var nw = new Map()

    for(let i=0; i<arr.length;i++){
        nw.set(arr[i],0)
    }

    for(let i=0; i<arr.length; i++){
        let cnt = nw.get(arr[i])
        cnt++

        nw.set(arr[i],cnt)
    }

    console.log(nw)
    nw.forEach(function(cnt,num){
        console.log("Number "+num+" --> "+cnt+" Times")
    })
    let dupli = []

    nw.forEach(function(cnt,num){
        if(cnt>1){
            dupli.push(num)
        }
    })
    console.log(dupli)

}

count([2,3,5,4,2,6,1,4,2,3,5,6])

// by the another methods

console.log("-------------------------------------")

// function countrep(arr){
//     var arry = arr.sort()

//     var current = null
//     var count = 0
//     var final = 0

//     for(let i=0 ; i<arry.length; i++){
//         if(arry[i] != current){
//             if(count > 0){
//                 final = "Number "+ current+" --> "+count+" times"
//                 console.log(final)
//             }
//             current = arry[i]
//             count = 1
//         } else{
//             count++
//         }
//     }
//     if(count > 0){
//         final = "Number "+ current+" --> "+count+" times"
//         console.log(final)
//     }
// }

// countrep([5,2,4,6,3,4,2,6,5,8,4,9,8,5,2])
