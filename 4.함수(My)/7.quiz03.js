function calcBMI(h, w){
    hMeter = h/100;
    var bmi = w / (hMeter**2);

    if(bmi>=25.0){
        console.log('당신은 과체중입니다.');
    } else if(bmi<=18.5){
        console.log('당신은 저체중입니다.');
    } else{
        console.log('당신은 정상체중입니다.');
    }
    return bmi;
}

function round(myBmi, c){
    r = 10**c;
    myBmi*=r;
    myBmi = Math.round(myBmi);
    myBmi/=r;
    return myBmi;
}


var h = 178.4, w=78.2;
var myBmi = calcBMI(h, w);
console.log(`키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${round(myBmi,2)}입니다.`);