// 아이디를 입력하세요
// 존재하지 않는 회원입니다.
// 비밀번호를 입력하세요.
// 비밀번호가 틀렸습니다. (아이디로 돌아감)
// 박찬호님 환영합니다! (종료)

/* 요구사항
1. 사용자에게 계정을 입력받으세요
2. 입력된 계정이 존재하는 계쩡이 아니라면 '존재하지 않는 회원입니다'를 출력하세요
3. 계정이 존재한다면 비밀번호를 입력받으세요
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면 "xxx님 환영합니다!"를 출력하고 반복문을 탈출하세요
5. 비밀번호가 ㅏㄷ르다면 "비밀번호가 틀렸씁니다"를 출력하세요
6. 로그인이 성공할떄까지 반복하세용
*/


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

userInfo.userList.push({account: 'candy', password: '1234', username: '캔디'});

while(true){
    var user;
    var userID = prompt('아이디를 입력하세요');
    var userPass;
    var isLogin = false;
    for(var list of userInfo.userList){
        if(userID === list.account){
            user = list;
            isLogin = true;
            break;
        }
    }
    if(isLogin===false){
        alert('존재하지 않는 회원입니다.');
        continue;
    }

    userPass = prompt('비밀번호를 입력하세요.');
    if(userPass === user.password){
        alert(`${user['username']}님 환영합니다!`);
        break;
    } else{
        alert('비밀번호가 틀렸습니다.');
    }
}