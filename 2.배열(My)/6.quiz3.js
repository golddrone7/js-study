var group = ['유노윤호','최강창민','영웅재중','믹키유천','시아준수'];

outer : while(true){
    var name = prompt(`현재 맴버: ${group}\n수정할 이름을 입력하세요.`);
    if(group.includes(name)){
        var idx = group.indexOf(name);
        var newName = prompt(`새로운 멤버 이름을 입력하세요.`);
        group.splice(idx, 1, newName);
        alert(`수정 완료!\n현재 맴버: [${group}]`);
        break outer;
    } else{
        alert(`${name}은(는) 잘못된 이름입니다.\n다시 입력하세요!`);
    }
}
