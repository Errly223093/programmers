function solution(say) {
    let arr = ["aya", "ye", "woo", "ma"];
    let count = 0;
    
    // 연속된 단어 지우기
    for(let i = 0; i < say.length; i++){
        for(let j = 0; j < arr.length; j++){
            say[i].indexOf(arr[j] + arr[j]) >= 0 ? say[i] = "x" : null;
        }
    }

    // 단어 확인
    for(let i = 0; i < say.length; i++){
        let a = say[i];
        let c = 0;
        
        for(let j = 0; j < arr.length; j++){
            let idx = a.indexOf(arr[j]);
            
            if(idx >= 0){
                a = a.replace(arr[j], "x");
                j -= 1;
                c++;
            }
        }
        
        c === a.length ? count++ : null;
    }
        
    return count
}