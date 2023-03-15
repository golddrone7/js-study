var firstNumber =  parseInt(prompt('첫번째 숫자를 입력!'));
var secondNumber = parseInt(prompt('두번째 숫자를 입력!'));


if(firstNumber>secondNumber){
    var temp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = temp;
}
var total = 0;
for(var i = firstNumber ; i<=secondNumber; i++){
    total += firstNumber;
}

alert(`${firstNumber} ~ ${secondNumber}까지의 누적합 : ${total}`);

