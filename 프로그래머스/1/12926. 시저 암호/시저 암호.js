function solution(s, n) {
    let answer = [];
    // 65~90 . 97~122    90-65+1   .   122-97+1
    for(let i = 0; i < s.length; i++){
        let temp = s.charCodeAt([i]);
        let lower = 0;
        temp >= 65 && temp <= 90 ? lower = 1 : null;
        temp !== 32 ? temp += n : null;
        
        if(lower === 1 && temp > 90){
            answer.push(String.fromCharCode(temp - 26))
        } else if(lower === 0 && temp > 122){
            answer.push(String.fromCharCode(temp - 26))
        } else {
            answer.push(String.fromCharCode(temp));
        }
    }
    return answer.join('')
}