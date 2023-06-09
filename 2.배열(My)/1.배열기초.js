
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
var fruits = [
            '오렌지',
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

// 배열 데이터 참조(reference)
console.log(`첫번째 데이터 ${fruits[0]}`);
console.log(`마지막 데이터 : ${fruits[fruits.length-1]}`);

// 배열 요소 수정
fruits[1] = '파인애플';

console.log(fruits);

// 수정 시 주의사항, 의도하지 않은 데이터 3번이 들어감, 길이 5
// fruits[4]= '초콜릿';
// console.log(fruits);

// 배열 내부데이터 전체 참조(순회 : travis)
// 선형 탐색 : 순차적으로 확인해보면서 찾기
var target = '바나나';
// 찾았는지에 대한 여부
var findFlag = false;

for(var i=0; i<fruits.length; i++){
    // console.log(fruits[i]);
    if(fruits[i] === target){
        console.log(`${target} 과일은 존재함! `);
        findFlag = true;
        break;
    } 
    if(i===fruits.length-1){
        console.log(`${target} 과일을 찾지 못함`);
    }
}

if(!findFlag) console.log(`${target} 과일 없음!`);


// for ~ of 반복문 (배열 전용 반복문)
var weekDays = ['월', '화', '수', 
                '목', '금', '토', '일'];

console.log('=======================');
for(var i=0; i<weekDays.length; i++){
    console.log(`${weekDays[i]}요일`);
}

// 짝수번째 인덱스만 처리할 경우는 for-each문 사용 불가능
// 즉 for-each문은 전체를 순회할 때 사용

for(var day of weekDays){
    console.log(`${day}요일`);
}


console.log();