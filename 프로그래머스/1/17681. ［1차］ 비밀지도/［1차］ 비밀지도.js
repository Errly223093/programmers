function solution(n, arr1, arr2) {    
    // 10 > 2
    function binary(array){
        let binary = [];
        let arr1 = array;
    
        for(let i = 0; i < array.length; i++){
            let temp = [];
            while(arr1[i] > 0){
                temp.unshift(arr1[i] % 2);
                arr1[i] = Math.floor(arr1[i] / 2);
            }
            while(temp.length < n){
                temp.unshift(0);
            }
            binary.push(...temp);
        }
        
        return binary ;
    }
    
    let a1 = binary(arr1);
    let a2 = binary(arr2);
    let answer = [];
    let temp = [];
    
    // 벽 확 인  
    for(let i = 0; i < a1.length; i++){
    (a1[i] == 1 || a2[i] == 1) ? temp.push("#") : temp.push(" ");
        if(temp.length === n){
            answer.push(temp.join(''));
             temp = [];
        }
    }
    
    return answer
}