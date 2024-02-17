function solution(n) {
    n = n.toString().split('');
    return +n.sort((a, b) => b - a).join('');
}