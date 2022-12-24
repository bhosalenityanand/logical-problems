//i have the count the repeated character

let arr = [2, 4, 6, 8, 3, 2, 4, 6, 2, 5, 4, 2, 6, 8]

// let sp = new Map()

// for (let i = 0; i < arr.length; i++) {
//     sp.set(arr[i], 0)

// }

// for (let i = 0; i < arr.length; i++) {
//     let ss = sp.get(arr[i])
//     ss++

//     sp.set(arr[i],ss)
// }

// console.log("count of the repeating numbers" + sp)
// console.log(sp)

// let current = null
// let cnt = 0
// for(let i=0; i<arr.length; i++){
//     if(arr[i] != null){
//         if(cnt > 0){
//             current= current +" Number "+cnt+" times"
//         }

//         current = arr[i]
//         cnt = 1
//     }else{
//         cnt++
//     }
//     if(cnt > 0){
//         current = current+ " number "+cnt+" times "
//     }


// }

// console.log(current)
function count() {
    array_elements = arr

    let sot = array_elements.sort();
    console.log(sot)

    var current = null;
    var cnt = 0;
    var count
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                count = current + ' comes --> ' + cnt + ' times'
                console.log(count)
            }
            
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        count = current + ' comes --> ' + cnt + ' times'
        console.log(count)
    }

}

count();
