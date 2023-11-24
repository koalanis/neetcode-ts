export function containsDuplicate(nums: number[]): boolean {
    const map = new Set<number>();
    for(let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) return true;
      map.add(nums[i]);
    } 
    return false;
};