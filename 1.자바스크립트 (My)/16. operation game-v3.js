alert('~~~~~~ 재미있는 사칙연산 게임 ~~~~~~~\n[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~]');

var leftNum;
var rightNum;
var result; 
var num = 1;
var correct = 0, fail=0;
var operator;
while(true){
    var random = Math.floor(Math.random()*3) + 1;
    do{
        leftNum = Math.floor(Math.random()*20) + 1;
        if(random===2){
            rightNum = Math.floor(Math.random()*(leftNum-1)) +1;
        } else {
            rightNum = Math.floor(Math.random()*20) + 1;
        }
    } while(leftNum===rightNum);


    switch(random){
        case 1:
            result = leftNum+rightNum;
            operator = '+';
            break;
        case 2:
            result = leftNum-rightNum;
            operator = '-';
            break;
        case 3:
            result = leftNum*rightNum;
            operator = 'x';
            break;
    }


    var answer = +prompt(`Q${num}. ${leftNum} ${operator} ${rightNum} = ??`);
    if(result ===answer){
        correct++;
        alert('정답입니다!');
    } else if(answer===0){
        alert(`게임을 종료합니다!\n---------------------\n정답횟수 : ${correct}회, 틀린횟수 : ${fail}회`);
        break;
    } else{
        fail++;
        alert('틀렸어요~!');
    }
    num++;
}