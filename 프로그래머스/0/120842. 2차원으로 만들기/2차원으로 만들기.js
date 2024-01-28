function solution(num_list, n) {
    let arr = [];
    // 4,5,6   3
    for(let i = 0; 0 < num_list.length; ){
            arr[i] = num_list.splice(i-i,i-i+n);
            i++;
    }
    return arr;
}