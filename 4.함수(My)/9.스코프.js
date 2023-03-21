

var x = 10; // 전역 변수 : 프로그램의 전체영역에서 사용가능

function foo(){
    console.log(x);
    var y = 20 + x; // 지역 변수 : 해당 함수 안에서만 사용가능
    console.log(y);
}

foo();