function solution(my_string) {
    let arr = my_string.split('');
    let answer = [];
    let temp = [];
    let x = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(Number(arr[i]) >= 0){
            temp.push(arr[i]);
            for(let j = i+1; j < arr.length; j++){
                if(Number(arr[i] >= 0 && Number(arr[j] >= 0))){
                    temp.push(arr[j]);
                    i = j;
                } else{
                    break;
                }
            }
        }
        answer.push(temp.join(''));
        temp = [];
    }
    let a = answer.filter((x) => Number(x) > 0);
    for(let i = 0; i < a.length; i++){
        x += Number(a[i]);
    }
    return x;
}