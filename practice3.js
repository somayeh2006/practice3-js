//practice1

let product =["book", "pen", "note book", "ruler", "eraser"];

let productindex = Math.floor(Math.random() * product.length);
let suggestion = product[productindex];
console.log(suggestion);


//practice2

let number =[-23,-44,-57,-24,-67];

let maxnum = Math.max(...number);
console.log(maxnum);
let minnum = Math.min(...number);
console.log(minnum);