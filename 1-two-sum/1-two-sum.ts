function twoSum(nums: number[], target: number, startIdx: number = 0): number[] {
  for(let idx:number = 1; idx < nums.length; idx++) {
    if(nums[0] + nums[idx] === target) {
      return [startIdx, startIdx + idx];
    }
  }
  nums.shift();
  return twoSum(nums, target, startIdx + 1);
};