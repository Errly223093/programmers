function solution(cards1, cards2, goal) {
    let idx1;
    let idx2;
    
    // idx 시작점 확인
    for(let i = 0; i < goal.length; i++){
        if(idx1 >= 0 && idx2 >= 0){
            break;
        } else {
            idx1 >= 0 ? null : idx1 = cards1.indexOf(goal[i]);
            idx2 >= 0 ? null : idx2 = cards2.indexOf(goal[i]);
        }
    }
    
    // 배열 확인
    for(let i = 0; i < goal.length; i++){
        if(cards1.indexOf(goal[i]) === idx1){
            idx1 += 1;
        } else if(cards2.indexOf(goal[i]) === idx2) {
            idx2 += 1;
        } else {
            return "No";
        }
    }
    
    return "Yes";
}