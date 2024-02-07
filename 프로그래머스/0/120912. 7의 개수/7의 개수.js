function solution(array) {
    let arr = array.toString().split('');
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "7"){
            count++;
        }
    }
    return count;
}