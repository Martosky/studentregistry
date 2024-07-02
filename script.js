document.addEventListener('DOMContentLoaded', function() {
   const productItems = document.querySelectorAll('.product-item');

   productItems.forEach(item => {
       const viewDetailsBtn = item.querySelector('.view-details-btn');
       const productId = item.getAttribute('data-id');
       
       viewDetailsBtn.addEventListener('click', function() {
           // Redirect to product.html with product id as query parameter
           window.location.href = `product.html?id=${productId}`;
       });
   });

   // If you need to populate product details on product.html based on the ID in query parameter
   if (window.location.pathname.includes('product.html')) {
       const params = new URLSearchParams(window.location.search);
       const productId = params.get('id');
       
       // Example: Fetch product details from a database or hardcoded data
       const productDetails = {
           1: { title: 'Product 1', description: 'Description of Product 1.' },
           2: { title: 'Product 2', description: 'Description of Product 2.' }
           // Add more as needed
       };

       if (productId && productDetails[productId]) {
           document.getElementById('product-title').textContent = productDetails[productId].title;
           document.getElementById('product-description').textContent = productDetails[productId].description;
       } else {
           // Handle case where product ID doesn't exist
           console.error('Product ID not found');
       }
   }
});