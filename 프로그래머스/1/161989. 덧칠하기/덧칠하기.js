function solution(n, m, section) {
    if(m === 1) return section.length;
    
    let arr = new Array(n).fill(true);
    
    for(let i = 0; i < section.length; i++){
        arr[section[i] - 1] = false;
    }
    
    let answer = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[section[i] - 1] === false){
            let count = 0;
            while(count < m){
                arr[section[i] - 1 + count] = true;
                count++;
            }
            answer++;
        }
    }
    
    return answer
}