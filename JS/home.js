/*-----Earrings-----*/
fetch('../JSON/earrings.json')
    .then(response => response.json())
    .then(products =>{
        const productList = document.getElementById('product-container');
        products.forEach(product =>{
            const productDiv = document.createElement('div');
            productDiv.className = 'pro';
            productDiv.innerHTML=`
            <a href="${product.link}">
            <img src="${product.image}">
            <div class="des">
                <span>${product.des}</span>
                <h5>${product.name}</h5>
                <h4>₱${product.price}</h4>
            </div>
            <a href="#"><i id="cart" class="fa fa-cart-plus"></i></a>
            </a>
            `;
            productList.appendChild(productDiv);
        })
    })


/*-----Necklace-----*/
fetch('../JSON/necklace.json')
    .then(response => response.json())
    .then(products =>{
        const productList = document.getElementById('necklace-container');
        products.forEach(product =>{
            const productDiv = document.createElement('div');
            productDiv.className = 'pro';
            productDiv.innerHTML=`
            <a href="../HTMLS/productsinge.html?item=${product.id}">
            <img src="${product.image}">
            <div class="des">
                <span>${product.des}</span>
                <h5>${product.name}</h5>
                <h4>₱${product.price}</h4>
            </div>
            <a href="#"><i id="cart" class="fa fa-cart-plus"></i></a>
            `;
            productList.appendChild(productDiv);
        })
    })

    