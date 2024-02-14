function solution(board) {
    if(board.length === 1){
        return board[0][0] === 1 ? 0 : 1;
    }
    let rows = board.length;
    let cols = board[0].length;
    let answer = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
    
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(board[i][j] === 1){
                let absi = Math.abs(i-1);
                let absj = Math.abs(j-1);
                
                if(i+1 >= rows && j+1 >= cols){
answer[absi][absj] = answer[absi][j] = answer[i][absj] = answer[i][j] = 1;
                } else if(i+1 >= rows){
            answer[absi][absj] = answer[absi][j] = answer[absi][j+1] = 1;
            answer[i][absj] = answer[i][j] = answer[i][j+1] = 1;
                } else if(j+1 >= cols){
            answer[absi][absj] = answer[absi][j] = 1;
            answer[i][absj] = answer[i][j] = 1;
            answer[i+1][absj] = answer[i+1][j] = 1;
                } else {
            answer[absi][absj] = answer[absi][j] = answer[absi][j+1] = 1;
            answer[i][absj] = answer[i][j] = answer[i][j+1] = 1;
            answer[i+1][absj] = answer[i+1][j] = answer[i+1][j+1] = 1;
                }
            }
        }
    }
    
    let submit = 0;
    for(let i = 0; i < rows; i++){
        answer[i].map((x) => x === 0 ? submit += 1 : null);
    }
    
    return submit
}