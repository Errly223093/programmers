function solution(my_string) {
    let arr = my_string.split(' ');
    let a = +arr[0];
    //	"20 + 10 - 10"
    for(let i = 1; i < arr.length; i+=2){
        if(arr[i] === "+" ){
            a += Number(arr[i+1]);
        } else if(arr[i] === "-"){
            a -= Number(arr[i+1]);
        }
    }
    return a;
}