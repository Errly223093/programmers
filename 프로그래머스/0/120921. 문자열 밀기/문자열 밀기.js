function solution(A, B) {
    if(A === B) return 0;
    let a = A.split('');
    
    // abc cab bca  === bca , 2
    //      1   2
    for(let i = 1; i < a.length; i++){
        a.unshift(a[a.length-1]);
        a.pop();
        if(a.join('') == B) return i;
    }
    
    return -1;
}