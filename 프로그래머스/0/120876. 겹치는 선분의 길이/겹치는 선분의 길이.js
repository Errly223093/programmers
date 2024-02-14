function solution(lines) {
    let result = 0;

    // 선분들의 시작과 끝 좌표를 모아서 정렬합니다.
    const points = [];
    for (const [start, end] of lines) {
        points.push({ pos: start, type: 'start' });
        points.push({ pos: end, type: 'end' });
    }

    // 좌표를 기준으로 정렬합니다.
    points.sort((a, b) => a.pos - b.pos);

    // 현재 겹치고 있는 선분의 개수를 세기 위한 변수
    let count = 0;

    // 각 좌표에서 시작 또는 끝 선분의 개수를 기반으로 count를 조절하면서 결과를 계산합니다.
    for (const point of points) {
        if (point.type === 'start') {
            count++;
        } else {
            count--;
        }

        // 현재까지의 선분이 두 개 이상 겹친 경우, 해당 구간을 계산하여 결과에 더합니다.
        if (count >= 2) {
            result += points[points.indexOf(point) + 1].pos - point.pos;
        }
    }

    return result;
}