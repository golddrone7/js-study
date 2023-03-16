var flag = confirm('게임을 다시 하실래요?');
alert(flag);
alert('~~~~~~~~~ 재미있는 UP&DOWN 게임 ~~~~~~~~~');

var up =100;
var down = 1;
var target = Math.floor(Math.random()*up) +1

var initChanceA;
var chance;

outer :while(true){
    var balance = +prompt('[난이도를 설정하세요 ~~~!]\n[ 1. 상 (기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번) ]');
    switch(balance){
        case 1:
            chance = 3;
            break outer;
        case 2:
            chance = 6;
            break outer;
        case 3:
            chance = 10;
            break outer;
        default:
            alert('잘못된 난이도에요 다시 설정해주세요!');
    }
}

initChanceA = chance;

outer :while(true){
    var answer = +prompt(`[${down} ~ ${up} 사이의 무작위 숫자를 ${chance}번 안에 맞춰보세요!!!]`);

    if(answer>up || answer<down){
        continue;
    }
    if(answer === target){
        alert(`딩동댕~~~~ !! ${initChanceA-chance}번 만에 맞췄네 ㅋㅋ`);
        break outer;
    } else if(target > answer){
        down = answer+1;
        chance--;
        alert(`UP!!!!\n기회가 ${chance}번 남았습니다.`);
    } else {
        up = answer-1;
        chance--;
        alert(`DOWN!!!!\n기회가 ${chance}번 남았습니다.`);
    }

    if(chance===0){
        alert(`기회를 모두 소진했습니다. GAME OVER!! 정답은 ${target} ㅋㅋ`);
        break outer;
    }
}