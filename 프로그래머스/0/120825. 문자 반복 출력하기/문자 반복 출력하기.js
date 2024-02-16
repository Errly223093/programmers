function solution(str, n) {
    let arr = str.split('');
    let answer = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = n; j > 0; j--){
            answer.push(arr[i]);
        }
    }
    return answer.join('')
}