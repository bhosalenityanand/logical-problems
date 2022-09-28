// here we see the number and alphabet pattern

/*
1 
2 3 
4 5 6
7 8 9 10
11 12 13 14 15
*/
// for this output written below code

// let k=1

// for(let i=1;i<=5;i++){
//     let s=''
//     for(j=1;j<=i;j++){
//         s+=k+' '
//         k++
//     }
//     console.log(s)
// }

// we can written it into the function be like 

// function rep (n){
//     let k = 1
//     for(let i=0;i<=n;i++){
//         let s=''
//         for(let j=1;j<=i;j++){
//             s+=k+' '
//             k++
//         }
//         console.log(s)
//     }
    
// }

// rep(6)

//---------------------------------------------

/*
     1 
    2 3 
   4 5 6
  7 8 9 10
 11 12 13 14 15
16 17 18 19 20 21
*/

// for the reverce pattern 

let k2 = 1

for(let i=5;i>=0;i--){
    let s=''
    for(let j=0;j<=5;j++){
        if(j>=i){
            s+=k2+' '
            k2++
        }
        else if(i>j){
            s+=' '
        }
    }
    console.log(s)
}

// -----------------------------------------------

// now for the alphabet pattern 

let alphb = ['a','b','c','d','e','f','g','h','i','j','k']


// for(let i=0;i<=alphb.length-1;i++){
//     let s=''
//     for(let j=0;j<=i;j++){
//         s+=alphb[i]+' '
//     }
//     console.log(s)
// }

// its output is like
/*
a
b b
c c c
d d d d
e e e e e
f f f f f f
g g g g g g g
h h h h h h h h
i i i i i i i i i
j j j j j j j j j j 
k k k k k k k k k k k
*/

// by using the function
// output be like this
/*
a
a b
a b c
a b c d
a b c d e
a b c d e f
a b c d e f g
a b c d e f g h 
a b c d e f g h i
a b c d e f g h i j
a b c d e f g h i j k
*/

let argu = alphb.length-1
function alp(m){
    for(let i=0;i<=m;i++){
        let s= ''
        for(let j=0;j<=i;j++){
            s+=alphb[j]+' '
        }
        console.log(s)
    }
}

alp(argu)

//-----------------------------------------

// by incremental order

let arr = ['a','b','c','d','e','f','g','i','j','k','l','m','n','o','p','q','r','s','t','v','w','x','y','z']


let k=0
for(let i=0;i<=5;i++){
    let s=''
    for(let j=0;j<=i;j++){
        s+=arr[k]+' '
        k++
    }
    console.log(s)
}

// its out put be like
/*
a
b c
d e f
g i j k
l m n o p
q r s t v w
*/

// by using the fumction

let c= 0
function chart(m){
    for(let i=0;i<=m;i++){
        let s=''
        for(let j=0;j<=i;j++){
            s+=arr[c]+' '
            c++
        }
        console.log(s)
    }
}

chart(3)

