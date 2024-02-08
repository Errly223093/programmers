function solution(key, board) {
    let xlimit = Math.round((board[0]) / 2);
    let ylimit = Math.round((board[1]) / 2);
    let psn = [0, 0];
    
    for(let i = 0; i < key.length; i++){
        if(key[i] === "right" && psn[0] < xlimit-1){
            psn[0] += 1;
        } else if(key[i] === "left" && psn[0] > -(xlimit-1)){
            psn[0] -= 1;
        } else if(key[i] === "up" && psn[1] < ylimit-1){
            psn[1] += 1;
        } else if(key[i] === "down" && psn[1] > -(ylimit-1)){
            psn[1] -= 1;
        }
    }
    
    return psn;
}