function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      const Unfinished = participant[i];
      return Unfinished;
    }
  }
}

// 첫번째 마라톤
const participant1 = ['leo', 'kiki', 'eden'];
const completion1 = ['eden', 'kiki'];

// 두번째 마라톤
const participant2 = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
const completion2 = ['josipa', 'filipa', 'marina', 'nikola'];

// 세번째 마라톤(동명이인의 선수가 존재함)
const participant3 = ['mislav', 'stanko', 'mislav', 'ana'];
const completion3 = ['stanko', 'ana', 'mislav'];

console.log(solution(participant1, completion1)); // leo
console.log(solution(participant2, completion2)); // vinko
console.log(solution(participant3, completion3)); // mislav

// 다음에 sort() 메서드를 사용하지 않고 결과를 도출해보기
