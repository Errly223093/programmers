function solution(name, score, photo) {
    let answer = [];
    
    for(let i = 0; i < photo.length; i++){
        let temp = 0;
        
        for(let j = 0; j < photo[i].length; j++){
            name.indexOf(photo[i][j]) >= 0 ?
                temp += score[name.indexOf(photo[i][j])] : null;
        }
        
        answer.push(temp);
    }
        
    return answer
}