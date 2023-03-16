var name = prompt('이름이 무엇인가??', '감자바');
var isTure = confirm(`${name}이 맞더냐?`);
if(isTure)
    alert(name);
else
    alert('아닙니다');
    