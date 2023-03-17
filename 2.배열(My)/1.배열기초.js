
var a = 10;
var b = a;

a = 15;

console.log(b);

var arr1 = [1,2,3,4];
var arr2 = arr1;

arr1[1] = 999;
arr2[0] = 77;
console.log('arr1:', arr1);
console.log('arr2', arr2);

console.log('======================');

// 배열의 생성
// 배열 변수 이름 관례 : 복수형, list어미
var fruits = ['오렌지',
            '라임',
            '레몬',
            ]; // 배열 리터럴, 세로로 작성하는 것을 추천

var arrayLike={
    0 : '자몽',
    1 : '포도',
    2 : '한라봉',
    length : 3,
}


console.log(typeof fruits);
console.log(fruits);

console.log(typeof arrayLike);
console.log(arrayLike);

// length는 길이, 실제 배열은 물리적으로 일렬로 저장됨, 따라서 길이라구함
console.log(`배열의 데이터 수: ${fruits.length}`);