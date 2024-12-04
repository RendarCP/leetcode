function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    // 현재 사탕의 최대값을 찾습니다.
    const maxCandies = Math.max(...candies);
    
    // 각 아이에 대해 결과를 계산합니다.
    return candies.map(candy => (candy + extraCandies) >= maxCandies);
};