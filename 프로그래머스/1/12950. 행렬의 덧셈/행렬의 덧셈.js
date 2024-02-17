function solution(arr1, arr2) {
    // [[1,2],[2,3]]
    // [[3,4],[5,6]]
    let answer = arr1;
    for(let i = 0; i < arr1.length; i++){
        let length = arr1[i].length;
        for(let j = 0; j < length; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return answer
}