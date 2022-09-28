// write the program for the seprate the number in the string
let aa = "Nity15mbdyt5'[]/.,24537"

let f = ''

for (let i = 0; i < aa.length; i++) {
    if (Number(aa[i] || aa[i] == '0')) {
        f += aa[i]
    }
}

console.log(f)

// writr it into the function

function sepNum(n) {
    let f = ''
    for (let i = 0; i < n.length; i++) {
        if (Number(n[i] || n[i] == '0')) {
            f += n[i]
        }
    }

    console.log("The number in the string: " + f)
}

sepNum("ihvf598#$%^&())_48cns>?>")


// write the program for the   seprate the alphabet from string

let bb = '48ffeffafftclkhlgHBKM%$@#!()}{P:?NUIVm[l'
let s = ''
let c = ''
for (let i = 0; i < bb.length; i++) {
    if (bb[i] >= 'a' & bb[i] <= 'z') {
        s += bb[i]
    }
    else if (bb[i] >= 'A' & bb[i] <= 'Z') {
        c += bb[i]
    }
}

console.log(s)
console.log(c)

// write into the function

function sepAlpha(m) {
    let small = ''
    let capatil = ''

    for (let i = 0; i < m.length; i++) {
        if (m[i] >= 'a' & m[i] <= 'z') {
            small += m[i]
        }
        else if (m[i] >= 'A' & m[i] <= 'Z') {
            capatil += m[i]
        }
    }
    console.log("The small character are: " + small)
    console.log("the capatil character: " + capatil)

}

sepAlpha("bhdksj49865##$$%^&()_>:MKNbdvgyd4698")

// write the program for the counting the character

let arr = [5, 2, 6, 4, 8, 2, 3, 6, 5, 4, 2, 3, 6, 5, 4]

let mn = new Map()

for (let i = 0; i < arr.length; i++) {
    mn.set(arr[i], 0)

}

// console.log(mn)

for (let i = 0; i < arr.length; i++) {
    let rr = mn.get(arr[i])
    rr++

    mn.set(arr[i],rr)
}

console.log(mn)

// with alphabet 

let arr2 = ['sc','sd','sf','sc','sd','sd','sd','sf','sg','sf']

let nm = new Map()

for(let i=0;i<arr2.length;i++){
    nm.set(arr2[i],0)
}

for(let i=0;i<arr2.length;i++){
    let r = nm.get(arr2[i])
    r++

    nm.set(arr2[i],r)
}

console.log(nm)


// write it into the function

function charCount(m){
    let pq = new Map()

    for(let i=0;i<m.length;i++){
        pq.set(m[i],0)
    }
    console.log(pq)

    // for(let i=0;i<m.length;i++){
    //     let ab = pq.get(m[i])
    //     ab++

    //     pq.set(m[i],ab)
    // }
    for(let i=0;i<arr2.length;i++){
        let r = pq.get(m[i])
        r++
    
        pq.set(m[i],r)
    }

    console.log("count of every character: "+pq)
}


charCount([1,6,1,4,1,4,2,5,'o','k','r','f','d','s','s','%','$','*','()',')'])

let string = "Archana"
function palind(string){
   let ans  = string.split('').reverse().join('')

   if(ans == string){
       console.log("the given string is palindrome")
   }
   else{
       console.log("the given string is not palindrome")
   }
}

palind(string)

console.log(string+" is so cute ")
