function solution(before, after) {
    let b = before.split('');
    let a = after.split('');
    let c = 0;
    
    for(let i = 0; i < b.length; i++){
        for(let j = 0; j < b.length; j++){
            if(b[i] == a[j] && a[j] !== 0){
                a[j] = 0;
                b[i] = 0;
            }
        }
    }
    c = a.filter((v) => v === 0).length;
    
    if(c === a.length){
        return 1;
    } else {
        return 0;
    }
}