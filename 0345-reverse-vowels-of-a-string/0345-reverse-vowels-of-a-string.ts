function reverseVowels(s: string): string {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let arr = s.split('');
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Move left pointer until a vowel is found or pointers cross
        while (left < right && !vowels.has(arr[left])) {
            left++;
        }
        // Move right pointer until a vowel is found or pointers cross
        while (left < right && !vowels.has(arr[right])) {
            right--;
        }
        // If both are vowels, swap them
        if (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }

    return arr.join('');
};