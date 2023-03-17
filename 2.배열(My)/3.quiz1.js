// 수 '그만'~

// 10 하면 입력 20 050 100 300 그만

var numbers = [];

while(true){
    var number = prompt(`숫자를 입력하세요. \n 그만두려면 '그만'이라고 입력하세요!`);
    if(number==='그만')
        break;
    numbers.push(Number(number));
}
var sum=0;
for(var i of numbers){
    sum+=i;
}

alert(`입력한 숫자 목록 [${numbers}]\n입력한 숫자 총합: ${sum}`);

