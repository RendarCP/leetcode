function isPalindrome(x: number): boolean {
    const numberToString = String(x)
    console.log('numberToString', numberToString);
    const reverseString = numberToString.split("").reverse().join("");;
    console.log('reverseString', reverseString);
    if(numberToString === reverseString){
        return true
    }
    else{
        return false
    }
    return true
};