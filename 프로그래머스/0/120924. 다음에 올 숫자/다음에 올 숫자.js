function solution(c) {
    // [4,7,10,13, ?] 16
    // [-4, -7, -10, -13, ?] -16
    // [2,4,8, ?] 16
    
    return c[c.length-1] - c[c.length-2] === 
        c[c.length-2] - c[c.length-3] ?
        c[c.length-1] + (c[c.length-1] - c[c.length-2]) :
        c[c.length-1] * (c[c.length-1] / c[c.length-2]);
}