function solution(s){
    s = s.toLowerCase().split('');
    let county = 0;
    let countp = 0;
    
    s.map((x) => x == "y" ? county += 1 : x == "p" ? countp += 1 : null);
    
    return (county === countp || county == 0 && countp == 0) ? true : false;
}