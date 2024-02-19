function solution(s) {
    let arr = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    
    arr.forEach((e, i) => {
        s = s.split(e).join(i)        
    })
    
    return +s
}