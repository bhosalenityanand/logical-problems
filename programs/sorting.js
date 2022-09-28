// write the program for the sorting the arry

// this is an asendind order

let arr = [12, 15, 13, 10, -2, 65, 23, 41]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            let s = arr[i]
            arr[i] = arr[j]
            arr[j] = s
        }
    }
}
console.log(arr)

// we write it in function

function asd_sort(m) {
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m.length; j++) {
            if (m[i] < m[j]) {
                let s = m[i]
                m[i] = m[j]
                m[j] = s
            }
        }
    }
    console.log(m)
}

//call the function

asd_sort([40, 45, 5, -5, 26, -45, 84, -20, 62, -40])

//---------------------------------------------------------------
// this is an desending  order

let arr2 = [10, 2, -3, 4, -3, 5, -10, -5, -45, 12, -12]

for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr2[i] > arr2[j]) {
            let s = arr2[i]
            arr2[i] = arr2[j]
            arr2[j] = s
        }
    }
}
console.log(" the desending sorted arry are below:")
console.log(arr2)

// by function

function desnd_sort(n) {
    for (let i = 0; i < n.length; i++) {
        for (let j = 0; j < n.length; j++) {
            if (n[i] < n[j]) {
                let s = n[i]
                n[i] = n[j]
                n[j] = s
            }
        }
    }
    console.log(n)
}

//call the function

desnd_sort([15, -12])

//a<=b<=c<=d<=e<=f
//a>=b>=c>=d>=e>=f

//checking the arry is in sorted order or not

let a1 = [1, 5, 6, 7, 8, 9]
let len = a1.length

// let p = 0

// for (let i = 0; i <= len - 1; i++) {
//     if (a1[i] > a1[i + 1]) {
//         p = 1
//         console.log("given arry is not sorted")
//         break;
//     }
// }

// if (p == 0) {
//     console.log("given arry is sorted")
// }

//we can write it in the function

function sortAsd(m) {
    let len2 = m.length
    let p = 0

    for (let i = 0; i <= len2 - 1; i++) {
        if (m[i] > m[i + 1]) {
            p = 1
            break;
        }
    }

    if (p == 0) {
        console.log("given arry is sorted")
    }
    else if (p == 1) {
        console.log("given arry is not sorted")
    }
}

sortAsd([11, 10, 5, 6, 2, 1])
sortAsd([2, 4, 6, 8, 10])

console.log("------------- for desending oreder --------------------")
// for desending order

// let a2 =[15,13,10,5,2,6]
let a2 = [15, 13, 10, 5, 2, 1]
let len3 = a2.length

let s = 0
for (let i = 0; i <= len3 - 1; i++) {
    if (a2[i] < a2[i + 1]) {
        s = 1
        break;
    }
}

if (s == 1) {
    console.log("given arry is not sorted")
}
else if (s == 0) {
    console.log("given arry is sorted")
}

//by using function

function sortDesd(m2) {
    let len3 = m2.length

    let s = 0
    for (let i = 0; i <= len3 - 1; i++) {
        if (m2[i] < m2[i + 1]) {
            s = 1
            break;
        }
    }

    if (s == 1) {
        console.log("given arry is not sorted")
    }
    else if (s == 0) {
        console.log("given arry is sorted")
    }
}

sortDesd([15, 23, 45, 48, 12, 16])
sortDesd([20.15, 12, 10, 8, 6, 2])

console.log("------------------------------------")
// now doing the both in one function (asednding and desending)

function both(r) {
    let l = r.length

    let c = 0, d = 0
    //asending
    for (let i = 0; i <= l - 1; i++) {
        if (r[i] < r[i + 1]) {
            c = 1
            break;
        }
    }
    //desending
    for (let i = 0; i <= l - 1; i++) {
        if (r[i] > r[i + 1]) {
            d = 1
            break;
        }
    }

    if (c == 0 || d == 0) {
        console.log("the given arry is sorted")
    }
    else {
        console.log("the given arry is not sorted")
    }


}

both([12, 15, 46, 2, 16, 15])
both([4, 6, 8, 10, 12, 14])
both([23,45,12,15,16,12])
both([20,12,10,8,6,3,2])
