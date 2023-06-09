import gameData from "./gameData.js";
import {caseUp, caseDown, correctAnswer} from "./checkAnswer.js";



//정의부
export default function gameStart(iconCount){

    const $numbers = document.getElementById('numbers');

    // 구슬을 iconCount개 만들어야 함.
    const makeIcon = () => {
        // <div class = 'icon'>1</div>
        // <div class = 'icon'>2</div>
        // <div class = 'icon'>100</div>
        for(let n = 1; n <= iconCount; n++){
            const $icon = document.createElement('div');
            $icon.classList.add('icon');
            $icon.textContent = n;
            $icon.dataset.iconNumber = n ;
            $numbers.appendChild($icon);
        }
    };

    makeIcon();

    // 아이콘에 클릭 이벤트 부여하기
    $numbers.onclick = e => {

        //이벤트버블링 문제 해결하기, 빈 박스에 클릭하면 다 선택되는 현상을
        // 제거한다
        if(!e.target.matches('#numbers .icon')) return;

        //console.log(`${e.target.dataset.iconNumber}번구슬 클릭함!`);
        
        // 사용자가 클릭한 아이콘의 숫자를 answer에 저장
        gameData.answer = +e.target.dataset.iconNumber;
        console.log(gameData.secret);
        
        //정답 검증 함수
        checkNumber(e.target);
    
    };
}


// 정답을 검증하는 함수
function checkNumber($target){

    const {secret, answer} = gameData;

    // 실제 정답이랑 선택값을 비교
    if (secret === answer){ // 정답인 경우 
        correctAnswer($target);
        // console.log('정답!');
    } else if(secret > answer){ // up인 경우
        caseUp($target);
        // console.log('업!');
    } else { // down인 경우
        caseDown($target);
        // console.log('다운!');
    }
}
