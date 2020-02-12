function alarne1(){
    return "hora de acordar "
} 

function alarne2(){
    return "falta 10  "
} 

setTimeout( function(){
        console.log(alarne1())
}, 0 )

setTimeout( function(){
    console.log(alarne2())
}, 0 )