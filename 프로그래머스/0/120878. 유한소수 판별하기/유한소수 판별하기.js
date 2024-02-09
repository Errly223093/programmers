function solution(a, b) {
    function gcd(a, b){        
        if(b === 0){
            return a;
        } else {
            return gcd(b, a%b);                     
        }
    }
    let check = b / gcd(a,b);
    
    let set = new Set();
    for(let i = 2; i <= check; i++){
        if(check % i === 0){
            while(check % i === 0){
                check /= i;
                set.add(i);
            }
        }
    }

    let answer =  [...set];
    return answer.filter((a) => a % 2 !== 0 && a % 5 !== 0).length ? 2 : 1;
}