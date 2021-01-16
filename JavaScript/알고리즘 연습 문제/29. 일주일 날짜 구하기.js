/*
  오늘을 기준으로 YYYY-MM-DD 형식의 문자열을 요소로 갖는 배열로 일주일 간의 날짜를 구하는 함수를 완성하라.
  단, 함수가 반환하는 배열은 일요일부터 시작해서 토요일까지 구성한다.
*/

function getCurrentWeek() {
  const today = new Date();

  today.setDate(today.getDate() - today.getDay());

  return Array.from({ length: 7 }, (_, i) => {
    if (i !== 0) today.setDate(today.getDate() + 1);
    return today.toISOString().substring(0, 10);
  });
}

console.log(getCurrentWeek());
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

console.log(getCurrentWeek());
/*
현재 날짜(2021년 1월 16일) 기준
[
  '2021-01-10',
  '2021-01-11',
  '2021-01-12',
  '2021-01-13',
  '2021-01-14',
  '2021-01-15',
  '2021-01-16'
]
*/
