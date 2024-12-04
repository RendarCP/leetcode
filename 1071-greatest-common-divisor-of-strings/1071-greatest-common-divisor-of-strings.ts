function gcdOfStrings(str1: string, str2: string): string {
    // 두 문자열을 합친 결과를 비교하여 패턴이 동일한지 확인
    if (str1 + str2 != str2 + str1) return ''
    let str1Leng = str1.length
    let str2Leng = str2.length

    // 최대 공약수를 구하는 함수
    let GCD = (x,y) => {
        if(!y) return x
        return GCD(y, x%y)
    }

    let div = GCD(str1Leng , str2Leng)
    // 공통된 부분 문자열 반환
    return str1.slice(0, div)
};