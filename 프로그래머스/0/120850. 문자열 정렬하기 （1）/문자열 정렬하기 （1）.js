function solution(my_string) {
    var temp = my_string.split('');
    var answer = [];
    for(let i = 0; i < temp.length; i++){
        if(temp[i] * 1 === Number(temp[i])){
            answer.push(Number(temp[i]));
        }
    }
    
    return answer.sort(function(a, b){
        return a - b;
    });
}