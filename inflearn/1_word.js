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

const test = p.match(/[^삼]성카드/g); // not
console.log('test', test);

const test2 = p.match(/[삼신][한성]카드/g); // or
console.log('test2', test2);

const test3 = p.match(/..../g); // any
console.log('test3', test3);

// \d : 숫자(digit)와 매치, [0-9]와 동일한 표현식이다.
// \D : 숫자(digit)가 아닌 것과 매치, [^0-9]와 동일한 표현식이다.
// \w : 문자+숫자(word === alphanumeric)와 매치, [a-zA-Z0-9_]와 동일한 표현식이다. // 한글 안됨.
// \W : 문자+숫자(word === alphanumeric)가 아닌 문자와 매치, [^a-zA-Z0-9_]와 동일한 표현식이다. // 한글 안됨.
// \s : 공백(whitespace)과 매치, [ \t\n\r\f\v]와 동일한 표현식이다. // space, tab, line break
// \S : 공백(whitespace)이 아닌 것과 매치, [^ \t\n\r\f\v]와 동일한 표현식이다. // space, tab, line break
const p2 = `
010-1234-5678
010-1234-_678
abc-defg-hijk
   -    -    
			-				-				
`;

const test4 = p2.match(/\d\d\d-\d\d\d\d-\d\d\d\d/g); // 숫자
console.log('test4', test4);

const test5 = p2.match(/\D\D\D-\D\D\D\D-\D\D\D\D/g); // 숫자가 아닌 문자
console.log('test5', test5);

const test6 = p2.match(/\w\w\w-\w\w\w\w-\w\w\w\w/g); // 문자+숫자
console.log('test6', test6);

const test7 = p2.match(/\W\W\W-\W\W\W\W-\W\W\W\W/g); // 문자+숫자가 아닌 문자
console.log('test7', test7);

const test8 = p2.match(/\s\s\s-\s\s\s\s-\s\s\s\s/g); // 공백
console.log('test8', test8);

// 문자 범위 지정하기
// [a-z] : a부터 z까지의 소문자 범위를 의미한다.
// [a-zA-Z] : a부터 Z까지의 소문자, 대문자 범위를 의미한다. (중간에 특수문자가 포함되어 따로 표시, ASCII 코드 참조)
// [0-9] : 0부터 9까지의 문자 범위를 의미한다.
// [가-힣] : 가부터 힣까지의 문자 범위를 의미한다.
const p3 = `
010-1234-5678
010-1234-_678
abc-defg-hijkAZ
안녕하세요
`;

const test9 = p3.match(/[가-힣]/g); // 한글
console.log('test9', test9);

const test10 = p3.match(/[a-z]/g); // 소문자
console.log('test10', test10);

const test11 = p3.match(/[a-zA-Z]/g); // 소문자, 대문자
console.log('test11', test11);