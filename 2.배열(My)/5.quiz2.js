var group = ['유노윤호','최강창민','영웅재중','믹키유천','시아준수'];

outer : while(true){
    var name = prompt(`현재 맴버: ${group}\n삭제할 이름을 입력하세요.`);
    if(group.includes(name)){
        var idx = group.indexOf(name);
        group.splice(idx, 1);
        alert(`삭제 완료!\n남은 맴버: [${group}]`);
        if(group.length===0){
            alert(`모든 멤버가 삭제되었습니다.`);
            break outer;
        }
    } else{
        alert(`${name}은(는) 잘못된 이름입니다.\n다시 입력하세요!`);
    }
}
