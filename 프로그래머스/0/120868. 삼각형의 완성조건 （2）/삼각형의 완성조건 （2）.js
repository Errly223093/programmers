function solution(sides) {
    let short = Math.min(...sides);
    let long = Math.max(...sides);
    
    let a = long - (long - short + 1) + 1;
    let b = short - 1;
    
    return a+b;
}