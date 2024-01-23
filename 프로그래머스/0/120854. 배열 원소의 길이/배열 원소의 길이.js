function solution(strlist) {
    let array = [];
    for(let i = 0; i < strlist.length; i++){
        array.push(strlist[i].length);
    }
    return array;
}