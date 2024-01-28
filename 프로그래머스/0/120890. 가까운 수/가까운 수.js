function solution(array, n) {
    let temp = [];
    let a = [];
    
    for(let i = 0; i < array.length-1; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i] > array[j]){
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    
    for(let i = 0; i < array.length; i++){
        temp.push(array[i] - n);
        a.push(Math.abs(array[i] - n));
    }
    
    return array[a.indexOf(Math.min(...a))];
}