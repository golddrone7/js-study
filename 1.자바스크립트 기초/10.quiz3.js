var height = +prompt(`정사각형을 그립니다\n높이는 얼마입니까?`);
var rectangle = '';

for(var i=0; i<height; i++){
    for(var j=0; j<height; j++){
        rectangle+='* ';
    }
    rectangle+='\n';    
}

alert(rectangle);


