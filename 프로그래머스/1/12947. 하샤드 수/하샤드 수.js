function solution(x) {
    let xx = x.toString().split('');
    let sum = 0;
    for(let i = 0; i < xx.length; i++){
        sum += +xx[i]; 
    }
    return x % sum === 0 ? true : false;
}