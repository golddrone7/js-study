
//나머지 연산
console.log(Math.trunc(27/5));

// 뒤에 숫자가 더크면 앞에 숫자가 나머지
console.log(4 % 10);

// console.log(77 % 0);
console.log(0 % 77);

// 거듭제곱 연산
var num = 2;
console.log(2 ** 3);

// 증감 연산자
var leftNum = 3;
leftNum++;
++leftNum;
leftNum--;
--leftNum;
console.log(`x: ${leftNum}`);

// 전위 연산, 후위 연산
var n1 = 10;
var n2 = n1++;
console.log(`n1: ${n1}, n2: ${n2}`);


var n3 = 10;
var n4 = ++n3;
console.log(`n3: ${n3}, n4: ${n4}`);

leftNum += 3; // x = x+3;