function solution(chicken) {
    // 1081, 1081장, 서비스 108
    let coupon = chicken;
    let service = 0;

    while(coupon >= 10){
        let temp = Math.floor(coupon / 10);
        service += Math.floor(coupon / 10);
        coupon -= Math.floor(coupon / 10) * 10;
        coupon += temp;
    }
    return service
}