function reverseWords(s: string): string {
    // 문자열의 앞뒤 공백을 제거하고, 공백을 기준으로 단어들로 분할
    const words = s.trim().split(/\s+/);
    // 단어들의 순서를 반대로 뒤집기
    words.reverse();
    // 단어들을 단일 공백으로 이어붙여 결과 문자열 반환
    return words.join(' ');
};