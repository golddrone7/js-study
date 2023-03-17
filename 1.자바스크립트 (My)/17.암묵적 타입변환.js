

var n1 = 10;
var n2 = '20';

console.log(n1+n2);
console.log(parseInt(n1) + parseInt(n2));
console.log(+n1 + +n2);

// 숫자 + 문자는 암묵적으로 문자로 형변환됨
var n3 = n1 + '';   
console.log(typeof n3);

var n4 = '100' - 55;
console.log(n4);

var n5 = +'99';


// js에서 0, '', null, undefined, NaN은 거짓으로 판단
// Falsy
if(undefined) console.log('ok1');
if(null) console.log('ok1');
if(0) console.log('ok1');
if("") console.log('ok1');
if(NaN) console.log('ok1');

// Truthy
if(1) console.log('ok2');
if(-100.55) console.log('ok2');
if(' ') console.log('ok2');
if('hello!!!') console.log('ok2');
if([]) console.log('ok2');



for(var n = 1; n<=10; n++){
    if(n%2)
        console.log(n + ' : 홀수입니다.');
    else
        console.log(n + ': 짝수입니다.');
}

