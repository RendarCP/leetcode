/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const first = haystack.indexOf(needle);
    if(first !== -1){
        return first
    }
    else{
        return -1
    }
};