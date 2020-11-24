// let array1 = [2,4,6,8,9,10]
// console.log(array1.indexOf(3))



 const find = function (num, array) {
    
    for (i = 0; i <= array.length; i++) {
        if (array.includes(num)) {
            return `Index #${array.indexOf(num)}`;
        }
        else{
              return -1;
         }
    }
 
}
console.log(find(4,[1,2,3,4,5]));



