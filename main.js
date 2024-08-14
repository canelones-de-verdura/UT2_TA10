function getSum(nums) {
    return nums.reduce((sum, current_num) => (sum += current_num));
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const nums2 = [2, 4, 6];
const nums3 = [10, 20, 30, 40];
console.log(getSum(nums));
console.log(getSum(nums2));
console.log(getSum(nums3));
