function solution(idpw, db) {
    let answer;
    
    for(let i = 0; i < db.length; i++){
        let dbid = db[i][0];
        let dbpw = db[i][1];
        
        if(dbid === idpw[0] && dbpw === idpw[1]){
            answer = "login";
        } else if(dbid === idpw[0] && dbpw !== idpw[1]){
            answer = "wrong pw";
        } else if(dbid !== idpw[0] && dbpw !== idpw[1]){
            answer = "fail";
        }
    }
    return answer;
}