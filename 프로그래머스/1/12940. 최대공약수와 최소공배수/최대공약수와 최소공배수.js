function solution(n, m) {
    let answer = [];
    function gcd(a, b){
        if(b == 0){
            return a;
        } else {
            return gcd(b, a % b);
        }
    }
    answer[0] = gcd(n, m);
    answer[1] = n * m / answer[0];
    return answer
}