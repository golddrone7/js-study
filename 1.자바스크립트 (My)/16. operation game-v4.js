
var leftNum;
var rightNum;
var result; 
var num = 1;
var correct = 0, fail=0;
var operator;
var balance;
var random;
var number;



alert('~~~~~~ 재미있는 사칙연산 게임 ~~~~~~~\n[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~]');

outer :while(true){
    balance = +prompt(`~~~~~ 난이도를 설정합니다.~~~~~
                [1. 상(1~100) | 2. 중 (1~50) | 3. 하 (1~20) ] `);
    switch(balance){
        case 1:
            number = 100;
            break outer;
        case 2: 
            number = 50;
            break outer;
        case 3:
            number = 20;
            break outer;
    }
}
while(true){
    random = Math.floor(Math.random()*3) + 1;
    do{
        leftNum = Math.floor(Math.random()*number) + 1;
        if(random===2){
            rightNum = Math.floor(Math.random()*(leftNum-1)) +1;
        } else {
            rightNum = Math.floor(Math.random()*number) + 1;
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


    var answer = +prompt(`Q${num++}. ${leftNum} ${operator} ${rightNum} = ??`);
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

}