function solution(str, ltr) {
    let temp = str.split('');
    let answer = [];
    for(let i = 0; i < temp.length; i++){
        temp[i] === ltr ? null : answer.push(temp[i]);
    }
    return answer.join('')
}