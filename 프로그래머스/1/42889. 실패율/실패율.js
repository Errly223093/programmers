function solution(N, stages) {
    let arr = [];
    let count = stages.length;
    
    while(arr.length < N){
        let length = stages.filter((x) => x === arr.length + 1).length;
        arr.push(length);
    }
    
    for(let i = 0; i < arr.length; i++){
        let arri = arr[i];
        arr[i] = arri / count;
        count -= arri;
    }
    
    let obj = arr.map((v, i) => ({v, i}));
    obj.sort((a, b) => b.v - a.v);
    let answer = obj.map((x) => x.i + 1);
    
    return answer
}