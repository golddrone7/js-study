/*
const increase = (() => {
    let count = 0;
    return () => ++count;
})();

const decrease = (() => {
    let count = 0;
    return () => --count;
})();


console.log(increase()); //1
console.log(increase()); //2
console.log(decrease()); //-1
*/
/*
function counterClosure(){
    let count = 0; // 카운트를 공유함!
    function increase(){
        return ++count;
    }
    function decrease(){
        return --count;
    }
    // ES6는 : 같은거면 : 쓸필요없음
    return { 
        increase, decrease
        // increase : increase,
        // decrease : decrease,
    };
}

const counter = counterClosure();

const increase = counter.increase;
const decrease = counter.decrease;

console.log(increase());
console.log(increase());
console.log(decrease());
*/


/*
const counter = (() => {
    let count = 0; // 카운트를 공유함!
    // ES6는 : 같은거면 : 쓸필요없음
    return { 
        increase : () => ++count, 
        decrease : () => --count
        // increase : increase,
        // decrease : decrease,
    };
})();
// 장바구니 수량 같은 것을 콜백 함수로 넣어줌!
const {increase, decrease} = counter;

console.log(increase());
console.log(increase());
console.log(decrease());
*/

/*
function counterWithCbClosure(){
    let count = 0;
    // callback을 리턴으로 쓰게 되면 지역변수가 하나 더 
    // 만들어져서 재할당을 하지 않으면 변수 업데이트가 되지 않음
    function process(callback) {
        return count=callback(count);
    }
    return process;
}
const counter_ = counterWithCbClosure();
console.log(counter_((c)=>++c));    // 1
console.log(counter_((c)=>c+=3));   // 4
console.log(counter_((c)=>c**=2));  // 16

// 클로저를 만들어진 라이브러리를 씀
// 그러므로 내용을 이해하기
*/




const counter_ = (() => {
    let count = 0;
    const process = (callback) => count=callback(count);  
    return process;
})();

console.log(counter_((c)=>++c));    // 1
console.log(counter_((c)=>c+=3));   // 4
console.log(counter_((c)=>c**=2));  // 16


