function solution(my_string) {
    let temp = my_string.split('');
    for(let i = 0; i < temp.length; i++){
        if(temp[i] === temp[i].toUpperCase()){
            temp[i] = temp[i].toLowerCase();
        } else {
            temp[i] = temp[i].toUpperCase();
        }
    }
    return temp.join().replace(/,/g ,"");
}