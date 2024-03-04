function solution(res) {
    // 10S10S#3S
    res = res.split('');
    let num = [];
    let bonus = [];
    let count = 0;
    
    for(let i = 0; i < res.length; i++){
        if(+res[i] >= 0){
            +res[i+1] === 0 ? num.push(10) && i++ : num.push(+res[i]);
        }
    }
    
    for(let i = 0; i < res.length; i++){
        if(res[i] === "T"){
            num[count] = num[count] ** 3;
            
            if(res[i+1] === "#"){
                num[count] *= -1;
            }

            if(res[i+1] === "*" && count > 0){
                num[count] *= 2;
                num[count-1] *= 2;
            } else if(res[i+1] === "*"){
                num[count] *= 2;
            }
            
            count++;
        } else if(res[i] === "D"){
            num[count] = num[count] ** 2;
            
            if(res[i+1] === "#"){
                num[count] *= -1;
            }

            if(res[i+1] === "*" && count > 0){
                num[count] *= 2;
                num[count-1] *= 2;
            } else if(res[i+1] === "*"){
                num[count] *= 2;
            }

            count++;
        } else if(res[i] === "S"){
            
            if(res[i+1] === "#"){
                num[count] *= -1;
            }

            if(res[i+1] === "*" && count > 0){
                num[count] *= 2;
                num[count-1] *= 2;
            } else if(res[i+1] === "*"){
                num[count] *= 2;
            }
            
            count++;
        }
    }
    
    count = 0;
    num.map((n) => count += n);
    return count
    
}