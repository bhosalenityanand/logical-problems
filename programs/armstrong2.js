// write the program for the re[pety character

let char = "2f6h5s3r2e3h"
var final =''

for(let i=0 ; i<char.length; i+=2){
    let x = Number(char[i])

    while(x > 0){
        final += char[i + 1]
        x--
    }
}

console.log(final)

// write the program for the armastrong number

function aStrNum(num){
    var temp = num
    var final =0


    while(temp > 0){
        var rem = temp % 10
        console.log(rem)
        final += rem ** 4
        console.log(final)

        temp = Math.floor(temp/10)
        
        console.log(temp)

    }

    if(final == num){
        console.log(" the given number is armstrong")

    }else{
        console.log(" the given number is not armstrong")
    }
    
}

// aStrNum(4526)
aStrNum(1634)

//1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407, 1634, 8208, 9474
//, 54748