/*
ex1)
III -> 3
1+1+1

ex2)
LVIII -> 58
50+5+1+1+1

ex3)
MCMXCIV -> 1994
1000(M)+900(CM)+90(XC)+4(IV)
CM: -100 + 1000
XC: -10 + 100
IV: -1 + 5

1. string을 순회
2. 매칭하는 숫자를 더함.
2-1. I || X || C => 뒤에 오는 숫자에 따라 부호 결정
  * I: 뒤에 V, X 인 경우 음수
  * X: 뒤에 L, C 인 경우 음수
  * C: 뒤에 D, M 인 경우 음수
  * 나머지 숫자는 모두 양수

Constraints
  * 1 <= s.length <= 15
  * s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
  * It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/

const romanMap: Object = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const canNegaticeNums: string[] = ["I", "X", "C"];

// 채점에 사용하는 함수
function romanToInt(s: string): number {
  const romanArray: string[] = [...s];
  return romanArray.reduce(
    (sum: number, romanNum: string, idx: number): number => {
      let integerNum: number = romanMap[romanNum];
      const nextNum: string | undefined = romanArray[idx + 1];
      if (nextNum && canNegaticeNums.includes(romanNum)) {
        switch (romanNum) {
          case "I": {
            if (nextNum === "V" || nextNum === "X") {
              integerNum *= -1;
            }
            break;
          }
          case "X": {
            if (nextNum === "L" || nextNum === "C") {
              integerNum *= -1;
            }
            break;
          }
          case "C": {
            if (nextNum === "D" || nextNum === "M") {
              integerNum *= -1;
            }
            break;
          }
        }
      }

      return sum + integerNum;
    },
    0
  );
}
