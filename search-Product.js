// const products = [
//     {name: 'yamaha', price: 120000},
//     {name: 'honda', price: 130000},
//     {name: 'dominer', price: 140000},
//     {name: 'pulser 150', price: 10000},
//     {name: 'discover 110', price: 110000},
//     {name: 'bajaj', price: 50000},
//     {name: 'avenger 220', price: 80000},
//     {name: 'laptop', price: 80000},
//     {name: 'svmsung phone', price: 80000},
// ]
// function searchProducts(products,searechText) {
//     const matched = [];
//     for (const product of products){
//         //console.log(product); 
//         //console.log(product.name);
//         // if(product.name.indexOf(searechText) != -1)
//         const name = product.name;
        // if(name.indexOf('d') != -1)
        // {
        //     console.log(name);
        // }
//     // if(name.indexOf('honda') != -1)
//     // {
//     //     console.log(name)
//     // }

// }
//     return matched;
    

// }
// const matched= searchProducts(products, 'phone');
// console.log(matched);


const products = [
    {name: 'yamaha', price: 120000},
    {name: 'honda', price: 130000},
    {name: 'dominer', price: 140000},
    {name: 'pulser 150', price: 10000},
    {name: 'discover 110', price: 110000},
    {name: 'bajaj', price: 50000},
    {name: 'avenger 220', price: 80000},
    {name: 'laptop', price: 80000},
    {name: 'svmsung phone', price: 80000},
]
// function searchProducts(products,searechText) {
//     const matched = [];
//     for (const product of products){
//         const name = product.name;
//        if(name.indexOf(searechText) != -1)
//     {
//             matched.push(product);
//     }
// }
//     return matched;
// }
// const matched= searchProducts(products, 'honda');
// console.log(matched);



// function searchProducts(products,searechText) {
//     const matched = [];
//     for (const product of products){
//         const name = product.name;
//        if(name.indexOf(searechText) != -1)
//     {
//             matched.push(price);
//     }
// }
//     return matched;
// }
// const matched= searchProducts(products, 'price');
// console.log(matched);



// for (const product of products){
//     if(product.price < 10000){
//         break;
//     }
//     console.log(product);
// }

for (const product of products){
    if(product.price <10000){
        continue;    }
    console.log(product);
}