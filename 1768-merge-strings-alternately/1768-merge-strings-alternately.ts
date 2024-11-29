function mergeAlternately(word1: string, word2: string): string {
    let tempArr = []
    let length = 0
    let i = 0;
    const splitword1 = word1.split('');
    const splitword2 = word2.split('');
    if(splitword1.length >= splitword2.length) { 
        length = splitword1.length;
    }
    
    if(splitword2.length > splitword1.length) {
        length = splitword2.length;
    }
    console.log('lenfth', length);
    console.log('splotword1',splitword1);
    console.log('splitword2', splitword2);

    for(i=0; i< length; i++) {
        tempArr.push(splitword1[i])
        tempArr.push(splitword2[i])
    }
    console.log('tempArr',tempArr)
    return tempArr.join("")
};