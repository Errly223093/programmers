function solution(numbers) {
    let eng = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    let arr = numbers;
    let num = [];
    
    for(let i = 0; i < eng.length; i++){
        let idx = arr.indexOf(eng[i]);
        while(idx >= 0){
            num[idx] = i;
            idx = arr.indexOf(eng[i], idx + 1);  
            }
        }
    return +num.join('')
}
    //"sixtwozeroonezero" 6201