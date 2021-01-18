/*
  2016년 1월 1일은 금요일이다. 2016년 a월 b일은 무슨 요일일까?
  두 수 a, b를 입력받아 a월 b일이 무슨 요일인지 출력하는 getDayName 함수를 완성하라.

  요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT를 출력한다.
  예를 들어 a=5, b=24가 입력된다면 5월 24일은 화요일이므로 TUE를 반환한다.
*/

function getDayName(a, b) {
  const day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  let totalDay = b;

  for (let i = 1; i < a; i++) {
    switch (i) {
      case 1: case 3: case 5: case 7: case 8: case 10: case 12: totalDay += 31; break;
      case 4: case 6: case 9: case 11: totalDay += 30; break;
      case 2: totalDay += 29; break;
      default:
    }
  }
  return day[totalDay % 7];
}

console.log(getDayName(5, 24)); // TUE
console.log(getDayName(1, 22)); // FRI
console.log(getDayName(3, 12)); // SAT
console.log(getDayName(4, 24)); // SUN
console.log(getDayName(9, 24)); // SAT
console.log(getDayName(2, 9)); // TUE
