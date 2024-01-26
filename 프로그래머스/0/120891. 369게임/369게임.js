function solution(order) {
    let temp = order.toString().split('');
    let answer = 0;
    for(let i = 0; i < temp.length; i++){
        let a = Number(temp[i]);
        if(a % 3 === 0 || a % 6 === 0 || a % 9 === 0){
            if(a !== 0){
                answer += 1;
            }
        }
    }
    return answer;
}