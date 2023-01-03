/**
 * # anchor 앵커
 * ^: 텍스트의 시작
 * $: 텍스트의 끝
 * \b: 단어의 경계 (거의 안 씀)
 */
const p = `ab abc
sonky740.github.io`;

const test = p.match(/^[a-z]{2}/g);
console.log('test', test);

const test2 = p.match(/.[a-z]{2,3}$/g);
console.log('test2', test2);

const test3 = /^\d{3}-\d{4}-\d{4}$/.test('제 번호는 010-1234-5678 입니다.');
console.log('test3', test3);

const test4 = /\d{3}-\d{4}-\d{4}/.test('제 번호는 010-1234-5678 입니다.');
console.log('test4', test4);
