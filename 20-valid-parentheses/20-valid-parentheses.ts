function isValid(s: string): boolean {
  let startedBrackets: string[] = [];

  for (let i: number = 0; i < s.length; i++) {
    const character: string = s[i];
    if (character === "(" || character === "{" || character === "[") {
      startedBrackets.push(character);
    } else {
      const lastBracket: string = startedBrackets.pop();
      switch (character) {
        case ")": {
          if (lastBracket !== "(") {
            return false;
          }
          break;
        }
        case "}": {
          if (lastBracket !== "{") {
            return false;
          }
          break;
        }
        case "]": {
          if (lastBracket !== "[") {
            return false;
          }
          break;
        }
        default:
      }
    }
  }

  if (startedBrackets.length) {
    return false;
  }

  return true;
}
