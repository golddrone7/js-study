// 함수 정의 - 만든다
var happyGreeting = name => {
    console.log(`${name}님 안녕하세요! 방가방가!`);
    console.log(`오늘도 즐거운 하루되세요~~~`);
}

happyGreeting('뽀로로');
// 1000줄 코딩
happyGreeting('철수');

// 함수 호출 - 사용한다


var line = ()=> console.log('================================');

for(var i=0; i<5; i++){
    line();
}

// 원의 넓이를 자주 구한다. 원주율 * 반지름 ^ 2
var r1 = 3.14159 * 5 * 5;
var r2 = 3.14159 * 15 * 15;
var r3 = 3.14159 * 20 * 20;

function calcAreaCircle(r){
    console.log('야!!');
    var PI = 3.14159265;
    var area = PI * r ** 2;
    return area;
}
var areaCircle = r => {
    console.log('야!!');
    var PI = 3.14159265;
    var area = PI * r ** 2;
    return area;
}
console.log(areaCircle(50));

var r1 = calcAreaCircle(5);
var r2 = calcAreaCircle(15);
var r3 = calcAreaCircle(20);



function User(name, age){
    this.name=name;
    this.age = age;
    this.view=function(){
        console.log('my name is ' + this.name );
        console.log('my age is ' + this.age);	
    }
} // 객체 생성

console.log(typeof User+"<br>"); // function
//인스턴스 생성
var ob1 = new User('pororo', 23);
var ob2 = new User('cron', 21);
console.log(typeof ob1); // object
ob1.view();
ob2.view();