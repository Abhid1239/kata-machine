export default function two_crystal_balls(breaks: boolean[]):number {
    let minDistance = Math.floor(Math.sqrt(breaks.length));
    let i = minDistance;
    for(; i < breaks.length; i+= minDistance) {
        if(breaks[i]) {
            break;
        }
    }
    i -= minDistance;
    for(let j =i; j < i+minDistance && j < breaks.length; j++) {
        if(breaks[j]) return i;
    }
    return -1;
}
