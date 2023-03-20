

var foodList = ['닭꼬치', '볶음밥', '짜장면', '족발'];

var count = 0;
var target = '닭꼬치';
// indexOf : 배열의 특정 데이터가 몇번 인덱스에 있는지 탐색
// 함수를 짜는 방법을 알고 쓰는 것이 바람직
var index = foodList.indexOf(target);
console.log(`찾은 인덱스 : ${index}`);

// for (var food of foodList){
//     if(food === target){
//         break;
//     }
//     count++;
// }

// console.log(`찾은 인덱스 : ${count}`);



// slice() : 배열을 일정부분 잘라냄. 사본배열을 반환
foodList.push('오뎅', '순대국밥');

console.log(foodList);
// 메서드는 원본을 건드리지 않는 방향으로 감
// 1번부터 4번 미만까지 추출
var slicedFoods= foodList.slice(1,4);
console.log(slicedFoods);
console.log(foodList);

// 2번부터 끝까지 추출
var slicedFood2 = foodList.slice(2); 
console.log(slicedFood2);
// 원본배열을 그대로 복사
var slicedFood3 = foodList.slice();
console.log(slicedFood3);

// reverse() : 배열 역순으로 배치, 원본이 변함
console.log('======================');

var array = [10, 20, 30, 40, 50];

var copyNums = array.slice();
copyNums.reverse();
console.log(copyNums);

for(var i=0; i<array.length/2; i++){
    var t = array[i];
    array[i] = array[array.length-1];
    array[array.length-1] = array[i];
}



// concat() : 배열 2개를 연결
console.log('============================');

var arr1 = [10, 20, 30];
var arr2 = [100, 900, 700, 1000];

var concatedArr = arr1.concat(arr2);
console.log(concatedArr);

// includes() : 배열의 특정 데이터가 존재하는지 확인
console.log('========================');
var resultFlag = foodList.includes('닭꼬치');
console.log(resultFlag);

// splice() : 배열의 특정요소 제거, 삽입
console.log('========================');
console.log(foodList);
// 1번 인덱스로부터 2개로 지워달라, 원본에 변경
foodList.splice(1, 2);
console.log(foodList);

foodList.splice(0, 1, '보쌈');
console.log(foodList);

// 1번에 마라탕 삽입
foodList.splice(1,0, '마라탕');
console.log(foodList);

foodList.splice(2, 0, '아이스크림', '떡볶이');
console.log(foodList);

// 2번부터 끝까지 다지워
foodList.splice(2);
console.log(foodList);




