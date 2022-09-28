// write the program for the space count

let name= "Nity an an d "
let sp = name.split('')
console.log(sp)
let count = 0

for(let i=0;i<sp.length;i++){
    if(sp[i]===' '){
        count++
    }
}
console.log(count)