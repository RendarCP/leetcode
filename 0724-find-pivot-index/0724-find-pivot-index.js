/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let totalSum = nums.reduce((acc, curr) => acc + curr, 0); // 배열의 총합
    let leftSum = 0; // 왼쪽 부분 합 초기화

    for (let i = 0; i < nums.length; i++) {
        // 피벗 조건 체크
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i; // 피벗 인덱스 발견
        }
        leftSum += nums[i]; // 왼쪽 부분 합에 현재 값 추가
    }

    return -1; // 피벗 인덱스가 없으면 -1 반환
};