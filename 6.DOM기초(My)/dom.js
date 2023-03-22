// <div id='box'>
//  <input id='abc' class='zzz' type='text'>
// </div>
// 태그를 보고 객체를 만듬
// 부모, 자식, 속성들 다 알 수 있음
let box, input;

box = {
    tagName : 'div',
    attribues : {
        id : 'box'
    },
    children: [input,],
    //parentNode : document.body
}

input = {
    tagName: 'input', 
    attribues: {
        id : 'abc',
        classList : ['zzz', 'xxx', 'vvv'],
        type : 'text'
    },
    parentNode : box
};

console.log(input.parentNode);