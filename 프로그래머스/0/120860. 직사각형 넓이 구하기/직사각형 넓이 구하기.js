function solution(dots) {
    let xmax = dots[0][0];
    let xmin = dots[0][0];
    let ymax = dots[0][1];
    let ymin = dots[0][1];
    
    // x
    for(let i = 0; i < 4; i++){
        if(dots[i][0] > xmax){
            xmax = dots[i][0];
        }
        if(dots[i][0] < xmin){
            xmin = dots[i][0];
        }
    }
    
    // y
    for(let i = 0; i < 4; i++){
        if(dots[i][1] > ymax){
            ymax = dots[i][1];
        }
        if(dots[i][1] < ymin){
            ymin = dots[i][1];
        }
    }
    
    return (ymax - ymin) * (xmax - xmin);
}