function solution(sizes) {
    let maxW = 0;
    let maxH = 0;
    
    for(let i = 0; i < sizes.length; i++){
        sizes[i][0] < sizes[i][1] ? 
            [sizes[i][1], sizes[i][0]] = [sizes[i][0], sizes[i][1]] : null;
        for(let j = 0; j < 2; j++){
            sizes[i][j] > maxW ? maxW = sizes[i][j] : null;
        }
    }
    
    for(let i = 0; i < sizes.length; i++){
        sizes[i][1] > maxH ? maxH = sizes[i][1] : null;
    }
    
    return maxW * maxH;
}