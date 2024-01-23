function solution(num, k) {
    let splits = num.toString().split('');
    for(let i = 0; i < splits.length; i++){
        if(splits[i] === k.toString()){
            return i + 1;
        }
    }
    return -1;
}