function twoSum(nums: number[], target: number, startIdx: number = 0): number[] {
  let prevIdx: number = 0;
  for(let idx:number = 1; idx < nums.length; idx++) {
    if(nums[prevIdx] + nums[idx] === target) {
      return [startIdx, startIdx + idx];
    }
  }
  nums.shift();
  return twoSum(nums, target, startIdx + 1);
};