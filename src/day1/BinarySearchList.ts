// export default function bs_list(haystack: number[], needle: number): boolean {
//     let l = 0;
//     let h = haystack.length;
//     while( l < h) {
//         let mid = Math.floor(l + (h-l)/2)
//         if(haystack[mid] == needle) return true;
//         else if( haystack[mid] > needle) h = mid;
//         else l = mid +1
//     }
//     return false
// }

function bs(arr:number[],l:number, h:number,v:number):boolean {
    if( l > h) {
        return false
    }
    let mid = Math.floor(l+ (h-l)/2)
    if(arr[mid] == v){
        return true;
    }

    if(arr[mid] > v) {
        return bs(arr, l, mid-1, v)
    }
    return bs(arr, mid+1,h, v)
}

// export default function bs_list(arr:number[], v:number):boolean{
//     return bs(arr,0, arr.length, v)
// }




export default function bs_list(arr: number[], n:number):boolean {
    let l = 0;
    let r = arr.length -1;
    while( l <=r) {
        let m = Math.floor(l + (r-l)/2);
        if(arr[m] == n) return true;
        if(arr[m] > n) r = m-1;
        else { l = m+1}
    }
    return false
}







// 0 1 2 3 4 5 6 7 8

// mid  =  integer (number of Elements / 2)
// 9/2
// 4.5
// 4

// 0 4 
// 5 to 8