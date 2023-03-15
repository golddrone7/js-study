

// var senetence = '<ul>\nt\t<li>\n\t\t<a>add</a>';
var senetence = ` 
<ul>
    <li>
        <a>hhhh</a>
    </li>
</ul>
`
console.log(senetence);

var month = 5;
var day = 5;
var anniversary = '어린이날';

// var message = month + '월 '
//             + day + '일은 '
            // + anniversary + '입니다.'
var message = `${month}월 ${day}일은 ${anniversary}`  

console.log(message)

var flag = false;
console.log(typeof flag);


var userAge = 5;
userAge = null;

console.log(typeof userAge)