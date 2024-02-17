function solution(s) {
    if(s.length === 1) return s;
    
    s = s.split('');
    return s.length % 2 !== 0 ? s[Math.floor(s.length/2)] : s[Math.floor(s.length)/2 -1] + s[Math.floor(s.length)/2];
}