function solution(a, b) {
    let arr = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let start = new Date(2016, 0, 01);
    let end = new Date(2016, a-1, b);
    let day = Math.floor((end - start) / (1000 * 3600 * 24));
    
    return arr[(day + 5) % 7];
}