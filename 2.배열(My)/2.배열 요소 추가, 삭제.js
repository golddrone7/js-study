

var pets = ['멍멍이', '야옹이', '쩝쩝이'];

console.log(pets);

// 좋은 방법이 아님, 내부 알고리즘 문제
// pets[pets.length] = '징징이';


// 연결리스트 방식으로 추가, 성능적으로 좋음!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
pets.push('징징이'); 
pets.push('어흥이'); 
// ...은 나열할 수 있음 10개든 100개든
var newLength = pets.push('거부기', '콩콩이');

console.log(pets);
console.log(newLength);


// 맨 끝 데이터 삭제
pets.pop();
console.log(pets);


// shift랑 unshift는 성능 이슈가 있음
// shift() : 배열의 맨 첫번째 요소 제거
pets.shift();

console.log(pets);

// unshift(...items) : 배열에 맨 첫번째 데이터 추가
pets.unshift('짝짝이');
console.log(pets);