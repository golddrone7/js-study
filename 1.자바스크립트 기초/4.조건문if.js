
// 입력창을 뛰어주고 확인하면 입력값을 리턴해줌
// 스트링으로 반환됨 
// 단 +prompt를 할 경우 리턴 타입이 number로 됨
// var age = +prompt('당신의 나이는');
// alert(`내 나이: ${age + 1}살`);

/*  공식 : x이상 y이하의 정수 난수, 랜덤 슬라이딩, 이미지 바뀔 때 난수 공식 사용
 Math.floor(Math.random() * (y -x +1)) + x
*/
var age = Math.floor(Math.random()*100)+1; // 0~1미만
alert(`age: ${age}살`);

if(age > 19) {
    alert('성인입니다.');
    alert('주류를 구매할 수 있습니다');
} else {
    alert('미성년자입니다.');
}
