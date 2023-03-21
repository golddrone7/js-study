
const TODAY_SALE_RATE = 0.2;

const PI=3.14159265;

// PI = 5.5; // TypeError: Assignment to constant variable.
console.log(PI);

// 객체를 설계할땐 let보다 const로 객체의 변경을 막는다

const kim = {
    name : '김철수',
    age: 25
};

kim.name = '김칠리';

// kim = {
//     name : '김철수',
//     age: 25
// };


const a = 10;
const b = 20;
for (let i = 0; i<5; i++){

}