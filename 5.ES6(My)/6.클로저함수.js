
// 자바스크립트의 함수는 함수를 리턴할 수 있음
/*
function calculator(n1, n2){
    function add(){
        return n1 + n2;
    }
    return add;
}
*/
// 클로저의 형태
// 함수의 표현식을 바꿔보자
// const calculator = (n1, n2) => ()=> n1 + n2;

/*
function calculator(n1, n2){
    return () => n1 + n2;
}


const zzz = calculator(10, 20);
console.log(typeof zzz);

const n = zzz();
console.log(`n : ${n}`);
*/

// let count = 0; // 카운팅 변수 (전역 변수)

// 카운트를 올리는 함수
// const increase = () => ++count;
// console.log(increase());
// console.log(increase());
// console.log(increase());

/*
const increase = () =>{
    let count = 0; // 지역변수
    return ++count;
}
console.log(increase());
console.log(increase());
console.log(increase());
*/

/*
const increaseClosure = ()=> {
    let count = 0; // 지역 변수
    return () => ++count;
};
// 도구를 준다, 지역변수, 카운팅 증가
// 전역변수 남발
// 상태유지가 필요한 변수들
// stateful <-> stateless

// 상태유지를 하지 않으면 메모리 관리에 용이
// 쿠키랑 캐시, 세션, 토큰을 통해 해결

const increase =  increaseClosure();
console.log(increase());
console.log(increase());
count = 999; // 변경 불가
console.log(increase());
*/

// 즉시 실행 함수 : 정의와 동시에 호출
const result = (function(n1, n2){
    return n1+n2;
})(5, 8); // 함수 정의를 소괄호를 묶고 바로 부름

console.log(result);





const increase = (()=> {
    let count = 0; // 지역 변수
    return () => ++count;
})();

console.log(increase());
console.log(increase());
console.log(increase());






