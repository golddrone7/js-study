
var money = 3000;

// 중첩 삼항연산자는 가시성이 좋지 않음 중첩 if문 권장!!
var food = money >= 5000 ? '볶음밥' : (money >= 3000 ? '라면' : '굶음');

if(money >= 2000){
    food = '라면';
} else{
    food = '삼각김밥';
}
 
console.log(`선택한 음식 : ${food}`);
