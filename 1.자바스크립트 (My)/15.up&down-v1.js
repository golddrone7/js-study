alert('~~~~~~~~~ 재미있는 UP&DOWN 게임 ~~~~~~~~~');

var target = Math.floor(Math.random()*50) +1

outer :while(true){
    var answer = +prompt('[1 ~ 50 사이의 무작위 숫자를 맞춰보세요!!!]');

    if(answer === target){
        alert('딩동댕~~~~ !!');
        break outer;
    } else if(target > answer){
        alert('UP!!!!');
    } else{
        alert('DOWN!!!!');
    }
}