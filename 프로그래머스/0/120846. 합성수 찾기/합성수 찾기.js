function solution(n) {
    let arr = [];
    for(let i = 4; i <= n; i++){
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                arr.push(i);
                i++;
                j=2;
            }
        }
    }
    return arr.filter((a) => a <= n).length;
}