alert('~~~~~~ 재미있는 사칙연산 게임 ~~~~~~~\n[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~]');

var num = 1;

while(true){
    var leftNum = Math.floor(Math.random()*20) + 1;
    var rightNum = Math.floor(Math.random()*20) + 1;
    var result = leftNum + rightNum;
    var answer = +prompt(`Q${num}. ${leftNum} + ${rightNum} = ??`);
    if(result ===answer){
        alert('정답입니다!');
    } else if(answer===0){
        alert('게임을 종료합니다!');
        break;
    } else{
        alert('틀렸어요~!');
    }
    num++;
}