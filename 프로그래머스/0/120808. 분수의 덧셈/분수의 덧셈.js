function solution(numer1, denom1, numer2, denom2) {
    function gcd(a, b){
        if(b == 0){
            return a;
        } else {
            return gcd(b, a%b);
        }
    }
    
    let denom, numer;
    
    denom1 === denom2 ? denom = denom1 : denom = denom1 * denom2;
    denom1 === denom2 ? numer = numer1 + numer2 : numer = numer1 * denom2 + numer2 * denom1;
    
    let gcds = gcd(denom, numer);
    let answer = [];
    
    answer[0] = numer / gcds;
    answer[1] = denom / gcds;

    return answer
}