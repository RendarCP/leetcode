function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let length = flowerbed.length;
    for (let i = 0; i < length && n > 0; i++) {
        if (flowerbed[i] === 0) {
            const leftEmpty = (i === 0) || (flowerbed[i - 1] === 0);
            const rightEmpty = (i === length - 1) || (flowerbed[i + 1] === 0);
            
            if (leftEmpty && rightEmpty) {
                flowerbed[i] = 1;  // 꽃을 심는다.
                n -= 1;
            }
        }
    }
    return n <= 0;
};