function solution(X, Y) {
    // int => string, 오름차순 정렬
    X = X.toString().split('');
    Y = Y.toString().split('');
    
    // 배열의 index 를 이용하여 각 숫자가 나온 횟수를 계산
    let x = new Array(10).fill(0);
    let y = new Array(10).fill(0);
    
    for(let i = 0; i < X.length; i++){
        x[+X[i]]++;
    }
    
    for(let i = 0; i < Y.length; i++){
        y[+Y[i]]++;
    }
    
    // x y 배열의 최소 값 구하기
    let arr = x.map((v, i) => Math.min(v, y[i]));
    
    // 예외처리
    if(arr.filter((x) => x === 0).length === 10){
        return "-1";
    } else if(arr.filter((x) => x === 0).length === 9 && arr[0] > 0){
        return "0";
    }
    
    // 배열을 순회하며 정답 구하기
    let answer = "";
    
    for(let i = 9; i >= 0; i--){
        if(arr[i] > 0){
            answer += i.toString().repeat(arr[i]);
        }
    }
    
    return answer
}