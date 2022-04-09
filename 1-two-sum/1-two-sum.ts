function twoSum(nums: number[], target: number): number[] {
  const numMap: { [num: number]: number } = {};
  numMap[nums[0]] = 0;

  for (let idx: number = 1; idx < nums.length; idx++) {
    const num = nums[idx];
    const firstIdx: number | undefined = numMap[target - num];
    if (firstIdx !== undefined) {
      return [firstIdx, idx];
    }
    numMap[num] = idx;
  }
}
