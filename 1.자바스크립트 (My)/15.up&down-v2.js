alert('~~~~~~~~~ 재미있는 UP&DOWN 게임 ~~~~~~~~~');

var target = Math.floor(Math.random()*50) +1
var chance = 5;
outer :while(true){
    var answer = +prompt('[1 ~ 50 사이의 무작위 숫자를 5번 안에 맞춰보세요!!!]');

    if(answer>50 || answer<1){
        continue;
    }
    if(answer === target){
        alert('딩동댕~~~~ !!');
        break outer;
    } else if(target > answer){
        chance--;
        alert(`UP!!!!\n기회가 ${chance}번 남았습니다.`);
    } else {
        chance--;
        alert(`DOWN!!!!\n기회가 ${chance}번 남았습니다.`);
    }

    if(chance===0){
        alert(`기회를 모두 소진했습니다. GAME OVER!!`);
        break outer;
    }
}