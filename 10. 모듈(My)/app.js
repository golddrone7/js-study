// 외부 js 불러오기
import * as foo from './foo.js'; //
import * as bar from './bar.js'; // 다 갖고 오고 별칭을 담

// 메인 실행 파일 app.js
// 실행 코드만 입력 : 함수 호출
// 함수 정의, 클래스 정의, 변수정의 xxx

// 함수 호출만 딱하기
// bar.js 파일 (조각파일)
// foo.js 파일 (조각파일)

console.log(foo.add(10, 20));
console.log(`x1 : ${bar.x}`);
console.log(`x2 : ${foo.x}`);