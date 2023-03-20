

//target의 인덱스를 반환한다, 찾지 못하면 -1을 리턴함
function indexOf(arr, target){
    var idx = 0;
    for(var num of arr){
        if(target === num){
            return idx;
        }
        idx++;
    }
    return -1;
}

var arr = [1,2,3,4,5];

// console.log(arr.indexOf(6));    
console.log(indexOf(arr, 3));

