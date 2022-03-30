function isValid(s: string): boolean {
  let startedBracket: string[] = [];
  
  for(let i:number = 0; i < s.length; i++) {
    const character: string = s[i];
    if(character === '(' || character === '{' || character === '[') {
      startedBracket.push(character);
    } else {
      const lastBracket: string = startedBracket.pop();
      switch(character) {
        case ')': {
          if(lastBracket !== '(') {
            return false;
          }
          break;
        }
        case '}': {
          if(lastBracket !== '{') {
            return false;
          }
          break;
        }
        case ']': {
          if(lastBracket !== '[') {
            return false;
          }
          break;
        }
        default:
      }
    }
  }
  
  if(startedBracket.length) {
    return false;
  }

  return true;
};