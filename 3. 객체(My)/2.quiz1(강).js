var userInfo ={
    userList:[
        {
            account: 'kim1234',
            password: 'kkk1234',
            username: '김두한'
        },
        {
            account: 'park9876',
            password: 'ppp9999',
            username: '박찬호'
        },
        {
            account: 'hong7766',
            password: 'hhh1234',
            username: '홍길동'
        },

    ]
}



// 회원목록 배열
var userList = userInfo.userList;
while(true){
    // 계정 입력받기
    var inputAccount = prompt('아이디를 입력하세요!');
    // var inputAccount = 'kim1234';
    // 회원목록을 반복하여 입력한 계정명과 일치하는 객체를 탐색
    var foundUser = null; // 로그인 시도하는 회원의 정보객체

    for (var user of userList){
        if(inputAccount === user.account){
            // console.log('회원가입 했다!');
            foundUser= user;
            break;
        }
    }
    // foundUser에는 로그인시도하는 회원의 정보가 들어있다.
    // 로그인시도회원이 잘못된 계정을 입력하면 null로 유지되어있음
    // console.log(foundUser);

    if(foundUser != null){
        // console.log('일단 회원가입은 했구나 너');

        // 비밀번호 검증
        // 일던 써봐바
        var inputPassword = prompt('비밀번호 입력해');
        if(inputPassword === foundUser.password){
            console.log(`${foundUser.username}님 환영합니다~~!`);
            break;
        }else{
            console.log('비밀번호가 틀렸습니다.');
        }
    } else{
        console.log('존재하지 않는 회원입니다.');
    }
}