function calcNumbersTotalAndAverage(...numbers){
    var tot = 0;
    for(var num of numbers){
        tot += num;
    }
    return {
        total : tot ,
        avg : tot/numbers.length,
    };
}

var result = calcNumbersTotalAndAverage(90, 80, 100, 90); // 360, 90 리턴
console.log(`총합:${result.total}, 평균:${result.avg}`);