function calcDivisor(n){
    var cnt = 0;
    var divi = [];
    for(var i=1; i<=n; i++){
        if(n%i===0){
            cnt++;
            divi.push(i);
        }
    }
    console.log(`20의 약수: [${divi}]`);
    return cnt;
}

var divCount = calcDivisor(20);
console.log(`약수의 개수: ${divCount}개`);