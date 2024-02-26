function solution(answers) {
    let arr = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    let count = [0, 0, 0];
    
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < answers.length; j++){
            answers[j] === arr[i][j % arr[i].length] ? count[i] += 1 : null;
        }
    }
    
    let returns = [];
    
    count.filter((x) => x >= Math.max(...count)).length > 1 ?
        count.map((x, i) => x === Math.max(...count) ? returns.push(i+1) : null) :
    returns.push(count.indexOf(Math.max(...count)) + 1);
    
    return returns
}