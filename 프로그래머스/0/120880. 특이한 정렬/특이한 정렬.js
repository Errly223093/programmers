function solution(numlist, n) {
    for(let i = 0; i < numlist.length-1; i++){
        for(let j = i+1; j < numlist.length; j++){
            if(Math.abs(numlist[i] - n) === Math.abs(numlist[j] - n)){
                if(numlist[i] < numlist[j]) {
                    [numlist[i], numlist[j]] = [numlist[j], numlist[i]];
                }
            } else if(Math.abs(numlist[i] - n) > Math.abs(numlist[j] - n)){
                [numlist[i], numlist[j]] = [numlist[j], numlist[i]];
            }
        }
    }
    
    return numlist
}