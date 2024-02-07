function solution(my_str, n) {
    let arr = my_str.split('');
    let answer = [];
    
    answer.push(arr.splice(0,n).join(''));
    
    while(arr.length > 0){
        answer.push(arr.splice(0,n).join(''));
    }
    
    return answer;
}