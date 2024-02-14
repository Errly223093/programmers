function solution(lines) {
    let result = 0;

    const points = [];
    for (const [start, end] of lines) {
        points.push({ pos: start, type: 'start' });
        points.push({ pos: end, type: 'end' });
    }

    points.sort((a, b) => a.pos - b.pos);

    let count = 0;

    for (const point of points) {
        if (point.type === 'start') {
            count++;
        } else {
            count--;
        }

        if (count >= 2) {
            result += points[points.indexOf(point) + 1].pos - point.pos;
        }
    }

    return result;
}