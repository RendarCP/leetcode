/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
       // 초기 윈도우 합계 계산
    let currentSum = 0;
    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }

    // 최대 합계 초기화
    let maxSum = currentSum;

    // 슬라이딩 윈도우
    for (let i = k; i < nums.length; i++) {
        // 윈도우 업데이트: 다음 요소 추가, 첫 요소 제거
        currentSum += nums[i] - nums[i - k];
        // 최대 합계 갱신
        maxSum = Math.max(maxSum, currentSum);
    }

    // 최대 평균 반환
    return maxSum / k;
};