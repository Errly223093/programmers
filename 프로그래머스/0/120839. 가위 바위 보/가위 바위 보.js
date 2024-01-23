function solution(rsp) {
    let array = rsp.toString().split('');
    let answer = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] === "2"){
            answer.push("0");
        } else if(array[i] === "0"){
            answer.push("5");
        } else {
            answer.push("2");
        }
    }
    return answer.join().replace(/,/g, "");
}