/*
  오늘을 기준으로 YYYY-MM-DD 형식의 문자열을 요소로 갖는 배열로 일주일 간의 날짜를 구하는 함수를 완성하라.
  단, 함수가 반환하는 배열은 일요일부터 시작해서 토요일까지 구성한다.
*/

// Array 함수를 활용한 풀이
function getCurrentWeek1() {
  const today = new Date('2020/04/21/10:00:00');

  let result = Array.from({ length: 7 }).fill('');

  today.setDate(today.getDate() - today.getDay());

  result = result.map((_, i) => {
    if (i !== 0) today.setDate(today.getDate() + 1);
    return today.toISOString().substring(0, 10);
  });
  return result;
}

// 처음 풀이
function getCurrentWeek2() {
  const today = new Date('2021/01/22/01:22:00');

  const result = [];

  today.setDate(today.getDate() - today.getDay());

  for (let i = 0; i < 7; i++) {
    today.setDate(today.getDate() + 1);
    result.push(today.toISOString().substring(0, 10));
  }
  return result;
}

console.log(getCurrentWeek1());
/*
오늘이 2020-04-21인 경우,
[
  '2020-04-19',
  '2020-04-20',
  '2020-04-21',
  '2020-04-22',
  '2020-04-23',
  '2020-04-24',
  '2020-04-25'
]
*/
console.log(getCurrentWeek2());
/*
오늘이 2021-01-22인 경우,
[
  '2021-01-17',
  '2021-01-18',
  '2021-01-19',
  '2021-01-20',
  '2021-01-21',
  '2021-01-22',
  '2021-01-23'
]
*/
