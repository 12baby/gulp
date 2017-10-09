var arr = [1,2,3,4,5,5,5,6,7,8];
function indexofArr(arr) {  
    var brr = []; 
    for (var i = 0; i < arr.length; i++) {
       if (arr[i] !== arr[i+1]) {
            brr.push(arr[i])
       }
    }
    return brr;
}
console.log(indexofArr(arr));


