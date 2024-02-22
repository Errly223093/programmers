function solution(nums) {
    // [3,1,2,3] 2
    // [3,3,3,2,2,4] 3
    // [3,3,3,2,2,2] 2
    // [4,4,4,2,1,1] 3

    let arr = [...new Set(nums)];
    return (arr.length > nums.length/2) ? nums.length/2 : arr.length;
}