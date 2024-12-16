function increasingTriplet(nums: number[]): boolean {
    // 첫 번째와 두 번째로 작은 값을 추적하기 위한 변수 초기화
    // Infinity는 어떤 숫자보다도 큰 값을 의미
    let first = Infinity;
    let second = Infinity;

    // 배열의 모든 요소를 순회
    for (let num of nums) {
        if (num <= first) {
            // 현재 숫자가 first보다 작거나 같으면 first를 업데이트
            first = num;
        } else if (num <= second) {
            // 현재 숫자가 first보다 크고, second보다 작거나 같으면 second를 업데이트
            second = num;
        } else {
            // 현재 숫자가 first와 second보다 크면 증가하는 세 숫자를 찾은 것
            return true; // true 반환
        }
    }

    // 순회를 마쳐도 조건을 만족하는 세 숫자가 없다면 false 반환
    return false;
};