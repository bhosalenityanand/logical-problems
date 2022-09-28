// write the program for the write number of character

let s = '2d1c6f2v3b'
let final = ''

for (let i = 0; i < s.length; i += 2) {
    let x = Number(s[i])
    while (x > 0) {
        final += s[i + 1]
        x--
    }
}
console.log(final)

// by using the function
// function writeChar(s){
//     let final = ''
//     for(let i=0;i<s.length;i++){
//         let j = Number(s[i])
//         while(j>0){
//             final+=s[i+1]
//         }
//     }
//     console.log(final)
// }

// // call the function
// writeChar('1n9i6t2y')

// write a program for the armstrong number

let num = 1646
let sum = 0
let temp = num

while (temp > 0) {
    let rem = temp % 10

    sum += rem ** 3
    temp = Math.floor(temp / 10)

}
console.log(sum)

if (sum == num) {
    console.log(num + " is armstrong number")
}
else {
    console.log(num + " is not the armstrong number")
}