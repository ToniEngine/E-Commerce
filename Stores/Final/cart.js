// // // Define an array of product objects with properties like image, title, price, and category.
// // const products = [
// //     {
// //       id: 0,                         
// //       image: "Final/Images/Cart_Images/watch1.jpg",  // Use external image URLs
// //       title: "Wrist Watch",
// //       price: 120,
// //       category: "Watches",
// //     },
// //     {
// //       id: 1,
// //       image: "https://example.com/watch2.jpeg",
// //       title: "Elegant Watch",
// //       price: 60,
// //       category: "Watches",
// //     },
// //     {
// //       id: 2,
// //       image: "https://example.com/watch3.jpeg",
// //       title: "Luxury Watch",
// //       price: 60,
// //       category: "Watches",
// //     },
// //     {
// //       id: 3,
// //       image: "https://example.com/watch4.jpeg",
// //       title: "Sports Watch",
// //       price: 60,
// //       category: "Watches",
// //     },
// //     {
// //       id: 4,
// //       image: "https://example.com/watch5.jpeg",
// //       title: "Casual Watch",
// //       price: 60,
// //       category: "Watches",
// //     },
// //   ];

// // // Function to add a product to the cart
// // // function addToCart(productId) {
// // //     // Implement the logic to add the product to the cart here
// // //     // You can use the productId to identify which product was added.
// // //     // For now, let's just log the product id to the console.
// // //     console.log(`Added product with ID ${productId} to the cart.`);
// // // }

// // const productContainer = document.getElementById("root");
// // productContainer.innerHTML = products.map((product) => {
// //     const { id, image, title, price } = product;
// //     return `
// //         <div class="box">
// //             <div class="img-box">
// //                 <img class="images" src="${image}">
// //             </div>
// //             <div class="button">
// //                 <p>${title}</p>
// //                 <h2>$${price}.00</h2>
// //                 <button onclick="addToCart(${id})">Add to Cart</button>
// //             </div>
// //         </div>
// //     `;
// // }).join("");

// //  var cart =[];
// //  function addToCart(a) {
// //     cart.push({...categories[a]})// Implement the logic to add the product to the cart here
// //     // You can use the productId to identify which product was added.
// //     // For now, let's just log the product id to the console.
// //     // console.log(`Added product with ID ${productId} to the cart.`);
// //     displayCart();

// //     function delElement(a){
// //         cart.splice(a, 1);
// //         displayCart();
// //     }
// // }

// // function displayCart(a){
// //     document.getElementById("count").innerHtml = cart.length;
// //     let j =0; total = 0;
// //     if(cart.length===0){
// //         document.getElementById("cartItem").innerHTML = "Your Cart is Empty";
// //     } else{
// //         document.getElementById("cartItem").innerHtml= cart.map((items)=>{
// //             var{image, title, price} =items
// //             total =total+price;
// //             document.getElementById("total").innerHtml = "$" + 0+ " 00";
// //         })
// //     }
// // }



// // Define an array of product objects with properties like image, title, price, and category.
// const products = [
//     {
//       id: 0,                         
//       image: "https://images.unsplash.com/photo-1560807707-8cc77767aaf1", // Example Unsplash image URL
//       title: "Product 1",
//       price: 49.99,
//       category: "Category 1",
//     },
//     {
//       id: 1,
//       image: "https://images.unsplash.com/photo-1560807707-8cc77767aaf1", // Example Unsplash image URL
//       title: "Product 2",
//       price: 59.99,
//       category: "Category 1",
//     },
//     {
//       id: 2,
//       image: "https://images.unsplash.com/photo-1560807707-8cc77767aaf1", // Example Unsplash image URL
//       title: "Product 3",
//       price: 79.99,
//       category: "Category 2",
//     },
//     {
//       id: 3,
//       image: "https://images.unsplash.com/photo-1560807707-8cc77767aaf1", // Example Unsplash image URL
//       title: "Product 4",
//       price: 69.99,
//       category: "Category 2",
//     },
//     {
//       id: 4,
//       image: "https://images.unsplash.com/photo-1560807707-8cc77767aaf1", // Example Unsplash image URL
//       title: "Product 5",
//       price: 99.99,
//       category: "Category 3",
//     },
//     {
//       id: 5,
//       image: "https://images.unsplash.com/photo-1560807707-8cc77767aaf1", // Example Unsplash image URL
//       title: "Product 6",
//       price: 129.99,
//       category: "Category 3",
//     },
//     {
//       id: 6,
//       image: "https://images.unsplash.com/photo-1560807707-8cc77767aaf1", // Example Unsplash image URL
//       title: "Product 7",
//       price: 79.99,
//       category: "Category 4",
//     },
//     {
//       id: 7,
//       image: "https://images.unsplash.com/photo-1560807707-8cc77767aaf1", // Example Unsplash image URL
//       title: "Product 8",
//       price: 89.99,
//       category: "Category 4",
//     },
//     {
//       id: 8,
//       image: "https://images.unsplash.com/photo-1560807707-8cc77767aaf1", // Example Unsplash image URL
//       title: "Product 9",
//       price: 59.99,
//       category: "Category 5",
//     },
//     {
//       id: 9,
//       image: "https://images.unsplash.com/photo-1560807707-8cc77767aaf1", // Example Unsplash image URL
//       title: "Product 10",
//       price: 69.99,
//       category: "Category 5",
//     },
//     {
//       id: 10,                         
//       image: "https://images.unsplash.com/photo-1560807707-8cc77767aaf1", // Example Unsplash image URL
//       title: "Product 11",
//       price: 49.99,
//       category: "Category 1",
//     },
//     {
//       id: 11,
//       image: "https://images.unsplash.com/photo-1560807707-8cc77767aaf1", // Example Unsplash image URL
//       title: "Product 12",
//       price: 59.99,
//       category: "Category 1",
//     },
//     {
//       id: 12,
//       image: "https://images.unsplash.com/photo-1560807707-8cc77767aaf1", // Example Unsplash image URL
//       title: "Product 13",
//       price: 79.99,
//       category: "Category 2",
//     },
//     {
//       id: 13,
//       image: "https://images.unsplash.com/photo-1560807707-8cc77767aaf1", // Example Unsplash image URL
//       title: "Product 14",
//       price: 69.99,
//       category: "Category 2",
//     },
//     {
//       id: 14,
//       image: "https://images.unsplash.com/photo-1560807707-8cc77767aaf1", // Example Unsplash image URL
//       title: "Product 15",
//       price: 99.99,
//       category: "Category 3",
//     },
//     {
//       id: 15,
//       image: "https://images.unsplash.com/photo-1560807707-8cc77767aaf1", // Example Unsplash image URL
//       title: "Product 16",
//       price: 129.99,
//       category: "Category 3",
//     },
//     {
//       id: 16,
//       image: "https://images.unsplash.com/photo-1560807707-8cc77767aaf1", // Example Unsplash image URL
//       title: "Product 17",
//       price: 79.99,
//       category: "Category 4",
//     },
//     {
//       id: 17,
//       image: "https://images.unsplash.com/photo-1560807707-8cc77767aaf1", // Example Unsplash image URL
//       title: "Product 18",
//       price: 89.99,
//       category: "Category 4",
//     },
//     {
//       id: 18,
//       image: "https://images.unsplash.com/photo-1560807707-8cc77767aaf1", // Example Unsplash image URL
//       title: "Product 19",
//       price: 59.99,
//       category: "Category 5",
//     },
//     {
//       id: 19,
//       image: "https://images.unsplash.com/photo-1560807707-8cc77767aaf1", // Example Unsplash image URL
//       title: "Product 20",
//       price: 69.99,
//       category: "Category 5",
//     },
//   ];

// // Function to add a product to the cart
// function addToCart(productId) {
//     // Implement the logic to add the product to the cart here
//     // You can use the productId to identify which product was added.
//     // For now, let's just log the product id to the console.
//     console.log(`Added product with ID ${productId} to the cart.`);
// }

// const productContainer = document.getElementById("root");
// productContainer.innerHTML = products.map((product) => {
//     const { id, image, title, price } = product;
//     return `
//         <div class="box">
//             <div class="img-box">
//                 <img class="images" src="${image}">
//             </div>
//             <div class="button">
//                 <p>${title}</p>
//                 <h2>$${price}.00</h2>
               
// Sample product data with Unsplash image URLs
const products = [
    {
        id: 1,
        title: "Product 1",
        price: 29.99,
        imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9662",
    },
    {
        id: 2,
        title: "Product 2",
        price: 39.99,
        imageUrl: "https://images.unsplash.com/photo-1555687018-255a01414d85",
    },
    {
        id: 3,
        title: "Product 3",
        price: 49.99,
        imageUrl: "https://images.unsplash.com/photo-1565233950-94a30f7d14b0",
    },
    // Add more products here
];

// Function to display products on the website
function displayProducts() {
    const root = document.getElementById("root");

    // Clear existing content
    root.innerHTML = "";

    products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.className = "product";
        productElement.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.imageUrl}" alt="${product.title}">
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        root.appendChild(productElement);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (product) {
        // Implement cart functionality here (e.g., add the product to a cart array)
        // For this example, let's just log the product being added to the cart.
        console.log(`Added ${product.title} to the cart.`);
    }
}

// Initialize the page by displaying the products
displayProducts();
