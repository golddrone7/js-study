

// multi parameter : 매개변수가 n개인 경우

// 집합 자료구조를 매개변수로 사용
// 배열, 객체

// n개의 정수를 전달하면 해당 정수의 총합을 구해주는 함수

// 스프레드 (ES6), 내부적으로 배열로 처리함
function addAll(...numbers){
    var total = 0;
    for(var n of numbers){
        total += n;
    }
    return total;
}


var r1 = addAll(1, 3, 5, 10, 20);
console.log(r1);


function foo(arr1, arr2){

}


foo([10,20], [500, 1000, 1500]);    // ...문법은 매개변수가 하나일때만 사용가능

console.log('===================================');

// 함수의 리턴값은 언제나 하나
// 2개의 정수를 전달하면 덧셈, 뺄셈, 곱셈, 나눗셈의 결과를 리턴받고싶어
// 변수가 1회용이면 쓰지말자(리펙토링)
function operateAll(n1, n2){
   
    return [
        addAll(n1, n2),
        n1 - n2, 
        n1 * n2, 
        n1 / n2
    ];

}

var result = operateAll(10,20);
console.log(`덧셈결과: ${result[0]}`);
console.log(`뺄셈결과: ${result[1]}`);
console.log(`곱셈결과: ${result[2]}`);
console.log(`나눗셈결과: ${result[3]}`);


