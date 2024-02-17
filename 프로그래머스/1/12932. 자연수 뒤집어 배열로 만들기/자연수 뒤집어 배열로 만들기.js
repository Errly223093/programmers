function solution(n) {
    let arr = [];
    let num = n.toString().split('');
    for(let i = num.length-1; i >= 0; i--){
        arr.push(+num[i]);
    }
    return arr
}