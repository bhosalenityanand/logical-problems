// Star programs
// first
/*
*
**
***
****
*****
******

*/

// for this

// let m=10
// for(let i=0;i<=m;i++){
//     let s=''
//     for(j=1;j<=i;j++){
//         s+='*'
//     }
//     console.log(s)
// }

// or other method

// function str(n){
//     for(let i=0;i<=n;i++){
//         console.log('*'.repeat(i))
//     }
// }
// str(10)

// for print the inverted stars

// function invert2(n){
//     for(let i=n;i>=1;i--){
//         console.log('*'.repeat(i))
//     }
// }
// invert2(10)
console.log('-----------------------------------------------------')
// for next star pattern

// for(let i=10;i>=1;i--){
//     let s=''
//     for(let j=0;j<=10;j++){
//         if(j>=i){
//             s=s+'*'
//         }
//         else{
//             s+=' '
//         }
//     }
//     console.log(s)
// }

// by using the function
// function retPattern(x){
//     for(let i=x;i>=0;i--){
//         let s=''
//         for(let j=0;j<=x;j++){
//             if(j>=i){
//                 s=s+'*'
//             }
//             else{
//                 s+=' '
//             }
//         }
//         console.log(s)
//     }
// }
// 
// retPattern(10)
// output is
/*
          *
         **
        ***
       ****
      *****
     ******
    *******
   ********
  *********
 **********

*/
console.log('--------------------------------------------')
// for inverted
// function revPattern(x){
//         for(let i=0;i<=x;i++){
//             let s=''
//             for(let j=0;j<=x;j++){
//                 if(j>=i){
//                     s=s+'*'
                    
//                 }
//                 else{
//                     s+=' '
//                 }
//             }
//             console.log(s)
//         }
//     }
    
// revPattern(10)

// this out put is
/*
***********
 **********
  *********
   ********
    *******
     ******
      *****
       ****
        ***
         **
          *

*/

console.log('-----------------------------------------------')
// for the traingle star pattern

for(let i=10;i>=1;i--){
    let s=''
    for(let j=0;j<=10;j++){
        if(j>=i){
            s=s+'* '
        }
        else{
            s+=' '
        }
    }
    console.log(s)
}

/**
 
          * 
         * * 
        * * *
       * * * *
      * * * * *
     * * * * * *
    * * * * * * *
   * * * * * * * *
  * * * * * * * * *
 * * * * * * * * * * 
 
 */


console.log('---------------------------------')
// now we have to print the number by  this pattern
/*
1
12
123
1234
12345
123456
1234567
12345678
123456789

*/
// for(let i=1;i<=10;i++){
//     let s=''
//     for(let j=1;j<=i;j++){
//         s+=j+' '
//     }
//     console.log(s)
// }
// its output like this
 /**
  1
  1 2
  1 2 3
  1 2 3 4
  1 2 3 4 5 
  1 2 3 4 5 6
  1 2 3 4 5 6 7
  1 2 3 4 5 6 7 8
  1 2 3 4 5 6 7 8 9 
  */


// for(let i=0;i<=10;i++){
//     let s=''
//     for(let j=1;j<=i;j++){
//         s+=i+' '
//     }
//     console.log(s)
// }
// //its output like below
/**
1
22
333
4444
55555
666666
7777777
88888888
999999999 

*/
  