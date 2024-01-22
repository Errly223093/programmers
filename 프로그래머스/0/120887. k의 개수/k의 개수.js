function solution(i, j, k) {
    let count = 0;
    
    for(let a = i; a <= j; a++){
        if(a.toString().includes(k.toString()))
            count += a
                .toString()
                .split("")
                .filter((str) => str === k.toString()).length;
    }
    
    return count;
}