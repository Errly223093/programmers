function solution(my_string, num1, num2) {
    let arr = my_string.split('');
    arr[num1] = my_string.split('')[num2];
    arr[num2] = my_string.split('')[num1];
    return arr.join('');
}