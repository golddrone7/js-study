

function showMultipleNumber(n, multiNumber){
    for(let i=1; i<=n; i++){
        if(i% multiNumber ===0 ) console.log(i);
    }
}


function showNumber(n, message){
    for(let i =1; i<=n; i++){
        if(message(i)){
            console.log(i);
        }
    }
}


// showNumber(50, (num) => {
//     return num % 6 === 0 && num % 12 !==0;
// });


showNumber(50, function(num){
    return num%6===0 && num%12!==0;
});

