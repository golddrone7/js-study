// 변수 정의, 함수 정의만 단독으로 외부함수 호출 x


let x = 'foo';
// console.log(x); , 통합할때는 다 지움

function add(n1, n2){
    return n1+n2;
}



// 여기서 정의된 변수와 함수를 내보내기
export { x, add};