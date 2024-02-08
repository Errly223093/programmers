function solution(spell, dic) {
    // dic 요소 분해 -> spell 에 있는지 비교
    let arr = dic;
    
    for(let i = 0; i < arr.length; i++){
        let temp = arr[i].split('');
        let array = new Array(...spell);
        let count = array.length;
        
        for(let j = 0; j < temp.length; j++){
            if(array.indexOf(temp[j]) >= 0){
                count--;
                array.splice(array.indexOf(temp[j]), 1);
            }
        }
        
        if(count === 0){
            return 1;
        }
    }
    
    return 2;
}