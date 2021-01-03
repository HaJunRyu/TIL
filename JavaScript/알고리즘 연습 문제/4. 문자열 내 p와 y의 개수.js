// numPY함수는 대문자와 소문자가 섞여있는 문자열 str을 인수로 전달받는다.
// str에 존재하는 ‘p’의 개수와 ‘y’의 갯수를 비교해 같으면 true, 다르면 false를 리턴하도록 함수를 완성하라.
// 대소문자를 구별하지 않으며 ‘p’, ‘y’ 모두 하나도 없는 경우는 항상 true를 리턴한다.

// 예를 들어 s가 ‘pPoooyY’면 true를 리턴하고 ‘Pyy’라면 false를 리턴한다.

function numPY(str = '') {
  const upperString = str.toUpperCase();
  let pCount = 0;
  let yCount = 0;
  for (let i = 0; i < upperString.length; i++) {
    if (upperString[i] === 'P') pCount++;
    else if (upperString[i] === 'Y') yCount++;
  }
  if (pCount === yCount) return true;
  return false;
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy'));     // false
console.log(numPY('ab'));      // true
console.log(numPY(''));        // true
console.log(numPY());          // true
console.log(numPY('I Like Pizza!')); // false
