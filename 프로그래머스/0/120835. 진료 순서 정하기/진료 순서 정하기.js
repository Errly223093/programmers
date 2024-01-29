function solution(emergency) {
    // [3, 76, 24] temp
    // [76, 24, 3] arr
    // 0, 1, 2
    let temp = emergency.concat();
    let arr = emergency;

    
    for(let i = 0; i < emergency.length-1; i++){
        for(let j = i+1; j < emergency.length; j++){
            if(arr[i] < arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    
    for(let i = 0; i < emergency.length; i++){
        temp[i] = (arr.indexOf(temp[i])) + 1;
    }
    
    return temp;
}