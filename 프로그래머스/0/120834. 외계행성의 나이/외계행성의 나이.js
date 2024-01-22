function solution(age) {
    let array = ["a","b","c","d","e","f","g","h","i","j"];
    let ages = age.toString().split("");
    for(let i=0; i < ages.length; i++){
        ages[i] = array[Number(ages[i])];
    }
    return ages.join("");
}