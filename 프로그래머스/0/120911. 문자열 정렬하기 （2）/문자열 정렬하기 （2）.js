function solution(my_string) {
    let arr = my_string.split('');
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].toLowerCase();
    }
    return arr.sort().join('');
}