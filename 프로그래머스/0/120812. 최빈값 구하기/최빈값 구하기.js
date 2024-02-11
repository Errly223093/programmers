function solution(array){
    // [4,4,6,6,8]
    // [1,2,1,2,1]
    array.sort((a, b) => a-b);
    let arr = [1];
    
    for(let i = 1; i < array.length; i++){
        if(array[i] === array[i-1]){
            arr[i] = arr[i-1] + 1;
        } else {
            arr[i] = 1;
        }
    }
    
    return arr.filter((x) => x === Math.max(...arr)).length > 1 ? -1 : array[arr.indexOf(Math.max(...arr))];
}