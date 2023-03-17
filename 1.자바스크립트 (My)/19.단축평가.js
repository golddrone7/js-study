

//  OR 연산 : 첫번째 truthy를 반환
console.log('hello' || 'world');
console.log(0 || '안녕');

// AND 연산 : 첫번째 falsy를 반환, 마지막은 상관 없음
console.log('======================');
console.log('Hello' && 'WORLD');
console.log(null && '메롱');

/*
    <h1>안녕하세요 우리 홈페이지에 오신걸 환영합니다.</h1>
    isLogin() && <h2>xxx님 안녕하세요!</h2>
    로그인을 하면 h2태그가 나오지만
    로그인을 하지 않으면 isLogin()만 호출함 


    쿠폰 당첨되면 쿠폰 보내줌 
    쿠폰당첨플래그 && sendCoupon()

    나의 아티클이면 수정버튼이 보임 
    isMineArticle() && <button>수정</button>
    리액트에서 많이 사용함
*/