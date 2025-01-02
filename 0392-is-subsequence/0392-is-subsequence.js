/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0; // Pointer for s
    let j = 0; // Pointer for t

    // Traverse both strings
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            // Move pointer for s if characters match
            i++;
        }
        // Always move pointer for t
        j++;
    }

    // If we've traversed all characters of s, it's a subsequence
    return i === s.length;
};

