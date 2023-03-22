const userList = [{
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스']
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스']
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상']
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스']
  },
];

function alertUserInfo(wannaSay){
    for(const user of userList){
        wannaSay(user);
    }
}

alertUserInfo(u => console.log(`나는 ${u.userName}님이다!`));

const numbers =[10,20, 30, 40];

let total = 0;
numbers.forEach(n => total += n);
console.log(`총합: ${total}`);

function filter2Hobby(){
    const filteredArray = [];

    for(const user of userList){
        if(user.hobbys.length === 2){
            filteredArray.push(user);
        }
    }
    return filteredArray;
}

// 경기 사는 회원들만 
// 필터링해서 새로운 배열에 담아줘

function filterUserLivedInSeoul() {
    const filteredArray = [];

    for(const user of userList){
        if(user.address === '경기'){
            filteredArray.push(user);
        }
    }
    return filteredArray;
}

console.log(filterUserLivedInSeoul());

console.log('=========================================');

// 특정 필터조건에 의해 필터링하는 함수
function filter(condition){
    const filteredArray = [];

    for(const user of userList){
        if(condition(user)){
            filteredArray.push(user);
        }
    }
    return filteredArray;
}

console.log(
    filter(guest=>guest.address==='서울') // [{5},{5},{5}]  
    .map(seoul => ({                        // [{2},{2},{2}]
        name : seoul.userName,
        account : seoul.account
    })).forEach(u=>console.log(`이름과 아이디가 뭐니? ${u.name}, ${u.account}`)));    // [{2},{2},{2}]


console.log('클로저 연습하기!!!!!!!!!');

// let count = 0;

// const increase = () => ++count;
// console.log(increase());
// console.log(increase());
// count = 999;
// console.log(increase());



// const increase = (() => {
//     let count = 0;
//     return () => ++count;
// })();

// const decrease = (()=>{
//     let count = 0;
//     return ()=>--count;
// })();

// console.log(increase());
// console.log(increase());
// console.log(decrease());


// function counter(){
//     let count = 0;
//     const increase = () => ++count;
//     const decrease = () => --count;

//     return {
//         increase, decrease
//     };
// }
// const count = counter();


// const increase = count.increase;
// const decrease = count.decrease;

// console.log(increase());
// console.log(increase());
// console.log(increase());
// console.log(decrease());

const counter_ = (() => {
    let count = 0;
    return callback => count = callback(count);
})();

console.log(counter_(c=>++c));
console.log(counter_(c=>c+=3));
console.log(counter_(c=>c**=2));








