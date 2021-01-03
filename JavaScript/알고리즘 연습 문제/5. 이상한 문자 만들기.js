/*
toWeirdCase함수는 문자열을 인수로 전달받는다.

문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라.

예를 들어 s가 ‘hello world’라면 첫 번째 단어는 ‘HeLlO’, 두 번째 단어는 ‘WoRlD’로 바꿔 ‘HeLlO WoRlD’를 리턴한다.

주의) 문자열 전체의 짝/홀수 인덱스가 아니라 단어(공백을 기준)별로 짝/홀수 인덱스를 판단한다.
*/

// 결과값에 띄워쓰기가 반영되지 않음
const removeSpace = str => [...str].filter(char => char !== ' ');

function toWeirdCase1(str) {
  const strArr = removeSpace(str);
  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 === 0) strArr[i] = strArr[i].toUpperCase();
    else strArr[i] = strArr[i].toLowerCase();
  }

  return strArr.join('');
}

// 결과값에 띄워쓰기까지 반영
function toWeirdCase2(str) {
  const strArr = str.split(' ');
  let result = '';
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr[i].length; j++) {
      if (j % 2 === 0) result += strArr[i][j].toUpperCase();
      else result += strArr[i][j].toLowerCase();
    }
    result += ' ';
  }
  return result;
}

console.log(toWeirdCase1('hello world'));    // 'HeLlOwOrLd'
console.log(toWeirdCase1('my name is lee')); // 'MyNaMeIsLeE'
console.log(toWeirdCase1('I am IRONMAN'));   // 'IaMiRoNmAn'

console.log(toWeirdCase2('hello world'));    // 'HeLlO WoRlD'
console.log(toWeirdCase2('my name is lee')); // 'My NaMe Is LeE '
console.log(toWeirdCase2('I am IRONMAN'));   // 'I Am IrOnMaN '
