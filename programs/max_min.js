// write the program for the max and min of an arry

let num = [10, 2, 5, 2, 3, 0, 15, 25, 45]
let max = num[0]
let min = num[0]

for (let i = 0; i < num.length; i++) {
    if (max <= num[i]) {
        // console.log(num[i])
        max = num[i]
    }
    else if (min >= num[i]) {
        min = num[i]
    }
}
console.log("the maximum value of the arry is " + max)
console.log("the minimum value of the arry is " + min)

// write it into the function

function maxMin(x) {
    let max = x[0]
    let min = x[0]

    for (let i = 0; i < x.length; i++) {
        if (max <= x[i]) {
            max = x[i]
        }

        else if (min >= x[i]) {
            min = x[i]
        }
    }

    console.log("the maximum value of the arry is " + max)
    console.log("the minimum value of the arry is " + min)

}

maxMin([10, -4, 15, -10, 51, 12, 23, 56])
maxMin([2, 3, 5, -4, -2, 6, 2, -5])


// find the pair of arry is equal to given value

let arr = [4, 5, 9, 3, 6, 3, 4, 8, 5, 4, 3, 3, 6]
let k = 9
let count = 0

for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length; j++) {
        if (j != i) {
            let total = arr[i] + arr[j]
            // console.log(total)

            if (total === k) {
                console.log(arr[i], arr[j])
                count++
            }

        }
    }
}
// console.log(pairs)
console.log(count / 2)

// write by using the function

function sum(x, y) {

    let count = 0
    for (let i = 0; i < x.length; i++) {

        for (let j = 0; j < x.length; j++) {
            if (j != i) {
                let sumOf = x[i] + x[j]

                if (sumOf == y) {
                    console.log(x[i], x[j])
                    count++
                    break

                }
            }
        }
    }
    console.log(count / 2)
}

//call the function

sum([5, 5, 8, 2, 4, 6, 5, 9, 5, 4, 7, 3], 10)

console.log("----------------------------------")
// or by one another method

let a = [1, 2, 5, 1, 3, 3, 4, 2, 8, 2, 6, -3, 6]
let b = 6

for (let i = 0; i < a.length; i++) {

    for (let j = 0; j != i, j < a.length; j++) {
        if(j!=i){
            let total = (a[i] + a[j])
             if(total == b){
                console.log(a[i],a[j])
             }
            

        }
    }
}