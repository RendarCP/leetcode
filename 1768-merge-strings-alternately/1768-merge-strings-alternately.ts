function mergeAlternately(word1: string, word2: string): string {
    let tempArr = []
    for(let i = 0; i < Math.max(word1.length, word2.length); i++){
        if(i < word1.length) tempArr.push(word1[i]);
        if(i< word2.length) tempArr.push(word2[i]);
    
    }
    return tempArr.join('')

};