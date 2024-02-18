function solution(t, p) {
    let count = 0;
    t = t.split('');
    
    for(let i = 0; i <= t.length - p.length; i++){
        let str = t[i];
        
        for(let j = 1; j < p.length; j++){
            str += t[i+j];
        }
        
        +str <= +p ? count++ : null;
    }
    // "102031", "151"
    return count
}