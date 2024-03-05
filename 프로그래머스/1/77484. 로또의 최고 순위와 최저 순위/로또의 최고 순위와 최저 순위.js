function solution(ltt, nums) {
    
    // 일치할 숫자를 배열로 정리
    let rank = [6,6,5,4,3,2,1];
    let count = 0;
    let answer = [0, 0];
    
    ltt.sort((a, b) => b - a);
    nums.sort((a, b) => b - a);
    answer[1] = ltt.filter((x) => x === 0).length;
    
    // 배열에서 일치하는 숫자를 찾기
    for(let i = 0; i < ltt.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(ltt[i] === nums[j]){
               count++;
               break;
            }
            if(ltt[i] > nums[j]){
                break;
            }
        }
    }
    
    answer[0] = count + answer[1];
    answer[1] = count;
    return [rank[answer[0]], rank[answer[1]]]
}