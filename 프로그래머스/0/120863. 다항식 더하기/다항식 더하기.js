function solution(x) {
    let split = x.split(" + ");
    let temp = split.filter((x) => x % 1 === 0);
    let num = 0;
    for(let i = 0; i < temp.length; i++){
        num += +temp[i];
    }
    
    let y = split.filter((x) => x === "x").length;
    let z = split.filter((x) => x.includes("x")).map((x) => x.replace("x",""));
    let xx = 0;
    for(let i = 0; i < z.length; i++){
        xx += +z[i];
    }
    
    let answerX = xx+y;
    if (answerX === 1 && num > 0) {
        return "x + " + num.toString()
    } else if(answerX === 1 && num === 0) {
        return "x";
    }
    return answerX > 0 && num > 0 ? answerX.toString() + "x + " + num.toString() : answerX > 0 && num < 1 ? answerX.toString() + "x" : answerX < 1 ? num.toString() : 0;
    
    
    // num => 상수, y = 1x 하나, xx = 2x 두개 이상
    
}