// write the program for star pattern

function starP(n){
    for(let i=0;i<=n;i++){
        let s=''
        for(let j=0;j<=i;j++){
            s+= '* '
        }
        console.log(s)
    }
}
starP(10)

// same the program for the return pattern
console.log("----------------------------------------------")
function revStarP(n){
    for(let i=n;i>=0;i--){
        let s=''
        for(let j=0;j<=i;j++){
            s+= '* '
        }
        console.log(s)
    }
}
revStarP(10)

console.log("----------------------------------------------")

function nwStar(n){
    for(let i=n;i>=0;i--){
        let s = ''
        for(let j=0;j<=n;j++){
            if(j>=i){
                s+='* '
            }
            else{
                s+=' '
            }


        }
        console.log(s)
    }
}

nwStar(10)

// write same pattern for the reverse pattern
function revNwStar(n){
    for(let i=0;i<=n;i++){
        let s = ''
        for(let j=0;j<=n;j++){
            if(j>=i){
                s+='* '
            }
            else{
                s+=' '
            }


        }
        console.log(s)
    }
}
revNwStar(10)

console.log("------------------------")

for(let i=1;i<=10;i++){
    let s=''
    for(let j=1;j<=i;j++){
        s+=j.repeat(i)
    }
    console.log(s)
}