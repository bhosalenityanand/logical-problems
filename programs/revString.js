// write a program for the reverse the string

let nm = "Anand"
let rev = []

// for(let i=name.length-1;i>=0;i--){
//     rev = rev + name[i]
// }
// console.log(rev)

for(let i=nm.length-1;i>=0;i--){
    rev.push(nm[i])
}

let sol = rev.join('')
console.log(sol)