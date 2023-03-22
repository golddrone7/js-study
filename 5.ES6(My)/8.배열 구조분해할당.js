

const userNames = ['김철수', '김강찬', '박영희'];

const [kim, kang, park] = userNames;

console.log(kim);
console.log(kang);
console.log(park);


const [firstObj] = [{ id : 1 }, { id : 2 }, { id : 3}]
                .filter(obj => obj.id >= 2);
console.log(firstObj);


// 변수 교환하기
let first = 10, second = 20;
[first, second] = [second, first];
console.log(first);
console.log(second);

// 앞에 2개는 변수에 각각 넣고 나머지는 다시 배열로 묶고싶다
const numbers = [1,3,5,7,9,11];
const [one, three, ...others] = numbers;


// log
console.log('=======================');
const foods = ['감튀', 'DPQC, '징거버거'];

const copyFoods = [...foods]; //  실제 데이터 복사
