function solution(n, lost, reserve) {
    reserve.sort((a, b) => a - b);
    lost.sort((a, b) => a - b);
    
    // 여벌의 옷을 가져온 학생이 도난 당했을 경우 배열에서 제거
    for(let i = 0; i < reserve.length; i++){
        if(lost.indexOf(reserve[i]) >= 0){
            lost.splice(lost.indexOf(reserve[i]), 1);
            reserve.splice(i, 1);
            i--;
        }
    }

    // 빌려줄 수 있는 체육복의 갯수 계산
    for(let i = 0; i < reserve.length; i++){
        let a = lost.indexOf(reserve[i] + 1);
        let c = lost.indexOf(reserve[i] - 1);
        
        if(c >= 0){
            lost[c] = -1;
        } else if(a >= 0){
            lost[a] = -1;
        }
    }
    

    
    return n - lost.filter((x) => x >= 0).length;
}