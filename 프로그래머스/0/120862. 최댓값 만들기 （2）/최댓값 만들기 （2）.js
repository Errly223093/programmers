function solution(numbers) {
//     let arr = [];
//     let max;
//     let max2;
    
//     for(let i = 0; i < numbers.length; i++){
//         arr[i] = Math.abs(numbers[i]);
//     }
    
//     for(let i = 0; i < numbers.length; i++){
//         max = Math.max(...arr);
//         arr[arr.indexOf(max)] = 0;
//         max2 = Math.max(...arr);
//         if(
            
//         ){
//             return max * max2;
//         }
//     }
    let arr = [];
    
    for(let i = 0; i < numbers.length-1; i++){
        for(let j = i+1; j < numbers.length; j++){
            arr.push(numbers[i] * numbers[j]);
        }
    }
    
    return Math.max(...arr);
}