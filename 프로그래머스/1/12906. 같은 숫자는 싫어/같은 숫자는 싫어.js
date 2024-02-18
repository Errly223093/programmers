function solution(arr){
//     for(let i = 0; i < arr.length; i++){
//         let idx = 1;
        
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] === arr[j]){
//                 idx++;
//             } else {
//                 break;
//             }
//         }
        
//         if(idx > 1) {
//             arr.splice(i, idx-1);
//         }
//     }
//     return arr
    
    let answer = [];
    
    for(let i = 0; i < arr.length; i++){
        let count = 0;
        answer.push(arr[i]);
        
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                count++;
            } else {
                break;
            }
        }
        
        i += count;
    }
    
    return answer;
}