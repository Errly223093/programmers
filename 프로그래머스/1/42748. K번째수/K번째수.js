function solution(array, commands) {
    let answer = [];
    
    for(let i = 0; i < commands.length; i++){
        let arrays = new Array(...array);
        let arr = arrays.splice(commands[i][0] - 1, commands[i][1] - commands[i][0] + 1);
        arr.sort((a,b) => a-b);
        let v = (commands[i][2]) - 1;
        answer.push(arr[v]);
    }
    
    return answer
}