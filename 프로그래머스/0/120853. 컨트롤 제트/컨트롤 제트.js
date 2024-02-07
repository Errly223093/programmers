function solution(s) {
    let arr = s.split(' ');
    let answer = Number(arr[0]);
    for(let i = 1; i < arr.length; i++){
        if(arr[i] === "Z"){
            answer -= Number(arr[i-1]);
        } else {
            answer += Number(arr[i]);
        }
    }
    return answer;
}