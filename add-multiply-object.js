const products=[
    {name:'laptop', price:55000, quantity:1},
    {name:'watch', price:550, quantity:1},
    {name:'phone', price:5500, quantity:3},
    {name:'bag', price:4000, quantity:8}

];
// let cartTotal = 0;
// for(const product of products){
//     //console.log(product);
//     productTotal = product.price * product.quantity;
//     cartTotal= cartTotal + productTotal;
// }
// console.log(cartTotal);


//add total price of object
// let totalPrice = 0;
// for(const product of products){
//     //console.log(product);
//     totalPrice= totalPrice + product.price;
// }
// console.log(totalPrice);



function productsOfObject(product) {
//function productsOfObject(products)  
let totalPrice = 0;
for(const product of products){
    //console.log(product);
    totalPrice= totalPrice + product.price;
}
return totalPrice;
}
const cartPrice = productsOfObject(products)
console.log(cartPrice);


// let sum = 0;
// for(i=0; i<=3; i++)
// {
//     sum = sum + i;
// }
// console.log(sum);