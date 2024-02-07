function solution(numbers, k) {
    let a = 0;
    if(numbers.length % 2 === 0){
        for(let i = 0; k > 0 ;i+=2){
            if(numbers.length-1 < i){
                i = 0;
            }
            k--;
            a = i;
        }
        return numbers[a];
    } else {
        // [1,2,3,4,5] , 7, 3
        for(let i = 0; k > 0; i+=2){
            if(numbers.length < i){
                i = 1;
            } else if(numbers.length === i){
                i = 0;
            }
            k--;
            a = i;
        }
        return numbers[a];
    }
}