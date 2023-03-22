const emp = {
    empName : '빡빡이',
    age : 29,
    hireDate : '2014-01-01',
    birthDay : '1995-12-31'
};
/*

const{empName, birthDay, age } = emp;
console.log(`${empName}님의 나이는 ${age}살이고 생일은 ${birthDay} 입니다. `);
*/

const{empName: en, birthDay: bd, age: a } = emp;
console.log(`${en}님의 나이는 ${a}살이고 생일은 ${bd} 입니다. `);
console.log('===================================');

const{birthDay, age, ...rest} = emp;
console.log(birthDay);
console.log(age);
console.log(rest);

// 객체 안전 복사 : 스프레드
// 복사하면서 추가 프로퍼티 만들래!
// 프로퍼티가 겹칠 경우 수정이 됨,,,,
// 기존의 데이터를 수정하고 싶으면 복사하면서 수정하자!,, 리엑트 기법
const copyEmp = {
    ...emp,
    address : '서울시',
    hobbies : ['놀고먹기', '낮잠'],
    empName : '망둥어'
};

console.log(copyEmp);