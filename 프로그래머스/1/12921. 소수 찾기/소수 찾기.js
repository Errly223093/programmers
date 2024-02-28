function solution(n) {
    let arr = new Array(n+1).fill(false);
    
    arr[0] = arr[1] = true;
    
    for(let i = 2; i <= Math.sqrt(n); i++){
        for(let j = i * i; j <= n; j+=i){
            if(arr[j] === true) continue;
            arr[j] = true;
        }
    }
    
    return arr.filter((x) => x === false).length
}