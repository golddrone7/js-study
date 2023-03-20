

// 배열의 특정 데이터의 인덱스를 구하는 함수
function myIndexOf(arr, element){
    for(var i = 0; i< arr.length; i++){
        if(element === arr[i]){
            return i;
        }
    }
    return -1;
}


var foodList = ['짜장면', '탕수육', '고추잡채', '족발'];

var idx = myIndexOf(foodList, '탕수육'); // idx : 1


// 배열의 특정 데이터가 있는지 여부 
function myInclude(arr, element){
    return myIndexOf(arr, element) !== -1;
}

var flag = myInclude(foodList, '족발');
console.log(`flag: ${flag}`);