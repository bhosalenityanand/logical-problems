// write a program for separating the  positive and negative num of arry

let arr = [1, 12, -45, 23, -5, -6, 10, -2, 14, -8]
// make two more variables for positive and negative num

let pos = []
let neg = []

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] >= 0) {
        pos.push(arr[i])
    }
    else if (arr[i] < 0) {
        neg.push(arr[i])
    }
}

// addition of sum 
let sumPos = pos.reduce(function (acc, el) {
    return acc + el
}, 0)

console.log("Addition of pos num is: " + sumPos)

sumNeg = neg.reduce(function (acc, el) {
    return acc + el
}, 0)

console.log("Addition of negative num is: " + sumNeg)

if (pos.length > neg.length) {
    console.log('positve num greater')
}
else if (pos.length < neg.length) {
    console.log("negative num greather")
}
else if (pos.length == neg.length) {
    console.log(" positive and negative are equal")
}

console.log(pos)
console.log(neg)

// write this into the function

function sep(x) {

    let pos = []
    let neg = []

    for (let i = 0; i <= x.length; i++) {
        if (x[i] >= 0) {
            pos.push(x[i])
        }
        else if (x[i] < 0) {
            neg.push(x[i])
        }
    }

    // addition of sum 
    let sumPos = pos.reduce(function (acc, el) {
        return acc + el
    }, 0)

    console.log("Addition of pos num is: " + sumPos)

    sumNeg = neg.reduce(function (acc, el) {
        return acc + el
    }, 0)

    console.log("Addition of negative num is: " + sumNeg)

    if (pos.length > neg.length) {
        console.log('positve num greater')
    }
    else if (pos.length < neg.length) {
        console.log("negative num greather")
    }
    else if (pos.length == neg.length) {
        console.log(" positive and negative are equal")
    }

    console.log(pos)
    console.log(neg)
}

sep([10, -2, 5, 9, 5, -6, 45, 6, -10, 5, -6])
 