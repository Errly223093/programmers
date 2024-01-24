function solution(cipher, code) {
    let temp = cipher.split('');
    let answer = [];
    for(let i = code-1; i < temp.length; i+=code){
        answer.push(temp[i]);
    }
    return answer.join('');
}