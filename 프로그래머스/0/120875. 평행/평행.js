function solution(dots) {
    // 기울기만 확인 - 01,23
    let x1 = (dots[0][0] - dots[1][0]);
    let y1 = (dots[0][1] - dots[1][1]);
    let x2 = (dots[2][0] - dots[3][0]);
    let y2 = (dots[2][1] - dots[3][1]);
    if(x1/y1 == x2/y2) return 1;
    // if((y1 - y2) / (x1 - x2)) return 1; 
    
    // 02,13
    x1 = (dots[0][0] - dots[2][0]);
    y1 = (dots[0][1] - dots[2][1]);
    x2 = (dots[1][0] - dots[3][0]);
    y2 = (dots[1][1] - dots[3][1]);
    if(x1/y1 == x2/y2) return 1;
    
    // 03,12
    x1 = (dots[0][0] - dots[3][0]);
    y1 = (dots[0][1] - dots[3][1]);
    x2 = (dots[1][0] - dots[2][0]);
    y2 = (dots[1][1] - dots[2][1]);
    if(x1/y1 == x2/y2) return 1;
    return 0;
}