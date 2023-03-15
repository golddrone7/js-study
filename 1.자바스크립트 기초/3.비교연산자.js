var a = 5;
var b = '5';

console.log(a===b);
console.log(a!==b);

console.log('==========================')

console.log('0'=='');
console.log(0 == '');
console.log('0' == 0);
console.log(false == 'false');
console.log(false == '0');
console.log('==========================');
// == 비교는 결과 예측이 어려움
console.log('0'==='');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === '0');

// 문자 대소비교
console.log('==========================');
console.log('ace' < 'ade'); // A : 65, a : 97, 가 : 44032


var money = 0;
//돈이 없으면 이거 실행해
if(!money){
    console.log('저는 그지입니다.');
} else{
    console.log('저는 돈이 있습니당.');
}
