function solution(strings, n) {
    strings.sort();
    strings.sort((a,b) => a.charCodeAt(n) - b.charCodeAt(n));
    
    return strings
}