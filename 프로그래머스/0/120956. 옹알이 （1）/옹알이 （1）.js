function solution(say) {
    let word = ["aya", "ye", "woo", "ma"];
    let index = new Array(say.length).fill(0);
    
    for(let i = 0; i < say.length; i++){
        let a = say[i];
        let count = a.length;

        for(let j = 0; j < word.length; j++){
            if(a.indexOf(word[j]) >= 0){
                index[i] += 1;
                count -= word[j].length;
            }
        }
        (count === 0) ? null : index[i] = 0;
    }
    
    return index.filter((x) => x > 0).length;
    // 최댓값을 구해버리면..
    // return Math.max(...index);
}