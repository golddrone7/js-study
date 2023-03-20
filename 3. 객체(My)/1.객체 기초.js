// var member = {
//     name : '홍길동',
//     age : 24,
//     good : function(){
//         console.log('hello world');
//     }
// };

// member.good();
// console.log(member.name);
// console.log(member.age);



// 객체 리터럴(값)
var dog = {
    //프로퍼티 작성
    name: '뽀삐',
    kind: '진돗개',
    age: 3,
    // 'for waiting' : 11, // 문자열 처리시 뛰어쓰기 가능(키)
    injection: true,
    favorite : ['산책', '간식'],
    hate: null,
    playWithChild: function(){},

    멍멍짖기: function(){},
    개사료먹기: function(){},
};

var 사람 = {
    대화하기 : function(){},
    지식학습하기:function(){},
};


var cat = {
    //프로퍼티!!!
    name: '콩순이',
    kind: '블랙러시안',
    age: 2,
    injection: true,
    favorite : ['낮잠자기', '방어지럽히기'],
};

console.log(typeof dog); // object
console.log(typeof cat); // object

// 객체에 저장된 데이터 참조
console.log(dog.name); // . ~의   강아지의 이름
console.log(cat.age);
console.log(cat.favorite);
console.log(dog.favorite[0]); 

dog.favorite.push('꼬리 흔들기');
console.log(dog);

// cat.kind.splice(1,1); // 안됨, 타입이 안맞는 함수기 때문
dog.favorite.slice(1).splice(1, 1);

// 프로퍼티 참조 2
console.log('=========================');
console.log(dog.injection);
// 결과는 같지만, 변수에 키를 저장할 때 있음, 예외사항
console.log(dog['injection']); 

// key를 변수에 저장
var fv = 'favorite';
console.log(cat[fv]);


// 프로퍼티 값 수정
dog.age = 4;
cat.favorite.splice(1, 0, '실뭉치');

dog['injection'] = false;

console.log(cat);

// 프로퍼티 동적 추가
cat.owner = '김철수'; //추가
cat.owner = '박영희'; // 수정
console.log(cat);

// 프로퍼티 삭제
delete cat.owner;
console.log(cat);

console.log('============================');

// 프로퍼티 존재 유무 확인
// key를 반드시 문자열로 표기해야함.
var ageFlag = 'age' in cat;
console.log(ageFlag);

var m = 'master';
// master라는 프로퍼티가 없으면 추가해라
if(!(m in cat)){
    cat[m] = '김또또';
}
console.log(cat);

console.log('==============================');

// 객체를 순회하는 반복문
// key를 반복해서 추출해줌
for(var k in dog){
    // console.log(typeof k); // string
    console.log(dog[k]);
    // console.log(dog.k)는 에러!!! 
    // k는 string type 이기 때문에 대괄호 참조[] 를 쓰자
}

// 객체의 중첩구조
// 예시 : 게시판

var articles = {
    totalCount: 22586,
    admin: 'abc1234',
    page: 2558,
    articleList : [
        {
            bno:3,
            title:'가위바위보',
            writer : '김짱꼠뽀',
            content : '다덤벼',
            viewCount:23,
            recomm : 5,
            regDate:'21-12-07',
        },
        {
            bno:2,
            title:'노는게',
            writer : '뽀로로',
            content : '제일조와~~~',
            viewCount:23,
            recomm : 5,
            regDate:'21-12-07',
        },
        {
            bno:1,  // 글번호
            title:'가위바위보', // 글제목
            writer : '김짱꼠뽀', // 글쓴이
            content : '다덤벼', // 내용
            viewCount:23,
            recomm : 5,
            regDate:'21-12-07',
        }

    ]
};

console.log(articles.totalCount);
// console.log(articles.articleList);
console.log(articles.articleList[1]);
// articleList 는 배열, articleList[1]은 객체 매우 중요!!
console.log(articles.articleList[1].writer);

// 데이터 타입에 따라 함수가 다르니까 잘 알아두자
// 쓰는 빈도수가 많으면 변수에 넣어서 짧게 쓰자
var bbs = articles.articleList;
bbs[0].writer;

for(var x in articles){ // 키의 갯수만큼 회전
    
}
var cnt= 0;
for(var x in articles.articleList[0]){ // 키의 갯수만큼 회전
    console.log(`${++cnt}!!`);
    
}
for(var y of bbs){ // 데이터의 갯수만큼 회전
    
}