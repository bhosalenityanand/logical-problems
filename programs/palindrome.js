// write the program for the number is palindrome or not

let num = 121
let temp = num
let final=0
let rem ;
while(temp > 0){
    rem = temp%10
    console.log(rem)

    final =final*10+rem
    console.log(final)

    temp = parseInt(temp/10)
    console.log(temp)
    
}
console.log(final)
if(final==num){
    console.log("given number is palindrome")
}
else{
    console.log("given number is not palindrome")
}


