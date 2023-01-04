/**
 * # group
 * 여러개의 문자를 하나의 그룹으로 묶어서 처리할 수 있다. ( )
 * # capture
 * 그룹으로 묶은 문자열을 추출할 수 있다.
 * \1, \2, \3, ...: 그룹으로 묶은 문자열을 정규식에서 가져올 수 있다.
 * $1, $2, $3, ...: 그룹으로 묶은 문자열을 문자열에서 가져올 수 있다.
 *
 * ?: => 그룹으로 묶지만, capture 하지 않는다.
 */

const p = `import export ixport emport hellohello`;

const test = p.match(/(im|ex)port/g);
console.log('test', test);

const test2 = p.match(/(hello){2}/g);
console.log('test2', test2);

// 같은 문자가 반복되는 부분 찾기
const p2 = 'abcabcdde';

const test3 = p2.match(/([a-z])\1/g);
console.log('test3', test3);

const test4 = p2.replace(/.+([a-z])\1.+/, '반복된 문자는 $1입니다.');
console.log('test4', test4);

// url 모두 가져오기
const url = `http://google.com
https://google.com
google.com
ftp://google.com`;

const test5 = url.match(/(https:\/\/|http:\/\/|ftp:\/\/)?\w+\.\w+/g);
console.log('test5', test5);

// 모듈 분석
const p3 = `import React from 'react'
import format from 'date-fns/format'
import mylib from 'node_modules/mylib/dist/index.ts'`;

const test6 = p3.replace(/import\s(.+)\sfrom\s'(.+)'/g, '모듈 경로는 $2이고 모듈 이름은 $1입니다.');
console.log('test6', test6);