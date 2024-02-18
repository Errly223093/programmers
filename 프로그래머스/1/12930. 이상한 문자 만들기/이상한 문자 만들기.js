function solution(s) {
    s = s.split(' ');
    let answer = [];
    
    for(let i = 0; i < s.length; i++){
        let temp = s[i].split('');
        
        for(let j = 0; j < temp.length; j++){
            j % 2 === 0 ? answer.push(temp[j].toUpperCase()) :
            answer.push(temp[j].toLowerCase());
        }
        answer.push(" ");
    }
    
    answer.pop();
    return answer.join('')
}