function gcdOfStrings(str1: string, str2: string): string {
        if (str1 + str2 != str2 + str1) return ''
    let str1Leng = str1.length
    let str2Leng = str2.length

    let GCD = (x,y) => {
        if(!y) return x
        return GCD(y, x%y)
    }

    let div = GCD(str1Leng , str2Leng)
    return str1.slice(0, div)
};