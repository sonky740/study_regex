// # 문자의 집합으로 문자열 속에서 내가 원하는 패턴 찾기
// []는 문자열의 집합을 의미한다.
// [abc]는 a, b, c 중 하나의 문자를 의미한다.
// [^abc]는 a, b, c가 아닌 문자를 의미한다.
const p = `
  삼성카드(1234)승인 손*연 3,700원
  신한카드(1234)승인 손*연 3,700원
  일성카드(1234)승인 손*연 3,700원
  이성카드(1234)승인 손*연 3,700원
`;

const test = p.match(/[^삼]성카드/g);
console.log(test);

const test2 = p.match(/[삼신][한성]카드/g);
console.log(test2);
