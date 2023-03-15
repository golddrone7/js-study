var num = parseInt(prompt('양의 정수를 입력!'));
var result = '';
while(num>=0){
    if(num%2==0){   
        result += '+';
    }
    else{
        result += '-';
    }
    num--;
}


alert(result);