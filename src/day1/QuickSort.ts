export default function quick_sort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = quick_sort(arr.slice(0, mid));
    let right = quick_sort(arr.slice(mid));

    return merge(left, right); // Assuming you want to merge the sorted arrays
}

function merge(lA: number[], rA: number[]): number[] {
    const res = [];
    for (let i = 0, j = 0; i < lA.length || j < rA.length;) {
        if (i >= lA.length) {
            res.push(rA[j]);
            j++;
        } else if (j >= rA.length) {
            res.push(lA[i]);
            i++;
        } else if (lA[i] > rA[j]) {
            res.push(rA[j]);
            j++;
        } else {
            res.push(lA[i]);
            i++;
        }
    }

    return res;
}