function solution(number) {
    number = number.split('');
    for(let i = 0; i < number.length-4; i++){
        number[i] = "*";
    }
    return number.join('');
}