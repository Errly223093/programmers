function solution(str) {
    let word = ["a", "e", "i", "o", "u"];
    let string = str.split('');
    for(let i = 0; i < string.length; i++){
        for(let j = 0; j < word.length; j++){
            string[i] === word[j] ? string[i] = 0 : null;
        }
    }
    return string.filter((x) => x !== 0).join('');
}