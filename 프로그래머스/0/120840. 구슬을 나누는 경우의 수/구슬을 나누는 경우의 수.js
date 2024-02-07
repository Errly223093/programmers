function solution(balls, share) {
    let n = balls;
    let m = share;
    
    let a = 1;
    while(n > 1){
        a *= n;
        n--;
    }
    
    let b = 1;
    while(m > 1){
        b *= m;
        m--;
    }
    
    let c = 1;
    let d = balls-share;
    while(d > 1){
        c *= d;
        d--;
    }
    
    return Math.round(a/(b*c));
}