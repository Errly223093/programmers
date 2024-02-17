function solution(s) {
    s = s.split('');
    let ss = [];
    for(let i = 0; i < s.length; i++){
        +s[i] % 1 === 0 ? ss.push(+s[i]) : null;
    }
    return (s.length == 4 || s.length == 6) && ss.join('').length === s.length ? true : false;
}