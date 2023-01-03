/**
 * # flag 플래그
 * i: ignore case 대소문자 구분 안 함
 * g: global 전역 - 한번 매칭이 되었더라도, 매칭을 끝내지 않고 계속 찾음.
 * m: multiline 여러 줄 - begin(^)과 end($)가 각 줄마다 적용 => ^, $는 각 줄의 처음과 끝으로 인식
 * ↓ 잘 안씀
 * u: unicode로 인식
 * y: sticky 주어진 위치에서부터 찾음
 * s: single line .이 줄바꿈 문자를 포함
 */

const p = `ab ABC
이번 달 총 결제 금액은 100,000원 입니다. 잔액은 20,000원 입니다.
`;

const test = p.match(/ab/gi);
console.log('test', test);

const test2 = p.match(/[\d,]+원/g);
console.log('test2', test2);

const log = `[로그] 123 사용자가 로그인함
[로그] 서버 결제 트랜잭션 에러
[로그] Timeout 에러`;

const test3 = log.match(/^\[로그\]\s.+에러$/gm);
console.log('test3', test3);
