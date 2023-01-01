// # quantifier 수량자 (바로 앞에 있는 문자를 n번 반복)
// {n} n번 반복
// {n,} n번 이상 반복
// {n,m} n번 이상 m번 이하 반복
// * 0번 이상 반복 (있어도 되고 없어도 된다.) 클레이니 스타
// + 1번 이상 반복 (있어야 한다.) 클레이니 플러스
// ? 있어도 되고 없어도 된다. (있으면 1번만) ex) 전화번호에서 씀 010-1234-5678

const p = `
010-0101-0101
01001010101
010--0101--0101
02-0101-0101
031-010-0101
asdfasdwwwfelkawf
<p>asdfasdfadsfasdf</p>
dev.evan.com?qwer
`;

const test = p.match(/\d{2,3}-?\d{3,4}-?\d{4}/g);
console.log('test', test);

const test2 = p.match(/(.)\1{2}/g); // \1은 첫번째 그룹을 의미 (.)\1{2}는 같은 문자가 3번 연속으로 반복되는 문자열을 찾는다.
console.log('test2', test2);

const test3 = p.match(/<p>.*<\/p>/g);
console.log('test3', test3);

const test4 = p.match(/\w+\.\w+\.\w+/g);
console.log('test4', test4);
